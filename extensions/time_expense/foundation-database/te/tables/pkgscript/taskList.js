include("xtte");

var tehead;
var _list = mywindow.list();

_list["populateMenu(QMenu *,XTreeWidgetItem *, int)"].connect(populateMenu);

// context menu
function populateMenu(pMenu, pItem, pCol)
{
  var mCode;
  if(pMenu != null)
  {
    pMenu.addSeparator();
    mCode = pMenu.addAction(qsTr("Add To Worksheet..."));
    mCode.enabled = privileges.check("MaintainFixedAsset");
    mCode.triggered.connect(postWorksheet);

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
        params.prj_id = tsDetails.value("task_prj_id");
        params.note   = tsDetails.value("task_descrip");
        params.number = tsDetails.value("task_number");
        params.fromtask =  true;
        params.cust_id  = tsDetails.value("cust_id");
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