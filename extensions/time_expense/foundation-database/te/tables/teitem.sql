select xt.create_table('teitem', 'te');

select xt.add_column('teitem','teitem_id', 'serial', '', 'te');
select xt.add_column('teitem','teitem_tehead_id', 'integer', '', 'te');
select xt.add_column('teitem','teitem_linenumber', 'integer', 'not null', 'te');
select xt.add_column('teitem','teitem_type', 'character(1)', 'not null', 'te');
select xt.add_column('teitem','teitem_workdate', 'date', '', 'te');
select xt.add_column('teitem','teitem_cust_id', 'integer', '', 'te');
select xt.add_column('teitem','teitem_vend_id', 'integer', '', 'te');
select xt.add_column('teitem','teitem_po', 'text', '', 'te');
select xt.add_column('teitem','teitem_item_id', 'integer', 'not null', 'te');
select xt.add_column('teitem','teitem_qty', 'numeric', 'not null', 'te');
select xt.add_column('teitem','teitem_rate', 'numeric', 'not null', 'te');
select xt.add_column('teitem','teitem_total', 'numeric', 'not null', 'te');
select xt.add_column('teitem','teitem_prjtask_id', 'integer', 'not null', 'te');
select xt.add_column('teitem','teitem_lastupdated', 'timestamp without time zone', $$not null default ('now'::text)::timestamp(6) with time zone$$, 'te');
select xt.add_column('teitem','teitem_billable', 'boolean', '', 'te');
select xt.add_column('teitem','teitem_prepaid', 'boolean', '', 'te');
select xt.add_column('teitem','teitem_notes', 'text', '', 'te');
select xt.add_column('teitem','teitem_posted', 'boolean', 'default false', 'te');
select xt.add_column('teitem','teitem_curr_id', 'integer', 'not null default basecurrid()', 'te');
select xt.add_column('teitem','teitem_uom_id', 'integer', '', 'te');
select xt.add_column('teitem','teitem_invcitem_id', 'integer', '', 'te');
select xt.add_column('teitem','teitem_vodist_id', 'integer', '', 'te');
select xt.add_column('teitem','teitem_postedvalue', 'numeric', 'not null default 0', 'te');
select xt.add_column('teitem','teitem_empcost', 'numeric', '', 'te');

UPDATE te.teitem SET teitem_cust_id = NULL WHERE teitem_cust_id = -1;

SELECT xt.add_primary_key('teitem', 'teitem_id', 'te'),
       xt.add_constraint('teitem', 'teitem_teitem_curr_id_fkey','foreign key (teitem_curr_id) references curr_symbol (curr_id) on delete set default', 'te'),
       xt.add_constraint('teitem', 'teitem_teitem_invcitem_id_fkey','foreign key (teitem_invcitem_id) references invcitem (invcitem_id) on delete set null', 'te'),
       xt.add_constraint('teitem', 'teitem_teitem_tehead_id_fkey','foreign key (teitem_tehead_id) references te.tehead (tehead_id)', 'te'),
       xt.add_constraint('teitem', 'teitem_teitem_vodist_id_fkey','foreign key (teitem_vodist_id) references vodist (vodist_id) on delete set null', 'te'),
       xt.add_constraint('teitem', 'teitem_cust_id_fk', 'FOREIGN KEY (teitem_cust_id) REFERENCES custinfo(cust_id)', 'te'),
       xt.add_constraint('teitem', 'teitem_vend_id_fk', 'FOREIGN KEY (teitem_vend_id) REFERENCES vendinfo(vend_id)', 'te');

-- fix bad datatype problem with teitem_prjtask_id - allow it to be an fkey
-- first drop any views that depend on it
DO $$
declare
  _t    record;
begin
  if exists(select 1
              from information_schema.columns
             where table_name   = 'teitem'
               and table_schema = 'te'
               and column_name  = 'teitem_prjtask_id'
               and data_type    = 'numeric') then
    for _t in select distinct dependee_namespace.nspname as nspname,
                              dependee.relname           as relname
          from pg_depend
          join pg_rewrite ON pg_depend.objid = pg_rewrite.oid
          join pg_class as dependee ON pg_rewrite.ev_class = dependee.oid
          join pg_class as dependent ON pg_depend.refobjid = dependent.oid
          join pg_attribute ON pg_depend.refobjid = pg_attribute.attrelid
                           and pg_depend.refobjsubid = pg_attribute.attnum
          join pg_namespace as dependent_namespace on dependent.relnamespace=dependent_namespace.oid
          join pg_namespace as dependee_namespace on dependee.relnamespace=dependee_namespace.oid
         where dependent_namespace.nspname = 'te'
           and dependent.relname = 'teitem'
           and pg_attribute.attnum > 0
           and pg_attribute.attname = 'teitem_prjtask_id' loop
      execute format('drop view %I.%I cascade;', _t.nspname, _t.relname);
    end loop;
    alter table te.teitem alter column teitem_prjtask_id set data type integer;
  end if;
end
$$ language plpgsql;
select xt.add_constraint('teitem', 'teitem_teitem_prjtask_id_fkey','foreign key (teitem_prjtask_id) references prjtask (prjtask_id) ', 'te');

comment on table te.teitem is 'Time Expense Worksheet Item';
