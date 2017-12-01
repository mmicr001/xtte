CREATE OR REPLACE FUNCTION te.invoicesheets(pHeadIDs integer[]) RETURNS integer AS $$
-- Copyright (c) 1999-2015 by OpenMFG LLC, d/b/a xTuple. 
-- See www.xtuple.com/CPAL for the full text of the software license.

BEGIN
  RETURN te.invoicesheets(pHeadIDs, CURRENT_DATE);
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION te.invoicesheets(pHeadIDs integer[],
                                            pInvcdate date) RETURNS integer AS $$
-- Copyright (c) 1999-2012 by OpenMFG LLC, d/b/a xTuple. 
-- See www.xtuple.com/CPAL for the full text of the software license.
DECLARE
_invcnum text;
_invcheadid integer;
_invcitemid integer;
_s record;
_t record;
_linenum integer;

BEGIN
       -- Loop through time sheet items with matching criteria and make invoices
       FOR _s in SELECT DISTINCT 
                   teitem_cust_id, 
                   teitem_po, 
                   prj_id, 
                   teitem_curr_id
       FROM te.tehead 
         JOIN te.teitem ON (teitem_tehead_id=tehead_id AND teitem_billable)
         JOIN prjtask ON (teitem_prjtask_id=prjtask_id)
         JOIN prj ON (prjtask_prj_id=prj_id)
         LEFT OUTER JOIN invcitem ON teitem_invcitem_id=invcitem_id
         LEFT OUTER JOIN invchead ON invcitem_invchead_id=invchead_id
       WHERE ((tehead_id IN (SELECT * FROM te.unnest(pHeadIDs) ) )
        AND (teitem_billable)
        AND (COALESCE(invchead_void, TRUE)))

       -- loop thru records and create invoices by customer, by PO for the provided headid
       LOOP
         --select nextval('invchead_invchead_id_seq') into _invcid;
         _invcnum := CAST(fetchInvcNumber() AS TEXT);
         _invcheadid := nextval('invchead_invchead_id_seq');
         _linenum := 1;

         INSERT INTO invchead
               (invchead_id, invchead_cust_id, invchead_shipto_id,
                invchead_ordernumber, invchead_orderdate, invchead_posted,
                invchead_printed, invchead_invcnumber, invchead_invcdate,
                invchead_shipdate, invchead_ponumber, invchead_shipvia,
                invchead_fob, invchead_billto_name, invchead_billto_address1,
                invchead_billto_address2, invchead_billto_address3, invchead_billto_city,
                invchead_billto_state, invchead_billto_zipcode, invchead_billto_phone,
                invchead_shipto_name, invchead_shipto_address1, invchead_shipto_address2,
                invchead_shipto_address3, invchead_shipto_city, invchead_shipto_state,
                invchead_shipto_zipcode, invchead_shipto_phone, invchead_salesrep_id,
                invchead_commission, invchead_terms_id, invchead_freight,
                invchead_misc_amount, invchead_misc_descrip, invchead_misc_accnt_id,
                invchead_payment, invchead_paymentref, invchead_notes,
                invchead_billto_country, invchead_shipto_country, invchead_prj_id,
                invchead_curr_id, invchead_gldistdate, invchead_recurring,
                invchead_recurring_interval, invchead_recurring_type, invchead_recurring_until,
                invchead_recurring_invchead_id, invchead_shipchrg_id, invchead_taxzone_id,
                invchead_void, invchead_saletype_id, invchead_shipzone_id)
         SELECT _invcheadid, cust_id, -1,
                '', current_date, false,
                false, _invcnum, COALESCE(pInvcdate, current_date),
                current_date, _s.teitem_po, '',
                '', cust_name, COALESCE(addr_line1,''),
                COALESCE(addr_line2,''), COALESCE(addr_line3,''), COALESCE(addr_city,''),
                COALESCE(addr_state,''), COALESCE(addr_postalcode,''), cntct_phone, 
                '', '', '',
                '', '', '',
                '', '', cust_salesrep_id,
                salesrep_commission, cust_terms_id, 0,
                0, '', -1,
                0, '', '',
                COALESCE(addr_country,''), '', _s.prj_id, 
                _s.teitem_curr_id, current_date, false,
                null, null, null,
                null, null, cust_taxzone_id,
                false, null, null
         FROM custinfo
           JOIN salesrep ON (cust_salesrep_id=salesrep_id)
           LEFT OUTER JOIN cntct ON (cust_cntct_id=cntct_id)
           LEFT OUTER JOIN addr ON (cntct_addr_id=addr_id)
         WHERE (cust_id=_s.teitem_cust_id);

          -- loop thru all lines of the sheet
          FOR _t IN SELECT 
               teitem_id,
               teitem_linenumber, 
               tehead_warehous_id,
               teitem_type,
               tehead_emp_id,
               cust_taxzone_id,
               item_number,
               teitem_cust_id,
               teitem_po,
               teitem_item_id,
               teitem_qty,
               teitem_uom_id,
               teitem_rate,
               teitem_notes
             FROM te.teitem
               JOIN te.tehead ON (teitem_tehead_id = tehead_id)
               JOIN custinfo ON (cust_id = teitem_cust_id)
               JOIN item ON (item_id = teitem_item_id)
               JOIN prjtask ON (teitem_prjtask_id=prjtask_id)
               JOIN prj ON (prjtask_prj_id=prj_id)
               LEFT OUTER JOIN invcitem ON teitem_invcitem_id=invcitem_id
               LEFT OUTER JOIN invchead ON invcitem_invchead_id=invchead_id
             WHERE ((tehead_id IN (SELECT * FROM te.unnest(pHeadIDs) ) )
              AND (teitem_billable)
              AND (COALESCE(invchead_void, TRUE))
              AND (item_id = teitem_item_id)
              AND (teitem_cust_id = _s.teitem_cust_id)
              AND (teitem_po = _s.teitem_po)
              AND (prj_id = _s.prj_id)
              AND (teitem_curr_id = _s.teitem_curr_id))
             ORDER BY teitem_linenumber
          LOOP
            _invcitemid := nextval('invcitem_invcitem_id_seq');

            INSERT INTO invcitem
                  (invcitem_id, invcitem_invchead_id, invcitem_linenumber,
                   invcitem_item_id, invcitem_warehous_id, invcitem_custpn,
                   invcitem_number, invcitem_descrip, invcitem_ordered,
                   invcitem_billed, invcitem_custprice, invcitem_price,
                   invcitem_notes, invcitem_salescat_id, invcitem_taxtype_id,
                   invcitem_qty_uom_id, invcitem_qty_invuomratio,
                   invcitem_price_uom_id, invcitem_price_invuomratio,
                   invcitem_coitem_id, invcitem_updateinv, invcitem_rev_accnt_id)
            SELECT _invcitemid, _invcheadid, _linenum,
                   _t.teitem_item_id, _t.tehead_warehous_id, '',
                   '', '', _t.teitem_qty,
                   _t.teitem_qty, _t.teitem_rate, _t.teitem_rate,
                   _t.teitem_notes, -1, getItemTaxType(item_id, _t.cust_taxzone_id), 
                   _t.teitem_uom_id, itemuomtouomratio(item_id, _t.teitem_uom_id, item_inv_uom_id),
                   _t.teitem_uom_id, itemuomtouomratio(item_id, _t.teitem_uom_id, item_inv_uom_id),
                   null, false, null
            FROM item
            WHERE (item_id=_t.teitem_item_id);

            _linenum := _linenum + 1;
            
            -- Update the time sheet item record
            UPDATE te.teitem SET teitem_invcitem_id = _invcitemid WHERE (teitem_id = _t.teitem_id);
            
          END LOOP;
       END LOOP;

RETURN 1;
END;
$$ LANGUAGE plpgsql;
