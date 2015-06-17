do $$
begin
  if NOT EXISTS(select 1
                  from pg_class c
                  join pg_namespace n on n.oid = c.relnamespace
                 where c.relkind = 'S'
                   and n.nspname = 'te'
                   and c.relname = 'timesheet_seq') then
    create sequence te.timesheet_seq start 1000;
    grant all on te.timesheet_seq to xtrole;
  end if;
end
$$ language plpgsql;

select xt.create_table('tehead', 'te');

-- remove old trigger if any
drop trigger if exists teheadtrigger on te.tehead;

select xt.add_column('tehead','tehead_id', 'serial', 'not null', 'te');
select xt.add_column('tehead','tehead_number', 'text', $$default nextval('te.timesheet_seq'::regclass)$$, 'te');
select xt.add_column('tehead','tehead_weekending', 'date', '', 'te');
select xt.add_column('tehead','tehead_lastupdated', 'timestamp without time zone', 'not null default now()', 'te');
select xt.add_column('tehead','tehead_notes', 'text', '', 'te');
select xt.add_column('tehead','tehead_status', 'character(1)', $$not null default 'O'::bpchar$$, 'te');
select xt.add_column('tehead','tehead_emp_id', 'integer', '', 'te');
select xt.add_column('tehead','tehead_warehous_id', 'integer', '', 'te');
select xt.add_column('tehead','tehead_username', 'text', '', 'te');
select xt.add_primary_key('tehead', 'tehead_id', 'te');

alter table te.tehead alter column tehead_username set default geteffectivextuser();
select xt.add_constraint('tehead', 'tehead_tehead_status_check', $$check (tehead_status = any (array['O'::bpchar, 'A'::bpchar, 'C'::bpchar]))$$, 'te');

comment on table te.tehead is 'Time/Expense Worksheet Header';
grant all on sequence te.tehead_tehead_id_seq to xtrole;

-- create trigger

create trigger teheadtrigger after insert or update on te.tehead for each row execute procedure te.triggertehead();
