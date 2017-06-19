-- work around problems loading xtte into an empty database
DO $$
  BEGIN
    DELETE FROM curr_rate
     WHERE curr_id = (SELECT curr_id FROM curr_symbol
                       WHERE curr_abbr = 'nil' and curr_symbol = 'xtte');
    DELETE FROM curr_symbol WHERE curr_abbr = 'nil' and curr_symbol = 'xtte';
  END;
$$ LANGUAGE plpgsql;
