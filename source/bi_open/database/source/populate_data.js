module.exports = [
                  
/*
 * Opportunities and Quotes sort'a follow the sales order data populated by 
 * select dbtools.popordertocash('2012-12-01', 1) which generates period amounts:
 * 
 * "2013","1","21910.6"
 * "2013","2","20727.1"
 * "2013","3","10367.5"
 * "2013","4","20561.1"
 * "2013","5","23194.6"
 * "2013","6","27781.6"
 * "2013","7","19289.1"
 * "2013","8","14579.8"
 * "2013","9","13942.3"
 * "2013","10","21371.3"
 * "2013","11","27536.2"
 * "2013","12","17736.0"
 * "2014","1","25902.0"
 * "2014","2","19716.7"
 * "2014","3","11786.9"
 * "2014","4","18762.7"
 * "2014","5","20950.4"
 * "2014","6","23431.5"
 * "2014","7","22092.9"
 * "2014","8","17660.7"
 * "2014","9","18297.4"
 * "2014","10","18979.5"
 * "2014","11","27554.0"
 * "2014","12","18558.5"
 */

/*
 * User Accounts
 */
  {"nameSpace":"XM","type":"UserAccount","id":"samm","data":{"disableExport":false,"isActive":true,"isAgent":false,"locale":"Default","grantedPrivileges":[],"userAccountRoles":[],"grantedUserAccountRoles":[{"userAccountRole":"ADMIN","uuid":"4d429cc9-dc24-43ba-8021-875654656e27"}],"grantedExtensions":[],"username":"samm","password":"admin","properName":"Sam Masters"},"binaryField":null,"requery":false,"encoding":"rjson"},
  {"nameSpace":"XM","type":"UserAccount","id":"johns","data":{"disableExport":false,"isActive":true,"isAgent":false,"locale":"Default","grantedPrivileges":[],"userAccountRoles":[],"grantedUserAccountRoles":[{"userAccountRole":"ADMIN","uuid":"c9906fc8-1ee4-4198-f8e6-d19f53db23c7"}],"grantedExtensions":[],"username":"johns","password":"admin","properName":"John Smith"},"binaryField":null,"requery":false,"encoding":"rjson"},
  {"nameSpace":"XM","type":"UserAccount","id":"iraw","data":{"disableExport":false,"isActive":true,"isAgent":false,"locale":"Default","grantedPrivileges":[],"userAccountRoles":[],"grantedUserAccountRoles":[{"userAccountRole":"ADMIN","uuid":"c3c42ebb-11dc-41ac-dde7-f53653418a59"}],"grantedExtensions":[],"username":"iraw","password":"admin","properName":"Ira Watcher"},"binaryField":null,"requery":false,"encoding":"rjson"},
/*
 * Opportunities.  The last 6 have opportunityStage: "INFORMATION" which the ETL defines as open.  And actualClose is null.
 * All the others are "QUOTE" which the ETL defines as won.
 */                  
  {"nameSpace":"XM","type":"Opportunity",
    "id":"50001",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"TPARTS",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"QUOTE",       // open: INFORMATION, won: QUOTE
    "assignedTo":"samm",              // samm, johns
    "number":"50001",
    "name":"Jan Opportunity",
    "amount":22000,
    "probability":80,
    "startDate":"2013-01-01T00:00:00.000Z",
    "assignDate":"2013-02-01T00:00:00.000Z",
    "targetClose":"2013-03-01T00:00:00.000Z",
    "actualClose":"2013-04-01T00:00:00.000Z"},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
   {"nameSpace":"XM","type":"Opportunity",
    "id":"50002",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"TTOYS",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"QUOTE",       // open: INFORMATION, won: QUOTE
    "assignedTo":"johns",              // samm, johns
    "number":"50002",
    "name":"Feb Opportunity",
    "amount":15000,
    "probability":80,
    "startDate":"2013-02-01T00:00:00.000Z",
    "assignDate":"2013-03-01T00:00:00.000Z",
    "targetClose":"2013-04-01T00:00:00.000Z",
    "actualClose":"2013-05-01T00:00:00.000Z"},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
  {"nameSpace":"XM","type":"Opportunity",
    "id":"50003",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"XTRM",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"QUOTE",       // open: INFORMATION, won: QUOTE
    "assignedTo":"samm",              // samm, johns
    "number":"50003",
    "name":"Mar Opportunity",
    "amount":10000,
    "probability":80,
    "startDate":"2013-03-01T00:00:00.000Z",
    "assignDate":"2013-04-01T00:00:00.000Z",
    "targetClose":"2013-05-01T00:00:00.000Z",
    "actualClose":"2013-06-01T00:00:00.000Z"},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
  {"nameSpace":"XM","type":"Opportunity",
    "id":"50004",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"XTRM",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"QUOTE",       // open: INFORMATION, won: QUOTE
    "assignedTo":"johns",              // samm, johns
    "number":"50004",
    "name":"Apr Opportunity",
    "amount":20000,
    "probability":80,
    "startDate":"2013-04-01T00:00:00.000Z",
    "assignDate":"2013-05-01T00:00:00.000Z",
    "targetClose":"2013-06-01T00:00:00.000Z",
    "actualClose":"2013-07-01T00:00:00.000Z"},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
  {"nameSpace":"XM","type":"Opportunity",
    "id":"50005",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"XTRM",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"QUOTE",       // open: INFORMATION, won: QUOTE
    "assignedTo":"johns",              // samm, johns
    "number":"50005",
    "name":"May Opportunity",
    "amount":25000,
    "probability":80,
    "startDate":"2013-05-01T00:00:00.000Z",
    "assignDate":"2013-06-01T00:00:00.000Z",
    "targetClose":"2013-07-01T00:00:00.000Z",
    "actualClose":"2013-08-01T00:00:00.000Z"},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
  {"nameSpace":"XM","type":"Opportunity",
    "id":"50006",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"XTRM",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"QUOTE",       // open: INFORMATION, won: QUOTE
    "assignedTo":"samm",              // samm, johns
    "number":"50006",
    "name":"Jun Opportunity",
    "amount":22000,
    "probability":80,
    "startDate":"2013-06-01T00:00:00.000Z",
    "assignDate":"2013-07-01T00:00:00.000Z",
    "targetClose":"2013-08-01T00:00:00.000Z",
    "actualClose":"2013-09-01T00:00:00.000Z"},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
  
    {"nameSpace":"XM","type":"Opportunity",
    "id":"50007",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"TPARTS",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"QUOTE",       // open: INFORMATION, won: QUOTE
    "assignedTo":"samm",              // samm, johns
    "number":"50007",
    "name":"Jul Opportunity",
    "amount":22000,
    "probability":80,
    "startDate":"2013-07-01T00:00:00.000Z",
    "assignDate":"2013-08-01T00:00:00.000Z",
    "targetClose":"2013-09-01T00:00:00.000Z",
    "actualClose":"2013-10-01T00:00:00.000Z"},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
   {"nameSpace":"XM","type":"Opportunity",
    "id":"50008",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"TTOYS",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"QUOTE",       // open: INFORMATION, won: QUOTE
    "assignedTo":"johns",              // samm, johns
    "number":"50008",
    "name":"Aug Opportunity",
    "amount":15000,
    "probability":80,
    "startDate":"2013-08-01T00:00:00.000Z",
    "assignDate":"2013-09-01T00:00:00.000Z",
    "targetClose":"2013-09-01T00:00:00.000Z",
    "actualClose":"2013-09-01T00:00:00.000Z"},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
  {"nameSpace":"XM","type":"Opportunity",
    "id":"50009",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"XTRM",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"QUOTE",       // open: INFORMATION, won: QUOTE
    "assignedTo":"samm",              // samm, johns
    "number":"50009",
    "name":"Sep Opportunity",
    "amount":10000,
    "probability":80,
    "startDate":"2013-09-01T00:00:00.000Z",
    "assignDate":"2013-10-01T00:00:00.000Z",
    "targetClose":"2013-10-01T00:00:00.000Z",
    "actualClose":"2013-11-01T00:00:00.000Z"},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
  {"nameSpace":"XM","type":"Opportunity",
    "id":"50010",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"XTRM",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"QUOTE",       // open: INFORMATION, won: QUOTE
    "assignedTo":"johns",              // samm, johns
    "number":"50010",
    "name":"Oct Opportunity",
    "amount":20000,
    "probability":80,
    "startDate":"2013-10-01T00:00:00.000Z",
    "assignDate":"2013-10-01T00:00:00.000Z",
    "targetClose":"2013-11-01T00:00:00.000Z",
    "actualClose":"2013-11-01T00:00:00.000Z"},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
  {"nameSpace":"XM","type":"Opportunity",
    "id":"50011",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"XTRM",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"QUOTE",       // open: INFORMATION, won: QUOTE
    "assignedTo":"johns",              // samm, johns
    "number":"50011",
    "name":"Nov Opportunity",
    "amount":25000,
    "probability":80,
    "startDate":"2013-11-01T00:00:00.000Z",
    "assignDate":"2013-11-01T00:00:00.000Z",
    "targetClose":"2013-11-01T00:00:00.000Z",
    "actualClose":"2013-12-01T00:00:00.000Z"},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
  {"nameSpace":"XM","type":"Opportunity",
    "id":"50012",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"XTRM",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"QUOTE",       // open: INFORMATION, won: QUOTE
    "assignedTo":"samm",              // samm, johns
    "number":"50012",
    "name":"Dec Opportunity",
    "amount":22000,
    "probability":80,
    "startDate":"2013-12-01T00:00:00.000Z",
    "assignDate":"2013-12-01T00:00:00.000Z",
    "targetClose":"2013-12-01T00:00:00.000Z",
    "actualClose":"2013-12-01T00:00:00.000Z"},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
  {"nameSpace":"XM","type":"Opportunity",
    "id":"61010",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"TPARTS",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"QUOTE",       // open: INFORMATION, won: QUOTE
    "assignedTo":"samm",              // samm, johns
    "number":"61010",
    "name":"Jan Opportunity",
    "amount":22000,
    "probability":80,
    "startDate":"2014-01-01T00:00:00.000Z",
    "assignDate":"2014-02-01T00:00:00.000Z",
    "targetClose":"2014-03-01T00:00:00.000Z",
    "actualClose":"2014-04-01T00:00:00.000Z"},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
   {"nameSpace":"XM","type":"Opportunity",
    "id":"61020",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"TTOYS",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"QUOTE",       // open: INFORMATION, won: QUOTE
    "assignedTo":"johns",              // samm, johns
    "number":"61020",
    "name":"Feb Opportunity",
    "amount":15000,
    "probability":80,
    "startDate":"2014-02-01T00:00:00.000Z",
    "assignDate":"2014-03-01T00:00:00.000Z",
    "targetClose":"2014-04-01T00:00:00.000Z",
    "actualClose":"2014-05-01T00:00:00.000Z"},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
  {"nameSpace":"XM","type":"Opportunity",
    "id":"61030",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"XTRM",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"QUOTE",       // open: INFORMATION, won: QUOTE
    "assignedTo":"samm",              // samm, johns
    "number":"61030",
    "name":"Mar Opportunity",
    "amount":10000,
    "probability":80,
    "startDate":"2014-03-01T00:00:00.000Z",
    "assignDate":"2014-04-01T00:00:00.000Z",
    "targetClose":"2014-05-01T00:00:00.000Z",
    "actualClose":"2014-06-01T00:00:00.000Z"},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
  {"nameSpace":"XM","type":"Opportunity",
    "id":"61040",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"XTRM",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"QUOTE",       // open: INFORMATION, won: QUOTE
    "assignedTo":"johns",              // samm, johns
    "number":"61040",
    "name":"Apr Opportunity",
    "amount":20000,
    "probability":80,
    "startDate":"2014-04-01T00:00:00.000Z",
    "assignDate":"2014-05-01T00:00:00.000Z",
    "targetClose":"2014-06-01T00:00:00.000Z",
    "actualClose":"2014-07-01T00:00:00.000Z"},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
  {"nameSpace":"XM","type":"Opportunity",
    "id":"61050",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"XTRM",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"QUOTE",       // open: INFORMATION, won: QUOTE
    "assignedTo":"johns",              // samm, johns
    "number":"61050",
    "name":"May Opportunity",
    "amount":25000,
    "probability":80,
    "startDate":"2014-05-01T00:00:00.000Z",
    "assignDate":"2014-06-01T00:00:00.000Z",
    "targetClose":"2014-07-01T00:00:00.000Z",
    "actualClose":"2014-08-01T00:00:00.000Z"},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
  {"nameSpace":"XM","type":"Opportunity",
    "id":"61060",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"XTRM",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"QUOTE",       // open: INFORMATION, won: QUOTE
    "assignedTo":"samm",              // samm, johns
    "number":"61060",
    "name":"Jun Opportunity",
    "amount":22000,
    "probability":80,
    "startDate":"2014-06-01T00:00:00.000Z",
    "assignDate":"2014-07-01T00:00:00.000Z",
    "targetClose":"2014-08-01T00:00:00.000Z",
    "actualClose":"2014-09-01T00:00:00.000Z"},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
  
    {"nameSpace":"XM","type":"Opportunity",
    "id":"61101",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"TPARTS",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"INFORMATION",       // open: INFORMATION, won: QUOTE
    "assignedTo":"samm",              // samm, johns
    "number":"61101",
    "name":"Jul Opportunity",
    "amount":22000,
    "probability":80,
    "startDate":"2014-07-01T00:00:00.000Z",
    "assignDate":"2014-08-01T00:00:00.000Z",
    "targetClose":"2014-09-01T00:00:00.000Z",
    "actualClose":null},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
   {"nameSpace":"XM","type":"Opportunity",
    "id":"61102",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"TTOYS",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"INFORMATION",       // open: INFORMATION, won: QUOTE
    "assignedTo":"johns",              // samm, johns
    "number":"61102",
    "name":"Aug Opportunity",
    "amount":15000,
    "probability":80,
    "startDate":"2014-08-01T00:00:00.000Z",
    "assignDate":"2014-09-01T00:00:00.000Z",
    "targetClose":"2014-09-01T00:00:00.000Z",
    "actualClose":null},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
  {"nameSpace":"XM","type":"Opportunity",
    "id":"61103",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"XTRM",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"INFORMATION",       // open: INFORMATION, won: QUOTE
    "assignedTo":"samm",              // samm, johns
    "number":"61103",
    "name":"Sep Opportunity",
    "amount":10000,
    "probability":80,
    "startDate":"2014-09-01T00:00:00.000Z",
    "assignDate":"2014-10-01T00:00:00.000Z",
    "targetClose":"2014-10-01T00:00:00.000Z",
    "actualClose":null},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
  {"nameSpace":"XM","type":"Opportunity",
    "id":"61104",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"XTRM",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"INFORMATION",       // open: INFORMATION, won: QUOTE
    "assignedTo":"johns",              // samm, johns
    "number":"61104",
    "name":"Oct Opportunity",
    "amount":20000,
    "probability":80,
    "startDate":"2014-10-01T00:00:00.000Z",
    "assignDate":"2014-10-01T00:00:00.000Z",
    "targetClose":"2014-11-01T00:00:00.000Z",
    "actualClose":null},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
  {"nameSpace":"XM","type":"Opportunity",
    "id":"61105",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"XTRM",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"INFORMATION",       // open: INFORMATION, won: QUOTE
    "assignedTo":"johns",              // samm, johns
    "number":"61105",
    "name":"Nov Opportunity",
    "amount":25000,
    "probability":80,
    "startDate":"2014-11-01T00:00:00.000Z",
    "assignDate":"2014-11-01T00:00:00.000Z",
    "targetClose":"2014-11-01T00:00:00.000Z",
    "actualClose":null},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
  {"nameSpace":"XM","type":"Opportunity",
    "id":"61106",
    "data":{"owner":"admin","currency":"USD","contact":null,"opportunitySource":"INTERNAL","opportunityType":"DESIGN","comments":[],"characteristics":[],"contacts":[],"items":[],"files":[],"urls":[],"accounts":[],"opportunities":[],"incidents":[],"toDos":[],"projects":[],"customers":[],"priority":null,
    "isActive":true,
    "account":"XTRM",               // TPARTS  TTOYS, XTRM, XRETAIL, XPPI
    "opportunityStage":"INFORMATION",       // open: INFORMATION, won: QUOTE
    "assignedTo":"samm",              // samm, johns
    "number":"61106",
    "name":"Dec Opportunity",
    "amount":22000,
    "probability":80,
    "startDate":"2014-12-01T00:00:00.000Z",
    "assignDate":"2014-12-01T00:00:00.000Z",
    "targetClose":"2014-12-01T00:00:00.000Z",
    "actualClose":null},
    "binaryField":null,"requery":false,"encoding":"rjson"
  },
/*
 * Quotes.  Repeat three quotes with different assigned reps and products.  The status "C" is converted.  The last 6
 * have status "O" open.
 */

];
