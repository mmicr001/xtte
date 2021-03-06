{
  "name": "time_expense",
  "version": "2.4.7",
  "comment": "Time Expense Management extension",
  "loadOrder": 100,
  "dependencies": ["project"],
  "databaseScripts": [
    "xt/trigger_functions/teitem_did_change.sql",
    "te/tables/teitem.sql",
    "xt/functions/te_total_hours.sql",
    "xt/functions/te_total_expenses.sql",
    "xt/functions/te_to_invoice.sql",
    "xt/functions/te_to_voucher.sql",
    "xt/functions/te_invoiced_value.sql",
    "xt/functions/te_posted_value.sql",
    "xt/functions/te_vouchered_value.sql",
    "xt/functions/te_invoiced_state.sql",
    "xt/functions/te_posted_state.sql",
    "xt/functions/te_vouchered_state.sql",
    "xt/views/prjtaskinfo.sql",
    "xt/views/tecustrateinfo.sql",
    "xt/views/teprjinfo.sql",
    "xt/views/teprjtaskinfo.sql",
    "xt/views/teexpinfo.sql",
    "xt/views/teheadinfo.sql",
    "xt/views/teiteminfo.sql",
    "xm/javascript/project.sql",
    "xm/javascript/worksheet.sql"
  ]
}
