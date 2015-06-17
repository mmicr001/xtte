select xt.add_column('teitem','obj_uuid', 'uuid', 'default xt.uuid_generate_v4()', 'te');
select xt.add_inheritance('te.teitem', 'xt.obj');
select xt.add_constraint('teitem', 'teitem_obj_uuid','unique(obj_uuid)', 'te');
create trigger teitem_did_change after insert on te.teitem for each row execute procedure xt.teitem_did_change();
