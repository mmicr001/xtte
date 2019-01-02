/*
 * This file is part of the xtte package for xTuple ERP: PostBooks Edition, a free and
 * open source Enterprise Resource Planning software suite,
 * Copyright (c) 1999-2018 by OpenMFG LLC, d/b/a xTuple.
 * It is licensed to you under the Common Public Attribution License
 * version 1.0, the full text of which (including xTuple-specific Exhibits)
 * is available at www.xtuple.com/CPAL.  By using this software, you agree
 * to be bound by its terms.
 */

include("xtte");
xtte.task = new Object;

var _tab = mywindow.findChild("_tab"); 
var _project = mywindow.findChild("_project"); 
var _tebilling = toolbox.loadUi("tebilling", mywindow);
_tab.insertTab(2, _tebilling, qsTr("Billing"));
_tab.setTabEnabled(_tab.indexOf(_tebilling), privileges.check("CanMaintainRates CanViewRates"));

var _number = mywindow.findChild("_number");
var _actualHours = mywindow.findChild("_actualHours");
var _actualExp = mywindow.findChild("_actualExp");
var _billingGroup = _tebilling.findChild("_billingGroup");
var _itemGroup = _tebilling.findChild("_itemGroup");
var _cust = _tebilling.findChild("_cust");
var _rate = _tebilling.findChild("_rate");
var _item = _tebilling.findChild("_item");
var _useItem = _tebilling.findChild("_useItem");
var _teprjtaskid = -1; 
var _prjtaskid = -1;
var tehead;

var _worksheets = new QPushButton(qsTr("Open Worksheets"), mywindow, "_worksheets");
_worksheets.text = qsTr("Open Worksheets");
var _worksheet = new QPushButton(qsTr("Add to Worksheet"), mywindow, "_worksheet");
_worksheet.text = qsTr("Add to Worksheet");
_worksheet.setEnabled(false);

var _teLayout =  toolbox.widgetGetLayout(_actualHours);
_teLayout.addWidget(_worksheets, 3, 1, 0);
_teLayout.addWidget(_worksheet, 4, 1, 0);
_tespacer = new QSpacerItem(0,200);
_teLayout.addItem(_tespacer, 5, 1);

set = function(input)
{

  if ("isTemplate" in input)
    _tab.removeTab(_tab.indexOf(_tebilling));

  if("task_id" in input)
  {
    _prjtaskid = input.task_id;
    xtte.task.populate();
  }

  if("cust_id" in input)
  {
    _cust.setId(input.cust_id);
    _cust.enabled = false;
  }

  if("mode" in input)
  {
    if (input.mode == "view" || !privileges.check("CanMaintainRates"))
    {
      _cust.enabled = false;
      _billingGroup.enabled = false;
      _itemGroup.enabled = false;
    }
  }

  return mainwindow.NoError;
}

xtte.task.save = function(prjtaskId)
{
  if (prjtaskId <= 0)
    return;

  var params = {teprjtask_id: _teprjtaskid,
                prjtask_id:   prjtaskId};
  if (_cust.isValid())
    params.cust_id  	= _cust.id();
  if (_billingGroup.checked)
  {
    params.rate	= _rate.localValue;
    params.curr_id	= _rate.id();
  }
  if (_useItem.checked && _item.isValid())
    params.item_id	= _item.id()

  var q = toolbox.executeDbQuery("task", "saveteprjtask", params);
  xtte.errorCheck(q);
}

xtte.task.populate = function()
{
  var q = toolbox.executeDbQuery("task", "selteprjtask", {prjtask_id: _prjtaskid});

  if (q.first())
  {
    _teprjtaskid = q.value("teprjtask_id");

    if (!_cust.isValid())
      _cust.setId(q.value("cust_id"));

    if (q.value("curr_id") == -1)
      _billingGroup.checked = false;
    else
    {
      _billingGroup.checked = true;
      _rate.setId(q.value("curr_id"));
      _rate.localValue = q.value("teprjtask_rate");
    }

    if (q.value("item_id") == -1)
      _useItem.checked = false;
    else
    {
      _useItem.checked = true;
      _item.setId(q.value("item_id"));
    }
  }
  else
    xtte.errorCheck(q);
}

xtte.task.handleProject = function()
{
  _worksheet.enabled = _project.isValid();
}

function postWorksheet()
{
  var params = {mode:      xtte.newMode,
                task_id:   _prjtaskid};
  try 
  {
    sGetTeHead();
    if (!tehead)
      QMessageBox.information(mywindow, "Missing Timesheet", "There is no active Worksheet.");
    else 
    {
      params.tehead_id = tehead.id;
      var tsDetails = toolbox.executeDbQuery("task", "getWorksheetDetails", {task_id: _prjtaskid});
      if (tsDetails.first())
      {
        params.prj_id   = tsDetails.value("task_prj_id");
        params.note     = tsDetails.value("task_descrip");
        params.number   = tsDetails.value("task_number");
        params.cust_id  = tsDetails.value("cust_id");
        params.fromtask = true;
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
    tehead = {id:      sheetNumber.value("tehead_id"),
              enddate: sheetNumber.value("enddate") };
  }
}

// Initialize
_item.setQuery(xtte.itemSql);
_item.setType(0x00000040 | 0x80000000 | 0x08000000);
_useItem.checked = false;

// Connections
mydialog["finished(int)"].connect(xtte.task.save);
_worksheet.clicked.connect(postWorksheet);
_worksheets.clicked.connect(openWorksheet);
_project["newId(int)"].connect(xtte.task.handleProject);

