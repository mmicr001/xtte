CREATE OR REPLACE FUNCTION te.triggertehead() RETURNS "trigger" AS $$
-- Copyright (c) 1999-2018 by OpenMFG LLC, d/b/a xTuple. 
-- See www.xtuple.com/CPAL for the full text of the software license.
DECLARE
_r RECORD;
_sense INTEGER := 0;

BEGIN

  -- Determine whether we are adding or subtracting totals
  IF (TG_OP = 'UPDATE') THEN
    IF (OLD.tehead_status = 'O' AND NEW.tehead_status = 'A') THEN
    -- Approving so add
      _sense := 1;
    ELSIF  ((OLD.tehead_status = 'C' OR OLD.tehead_status = 'A') AND NEW.tehead_status = 'O') THEN
    -- Reopening or Unapproving so subtract
      _sense := -1;
    END IF;
  END IF;

  IF (_sense != 0) THEN
    -- Loop thru all lines of the sheet and update project
    FOR _r in 
      SELECT teitem_prjtask_id, teitem_type, teitem_qty, teitem_total 
      FROM te.teitem
      WHERE teitem_tehead_id = NEW.tehead_id

    LOOP
      IF (_r.teitem_type = 'T') THEN
        UPDATE prjtask SET 
          prjtask_hours_actual = prjtask_hours_actual + _r.teitem_qty * _sense
        WHERE prjtask_id = _r.teitem_prjtask_id;
      ELSE
        UPDATE prjtask SET 
          prjtask_exp_actual = prjtask_exp_actual + _r.teitem_total * _sense
        WHERE prjtask_id = _r.teitem_prjtask_id;
      END IF;
            
    END LOOP;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

drop trigger if exists teheadtrigger on te.tehead;
create trigger teheadtrigger after insert or update on te.tehead for each row execute procedure te.triggertehead();
