-- add necessary privs in the absence of xt.add_priv
do $$
declare
  _privs TEXT[] := ARRAY[
      [ 'MaintainTimeExpenseOthers', 'Allowed to Maintain Time/Exp Sheets for all users' ],
      [ 'MaintainTimeExpenseSelf',   'Allowed to Maintain Time/Exp Sheets' ],
      [ 'MaintainTimeExpense',       'Allowed to Maintain Time/Exp Sheets' ],
      [ 'CanViewRates',              'Allowed to view rates in the Time Entries' ],
      [ 'MaintainEmpCostAll',        'Allowed to maintain employee costs for all users' ],
      [ 'MaintainEmpCostSelf',       'Allowed to maintain own employee costs' ],
      [ 'CanApprove',                'Allowed to Approve Time/Exp Sheets' ],
      [ 'allowInvoicing',            'Allowed to Invoice Time/Exp Sheets' ],
      [ 'allowVouchering',           'Allowed to Voucher Time/Exp Sheets' ],
      [ 'PostTimeSheets',            'Allowed to Post Time Sheets' ],
      [ 'ViewTimeExpenseHistory',    'Allowed to view Time Expense Sheet history' ]
    ];
  _p TEXT[];
begin
  foreach _p slice 1 in array _privs loop
    if not exists(select 1 from priv where priv_name = _p[1]) then
      insert into te.pkgpriv (priv_module, priv_name, priv_descrip)
                      values ('TE',        _p[1],    _p[2]);
    end if;
    perform grantPriv('admin', _p[1]);
  end loop;
end
$$ language plpgsql;
