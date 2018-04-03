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
  try 
  {
    sGetTeHead();
    if (!tehead)
      QMessageBox.information(mywindow, "Missing Timesheet", "There is no active Worksheet.");
    else 
    {
      var tsDetails = toolbox.executeDbQuery("task", "getWorksheetDetails", {task_id: _list.id()});
      if (tsDetails.first())
      {
        var params = {mode: xtte.newMode,
                      tehead_id: tehead.id,
                      prj_id: tsDetails.value("task_prj_id"),
                      task_id: _list.id(),
                      note: tsDetails.value("task_descrip"),
                      number: tsDetails.value("task_number"),
                      fromtask:  true,
                      cust_id: tsDetails.value("cust_id")
                     };
      }

      var tmp = toolbox.openWindow("timeExpenseSheetItem", mywindow, Qt.NonModal, Qt.Dialog);
      var result = toolbox.lastWindow().set(params);
    }
  } 
  catch (e) 
  {
    QMessageBox.critical(mywindow, "incident", "sAddToLatestTESheet line " + e.lineNumber + ": " + e.message);
  }
}

function openWorksheet()
{
  var tmp = toolbox.openWindow("timeExpenseSheets", mywindow, Qt.ApplicationModal, Qt.Dialog);
  var execval = tmp.exec();
}

function sGetTeHead()
{
  var qry = "SELECT tehead_id, tehead_weekending::text AS enddate"
        + " FROM te.tehead WHERE tehead_status='O' "
        + " AND tehead_emp_id = (SELECT emp_id FROM emp "
        + "  WHERE LOWER(emp_code) = LOWER(getEffectiveXTUser()) ) "
        + " ORDER BY tehead_weekending DESC LIMIT 1; ";

  var sheetNumber = toolbox.executeQuery(qry);
  if (sheetNumber.first()) {
    tehead = { id:     sheetNumber.value("tehead_id"),
               number: sheetNumber.value("enddate") };
  }
}