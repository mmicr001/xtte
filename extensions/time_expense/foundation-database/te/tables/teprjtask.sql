select xt.create_table('teprjtask', 'te');

ALTER TABLE te.teprjtask DISABLE TRIGGER ALL;

SELECT xt.add_column('teprjtask', 'teprjtask_id',          'SERIAL', 'NOT NULL',             'te'),
       xt.add_column('teprjtask', 'teprjtask_cust_id',    'INTEGER', '',                     'te'),
       xt.add_column('teprjtask', 'teprjtask_rate',       'NUMERIC', '',                     'te'),
       xt.add_column('teprjtask', 'teprjtask_item_id',    'INTEGER', '', 'te'),
       xt.add_column('teprjtask', 'teprjtask_prjtask_id', 'INTEGER', '',                     'te'),
       xt.add_column('teprjtask', 'teprjtask_curr_id',    'INTEGER', 'DEFAULT basecurrid()', 'te');

SELECT xt.add_primary_key('teprjtask', 'teprjtask_id', 'te');

SELECT xt.add_constraint('teprjtask', 'teprjtask_teprjtask_prjtask_id_key', 'UNIQUE (teprjtask_prjtask_id )', 'te'),
       xt.add_constraint('teprjtask', 'teprjtask_teprjtask_curr_id_fkey',
                         'FOREIGN KEY (teprjtask_curr_id) REFERENCES curr_symbol(curr_id) ON DELETE SET DEFAULT', 'te');

-- this is a conscious choice - see 6e877eda and ace0ff12 - but why?
alter table te.teprjtask drop constraint if exists teprjtask_teprjtask_prjtask_id_fkey;
alter table te.teprjtask alter column teprjtask_prjtask_id set not null;

ALTER TABLE te.teprjtask ENABLE TRIGGER ALL;

comment on table te.teprjtask is 'Time Expense Project Task';
