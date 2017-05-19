select xt.create_table('teprj', 'te');

select xt.add_column('teprj','teprj_id', 'serial', 'not null', 'te');
select xt.add_column('teprj','teprj_prj_id', 'integer', '', 'te');
select xt.add_column('teprj','teprj_cust_id', 'integer', '', 'te');
select xt.add_column('teprj','teprj_rate', 'numeric', '', 'te');
select xt.add_column('teprj','teprj_curr_id', 'integer', '', 'te');
select xt.add_primary_key('teprj', 'teprj_id', 'te');
select xt.add_constraint('teprj', 'teprj_teprj_curr_id_fkey','foreign key (teprj_curr_id) references curr_symbol (curr_id)', 'te');
select xt.add_constraint('teprj', 'teprj_teprj_cust_id_fkey','foreign key (teprj_cust_id) references custinfo (cust_id)', 'te');
select xt.add_constraint('teprj', 'teprj_teprj_prj_id','unique(teprj_prj_id)', 'te');
comment on table te.teprj is 'Time/Expense Information for Projects';

grant all on te.teprj_teprj_id_seq to xtrole;
