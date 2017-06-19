-- work around problems loading xtte into an empty database
DO $$
  DECLARE _id INTEGER;
  BEGIN
    IF NOT EXISTS(SELECT 1 FROM curr_symbol WHERE curr_base) THEN
      INSERT INTO curr_symbol (curr_base, curr_abbr, curr_symbol, curr_name)
                       VALUES (true,      'nil',     'xtte',      'temporary')
     RETURNING curr_id INTO _id;
    END IF;
  END;
$$ LANGUAGE plpgsql;

