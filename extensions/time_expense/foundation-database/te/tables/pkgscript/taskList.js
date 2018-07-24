include("xtte");

var tehead;
var _list = mywindow.list();

_list["populateMenu(QMenu *,XTreeWidgetItem *, int)"].connect(populateMenu);

// context menu
function populateMenu(pMenu, pItem, pCol)
{
  var mCode, isProjectTask, isProjectLinked;

  var sql = "SELECT task_parent_type, COALESCE(task_prj_id, -1) AS task_prj_id "
          + "  FROM task "
          + " WHERE task_id = <? value('task_id') ?>; ";
  var qry = toolbox.executeQuery(sql, {task_id: _list.id()});
  if (!xtte.errorCheck(qry))
    return;
  if (qry.first())
  {
    isProjectTask = (qry.value("task_parent_type").toString() == 'J');
    isProjectLinked = (qry.value("task_prj_id") > 0);
  }

  if(pMenu != null)
  {
    pMenu.addSeparator();
    if (isProjectTask || isProjectLinked)
    {
      mCode = pMenu.addAction(qsTr("Add To Worksheet..."));
      mCode.enabled = privileges.check("MaintainFixedAsset");
      mCode.triggered.connect(postWorksheet);
    }
    mCode = pMenu.addAction(qsTr("Open Worksheet..."));
    mCode.enabled = privileges.check("MaintainFixedAsset");
    mCode.triggered.connect(openWorksheet);
  }
}

function postWorksheet()
{
  var params = {mode:    xtte.newMode,
                task_id: _list.id()};
  try 
  {
    sGetTeHead();
    if (!tehead)
      QMessageBox.information(mywindow, "Missing Timesheet", "There is no active Worksheet.");
    else 
    {
      params.tehead_id  = tehead.id;
      var tsDetails = toolbox.executeDbQuery("task", "getWorksheetDetails", {task_id: _list.id()});
      if (tsDetails.first())
      {
        params.parent_type = tsDetails.value("task_parent_type");
        params.prj_id = tsDetails.value("task_prj_id");
        params.note   = tsDetails.value("task_descrip");
        params.number = tsDetails.value("task_number");
        params.fromtask =  true;
        params.cust_id  = tsDetails.value("cust_id");
      }

      // If parent document has link to a project, then when time is attempted to be entered
      // against document task, first setup task and project task
      if (params.parent_type != 'J' && params.prj_id > 0)
      {
        var sql = "UPDATE task SET task_parent_type = 'J', task_parent_id = <? value('prj_id') ?> "
                + "WHERE task_id = <? value('task_id') ?>;";
        var qry = toolbox.executeQuery(sql, params);
        if (!xtte.errorCheck(qry))
          return;
        mywindow.sFillList();
      }

      var tmp = toolbox.openWindow("timeExpenseSheetItem", mywindow, Qt.NonModal, Qt.Dialog);
      var result = toolbox.lastWindow().set(params);
    }
  } 
  catch (e) 
  {
    QMessageBox.critical(mywindow, qsTr("Task List"), qsTr("sAddToLatestTESheet line %1: %2").arg(e.lineNumber).arg(e.message));
  }
}

function openWorksheet()
{
  var tmp = toolbox.openWindow("timeExpenseSheets", mywindow, Qt.ApplicationModal, Qt.Dialog);
  var execval = tmp.exec();
}

function sGetTeHead()
{
  var sql = "SELECT tehead_id, tehead_weekending::text AS enddate"
        + " FROM te.tehead WHERE tehead_status='O' "
        + " AND tehead_emp_id = (SELECT emp_id FROM emp "
        + "  WHERE LOWER(emp_code) = LOWER(getEffectiveXTUser()) ) "
        + " ORDER BY tehead_weekending DESC LIMIT 1; ";

  var qry = toolbox.executeQuery(sql);
  if (!xtte.errorCheck(qry))
    return;
  if (qry.first())
  {
    tehead = { id:     qry.value("tehead_id"),
               number: qry.value("enddate") };
  }
}