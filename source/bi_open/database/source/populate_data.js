module.exports = [
                  
/*
 * Opportunities and Quotes sort of follow the sales order data populated by 
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
 * Quotes. The status "C" is converted.  The last 6 have status "O" open.
 */
  {"nameSpace":"XM","type":"Quote","id":"70001","data":{"status":"C","saleType":"CUST","calculateFreight":true,"margin":14261.4,"subtotal":18500,"taxTotal":925,"freight":0,"miscCharge":0,"total":19425,"site":"WH1","currency":"USD","quoteDate":"2014-01-01T00:00:00.000Z","customer":"TTOYS","terms":"2-10N30","salesRep":"1000","taxZone":"VA TAX","billtoContact":"1","shipto":"a6e5343d-ef52-4a45-b966-64bb4804f9cf","shiptoContact":"8","shipZone":"DOMESTIC1","lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T19:55:22.659Z","item":"YTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"3144af47-d6ef-4ccc-f3bf-858a41245725","value":"PL127"},{"characteristic":"I-FINISH","uuid":"99663e49-de16-47ca-84b8-6afad1fda8fb","value":"Gloss"}],"uuid":"11ba2f1b-ed74-4161-8f52-30eecade880e","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":2.1193,"priceUnitRatio":1,"extendedPrice":18500,"tax":925,"price":9.25,"discount":0,"listPriceDiscount":0.158326,"markup":3.364649,"listPrice":10.99,"quantity":2000,"basePrice":9.25,"customerPrice":9.25,"margin":null}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"70001","billtoName":"Tremendous Toys Incorporated","commission":0.075,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Mike","billtoContactMiddleName":"","billtoContactLastName":"Farley","billtoContactSuffix":"","billtoContactPhone":"703-931-4269","billtoContactFax":"703-931-2212","billtoAddress1":"Tremendous Toys Inc.","billtoAddress2":"101 Toys Place","billtoAddress3":"","billtoCity":"Walnut Hills","billtoState":"VA","billtoPostalCode":"22209","billtoCountry":"United States","freightWeight":7500,"shiptoName":"Olde Towne Store 1","shipNotes":"Packing List Note:  No special handling or delivery instructions for \ndeliveries to STORE1.\n","shiptoContactFirstName":"Jake","shiptoContactMiddleName":"","shiptoContactLastName":"Sweet","shiptoContactSuffix":"","shiptoContactPhone":"800-321-5433","shiptoContactFax":"703-931-2212","shiptoAddress1":"Olde Towne Toys Store 1","shiptoAddress2":"1 Duke Street","shiptoAddress3":"","shiptoCity":"Alexandria","shiptoState":"VA","shiptoPostalCode":"22201","shiptoCountry":"United States","scheduleDate":"2014-12-03T19:55:22.659Z"},"binaryField":null,"requery":false,"encoding":"rjson"},
  {"nameSpace":"XM","type":"Quote","id":"70002","data":{"status":"C","saleType":"CUST","calculateFreight":true,"margin":21980,"subtotal":21980,"taxTotal":0,"freight":0,"miscCharge":0,"total":21980,"site":"WH1","currency":"USD","quoteDate":"2014-02-01T00:00:00.000Z","customer":"XRETAIL","terms":"COD","salesRep":"JSMITH","taxZone":null,"billtoContact":"32","shipto":null,"shiptoContact":null,"shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T19:56:11.645Z","item":"RTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"803df04d-d055-4899-961f-3a33eb8e5032","value":"PL126"}],"uuid":"7ca3ddfe-16f5-4890-c732-395f355a37e8","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":0,"priceUnitRatio":1,"extendedPrice":21980,"tax":0,"quantity":2000,"basePrice":10.99,"customerPrice":10.99,"price":10.99,"margin":21980,"discount":0,"listPriceDiscount":0,"listPrice":10.99}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"70002","billtoName":"Master Prodiem Toys Retail Customer","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Frank","billtoContactMiddleName":"L","billtoContactLastName":"Zane","billtoContactSuffix":"","billtoContactPhone":"","billtoContactFax":"","billtoAddress1":"Prodiem Toys Inc.","billtoAddress2":"1 Playland Way","billtoAddress3":"","billtoCity":"Norfolk","billtoState":"AA","billtoPostalCode":"23180","billtoCountry":"United States","freightWeight":7500,"scheduleDate":"2014-12-03T19:56:11.645Z"},"binaryField":null,"requery":false,"encoding":"rjson"},
  {"nameSpace":"XM","type":"Quote","id":"70003","data":{"status":"C","saleType":"CUST","calculateFreight":true,"margin":16041.25,"subtotal":16041.25,"taxTotal":0,"freight":0,"miscCharge":0,"total":16041.25,"site":"WH1","currency":"GBP","quoteDate":"2014-03-03T00:00:00.000Z","customer":"XTRM","terms":"2-10N30","salesRep":"1000","taxZone":null,"billtoContact":"3","shipto":"b28d5354-6ad4-4a0d-9926-dd05105fc703","shiptoContact":"4","shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T19:57:05.276Z","item":"BTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"244dc58c-cfc8-47e1-aa42-bf74d38c17ab","value":"PL126"}],"uuid":"1cfef108-1f73-497a-c0e3-25d29b25cc41","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":0,"priceUnitRatio":1,"extendedPrice":16041.25,"tax":0,"quantity":2500,"basePrice":6.4165,"customerPrice":6.4165,"price":6.4165,"margin":16041.25,"discount":0,"listPriceDiscount":0.060003,"listPrice":10.99}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"70003","billtoName":"Xtreme Toys LTD","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Fred","billtoContactMiddleName":"","billtoContactLastName":"Franklin","billtoContactSuffix":"","billtoContactPhone":"44-336-712-9857","billtoContactFax":"44-336-712-9857","billtoAddress1":"Xtreme Toys, Accounts Receivable","billtoAddress2":"1 Extra Way","billtoAddress3":"Suite 100","billtoCity":"Reading","billtoState":"Berkshire","billtoPostalCode":"RG6 1RA","billtoCountry":"United Kingdom","freightWeight":9375,"shiptoName":"XTRM Toys Distribution Center 1","shipNotes":"","shiptoContactFirstName":"Joe","shiptoContactMiddleName":"","shiptoContactLastName":"Stealt","shiptoContactSuffix":"","shiptoContactPhone":"55-44-336-712-9855","shiptoContactFax":"336-712-9856","shiptoAddress1":"1 Extra Way","shiptoAddress2":"Building 10","shiptoAddress3":"","shiptoCity":"Reading","shiptoState":"Berkshire","shiptoPostalCode":"RG6 1RA","shiptoCountry":"United Kingdom","scheduleDate":"2014-12-03T19:57:05.276Z"},"binaryField":null,"requery":false,"encoding":"rjson"},
  {"nameSpace":"XM","type":"Quote","id":"70004","data":{"status":"C","saleType":"CUST","calculateFreight":true,"margin":19249.5,"subtotal":19249.5,"taxTotal":0,"freight":0,"miscCharge":0,"total":19249.5,"site":"WH1","currency":"GBP","quoteDate":"2014-04-04T00:00:00.000Z","customer":"XTRM","terms":"2-10N30","salesRep":"1000","taxZone":null,"billtoContact":"3","shipto":"b28d5354-6ad4-4a0d-9926-dd05105fc703","shiptoContact":"4","shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T19:57:52.591Z","item":"RTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"d9d5a2b9-c9b9-4912-d2f4-8fa6f3f0aa32","value":"PL126"}],"uuid":"1444ead9-c279-4cc8-8a85-c24f7c7eda1d","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":0,"tax":0,"priceUnitRatio":1,"extendedPrice":19249.5,"quantity":3000,"basePrice":6.4165,"customerPrice":6.4165,"price":6.4165,"margin":19249.5,"discount":0,"listPriceDiscount":0.060003,"listPrice":10.99}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"70004","billtoName":"Xtreme Toys LTD","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Fred","billtoContactMiddleName":"","billtoContactLastName":"Franklin","billtoContactSuffix":"","billtoContactPhone":"44-336-712-9857","billtoContactFax":"44-336-712-9857","billtoAddress1":"Xtreme Toys, Accounts Receivable","billtoAddress2":"1 Extra Way","billtoAddress3":"Suite 100","billtoCity":"Reading","billtoState":"Berkshire","billtoPostalCode":"RG6 1RA","billtoCountry":"United Kingdom","freightWeight":11250,"shiptoName":"XTRM Toys Distribution Center 1","shipNotes":"","shiptoContactFirstName":"Joe","shiptoContactMiddleName":"","shiptoContactLastName":"Stealt","shiptoContactSuffix":"","shiptoContactPhone":"55-44-336-712-9855","shiptoContactFax":"336-712-9856","shiptoAddress1":"1 Extra Way","shiptoAddress2":"Building 10","shiptoAddress3":"","shiptoCity":"Reading","shiptoState":"Berkshire","shiptoPostalCode":"RG6 1RA","shiptoCountry":"United Kingdom","scheduleDate":"2014-12-03T19:57:52.591Z"},"binaryField":null,"requery":false,"encoding":"rjson"},
  {"nameSpace":"XM","type":"Quote","id":"70005","data":{"status":"C","saleType":"CUST","calculateFreight":true,"margin":29673,"subtotal":29673,"taxTotal":1483.65,"freight":0,"miscCharge":0,"total":31156.65,"site":"WH1","currency":"USD","quoteDate":"2014-05-01T00:00:00.000Z","customer":"TTOYS","terms":"2-10N30","salesRep":"JSMITH","taxZone":"VA TAX","billtoContact":"1","shipto":"a6e5343d-ef52-4a45-b966-64bb4804f9cf","shiptoContact":"8","shipZone":"DOMESTIC1","lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T20:32:59.256Z","item":"BTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"40110c95-583a-47ab-d7df-91a8d940ba2c","value":"PL126"}],"uuid":"8f10302f-6bcb-45ff-fe1e-af62403e64f1","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":0,"priceUnitRatio":1,"extendedPrice":29673,"tax":1483.65,"quantity":3000,"basePrice":9.891,"customerPrice":9.891,"price":9.891,"margin":29673,"discount":0,"listPriceDiscount":0.1,"listPrice":10.99}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"70005","billtoName":"Tremendous Toys Incorporated","commission":0.075,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Mike","billtoContactMiddleName":"","billtoContactLastName":"Farley","billtoContactSuffix":"","billtoContactPhone":"703-931-4269","billtoContactFax":"703-931-2212","billtoAddress1":"Tremendous Toys Inc.","billtoAddress2":"101 Toys Place","billtoAddress3":"","billtoCity":"Walnut Hills","billtoState":"VA","billtoPostalCode":"22209","billtoCountry":"United States","freightWeight":11250,"shiptoName":"Olde Towne Store 1","shipNotes":"Packing List Note:  No special handling or delivery instructions for \ndeliveries to STORE1.\n","shiptoContactFirstName":"Jake","shiptoContactMiddleName":"","shiptoContactLastName":"Sweet","shiptoContactSuffix":"","shiptoContactPhone":"800-321-5433","shiptoContactFax":"703-931-2212","shiptoAddress1":"Olde Towne Toys Store 1","shiptoAddress2":"1 Duke Street","shiptoAddress3":"","shiptoCity":"Alexandria","shiptoState":"VA","shiptoPostalCode":"22201","shiptoCountry":"United States","scheduleDate":"2014-12-03T20:32:59.256Z"},"binaryField":null,"requery":false,"encoding":"rjson"},
  {"nameSpace":"XM","type":"Quote","id":"70006","data":{"status":"C","saleType":"CUST","calculateFreight":true,"margin":27475,"subtotal":27475,"taxTotal":0,"freight":0,"miscCharge":0,"total":27475,"site":"WH1","currency":"USD","quoteDate":"2014-06-01T00:00:00.000Z","customer":"XRETAIL","terms":"COD","salesRep":"1000","taxZone":null,"billtoContact":"32","shipto":null,"shiptoContact":null,"shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T20:33:34.465Z","item":"BTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"afcce31c-c99b-42fe-ca44-e061e952bc87","value":"PL126"}],"uuid":"9b56ac6c-3f72-409e-8156-d6d947d89f65","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":0,"priceUnitRatio":1,"extendedPrice":27475,"tax":0,"quantity":2500,"basePrice":10.99,"customerPrice":10.99,"price":10.99,"margin":27475,"discount":0,"listPriceDiscount":0,"listPrice":10.99}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"70006","billtoName":"Master Prodiem Toys Retail Customer","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Frank","billtoContactMiddleName":"L","billtoContactLastName":"Zane","billtoContactSuffix":"","billtoContactPhone":"","billtoContactFax":"","billtoAddress1":"Prodiem Toys Inc.","billtoAddress2":"1 Playland Way","billtoAddress3":"","billtoCity":"Norfolk","billtoState":"AA","billtoPostalCode":"23180","billtoCountry":"United States","freightWeight":9375,"scheduleDate":"2014-12-03T20:33:34.465Z"},"binaryField":null,"requery":false,"encoding":"rjson"},
  {"nameSpace":"XM","type":"Quote","id":"70007","data":{"status":"O","saleType":"CUST","calculateFreight":true,"margin":8870.7,"subtotal":10990,"taxTotal":0,"freight":0,"miscCharge":0,"total":10990,"site":"WH1","currency":"USD","quoteDate":"2014-07-01T00:00:00.000Z","customer":"XRETAIL","terms":"COD","salesRep":"1000","taxZone":null,"billtoContact":"32","shipto":null,"shiptoContact":null,"shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T20:34:14.362Z","item":"YTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"cc92c9b0-9103-4ad6-8af0-099d9ed23db3","value":"PL127"},{"characteristic":"I-FINISH","uuid":"4225805f-3a49-4af1-f283-c0147b209175","value":"Gloss"}],"uuid":"fe8e0319-377a-43b5-af83-5273fac20986","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":2.1193,"priceUnitRatio":1,"extendedPrice":10990,"tax":0,"price":10.99,"discount":0,"listPriceDiscount":0,"markup":4.185675,"listPrice":10.99,"quantity":1000,"basePrice":10.99,"customerPrice":10.99,"margin":null}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"70007","billtoName":"Master Prodiem Toys Retail Customer","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Frank","billtoContactMiddleName":"L","billtoContactLastName":"Zane","billtoContactSuffix":"","billtoContactPhone":"","billtoContactFax":"","billtoAddress1":"Prodiem Toys Inc.","billtoAddress2":"1 Playland Way","billtoAddress3":"","billtoCity":"Norfolk","billtoState":"AA","billtoPostalCode":"23180","billtoCountry":"United States","freightWeight":3750,"scheduleDate":"2014-12-03T20:34:14.362Z"},"binaryField":null,"requery":false,"encoding":"rjson"},
  {"nameSpace":"XM","type":"Quote","id":"70008","data":{"status":"O","saleType":"CUST","calculateFreight":true,"margin":29673,"subtotal":29673,"taxTotal":1483.65,"freight":0,"miscCharge":0,"total":31156.65,"site":"WH1","currency":"USD","quoteDate":"2014-08-01T00:00:00.000Z","customer":"TTOYS","terms":"2-10N30","salesRep":"JSMITH","taxZone":"VA TAX","billtoContact":"1","shipto":"a6e5343d-ef52-4a45-b966-64bb4804f9cf","shiptoContact":"8","shipZone":"DOMESTIC1","lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T20:35:00.820Z","item":"RTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"52b55950-5db2-4597-fe5e-8fff151a1e43","value":"PL126"}],"uuid":"9e7d72b8-2983-46e7-fa85-425a1ab6171c","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":0,"priceUnitRatio":1,"extendedPrice":29673,"tax":1483.65,"quantity":3000,"basePrice":9.891,"customerPrice":9.891,"price":9.891,"margin":29673,"discount":0,"listPriceDiscount":0.1,"listPrice":10.99}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"70008","billtoName":"Tremendous Toys Incorporated","commission":0.075,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Mike","billtoContactMiddleName":"","billtoContactLastName":"Farley","billtoContactSuffix":"","billtoContactPhone":"703-931-4269","billtoContactFax":"703-931-2212","billtoAddress1":"Tremendous Toys Inc.","billtoAddress2":"101 Toys Place","billtoAddress3":"","billtoCity":"Walnut Hills","billtoState":"VA","billtoPostalCode":"22209","billtoCountry":"United States","freightWeight":11250,"shiptoName":"Olde Towne Store 1","shipNotes":"Packing List Note:  No special handling or delivery instructions for \ndeliveries to STORE1.\n","shiptoContactFirstName":"Jake","shiptoContactMiddleName":"","shiptoContactLastName":"Sweet","shiptoContactSuffix":"","shiptoContactPhone":"800-321-5433","shiptoContactFax":"703-931-2212","shiptoAddress1":"Olde Towne Toys Store 1","shiptoAddress2":"1 Duke Street","shiptoAddress3":"","shiptoCity":"Alexandria","shiptoState":"VA","shiptoPostalCode":"22201","shiptoCountry":"United States","scheduleDate":"2014-12-03T20:35:00.820Z"},"binaryField":null,"requery":false,"encoding":"rjson"},
  {"nameSpace":"XM","type":"Quote","id":"70009","data":{"status":"O","saleType":"CUST","calculateFreight":true,"margin":16041.25,"subtotal":16041.25,"taxTotal":0,"freight":0,"miscCharge":0,"total":16041.25,"site":"WH1","currency":"GBP","quoteDate":"2014-12-03T20:35:34.737Z","customer":"XTRM","terms":"2-10N30","salesRep":"1000","taxZone":null,"billtoContact":"3","shipto":"b28d5354-6ad4-4a0d-9926-dd05105fc703","shiptoContact":"4","shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T20:35:46.373Z","item":"BTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"3af13ab8-687f-437f-fa56-1fd5ffba24ea","value":"PL126"}],"uuid":"af3ac183-0b8c-4fee-bcb5-9b02e2beed12","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":0,"tax":0,"priceUnitRatio":1,"extendedPrice":16041.25,"quantity":2500,"basePrice":6.4165,"customerPrice":6.4165,"price":6.4165,"margin":16041.25,"discount":0,"listPriceDiscount":0.060003,"listPrice":10.99}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"70009","billtoName":"Xtreme Toys LTD","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Fred","billtoContactMiddleName":"","billtoContactLastName":"Franklin","billtoContactSuffix":"","billtoContactPhone":"44-336-712-9857","billtoContactFax":"44-336-712-9857","billtoAddress1":"Xtreme Toys, Accounts Receivable","billtoAddress2":"1 Extra Way","billtoAddress3":"Suite 100","billtoCity":"Reading","billtoState":"Berkshire","billtoPostalCode":"RG6 1RA","billtoCountry":"United Kingdom","freightWeight":9375,"shiptoName":"XTRM Toys Distribution Center 1","shipNotes":"","shiptoContactFirstName":"Joe","shiptoContactMiddleName":"","shiptoContactLastName":"Stealt","shiptoContactSuffix":"","shiptoContactPhone":"55-44-336-712-9855","shiptoContactFax":"336-712-9856","shiptoAddress1":"1 Extra Way","shiptoAddress2":"Building 10","shiptoAddress3":"","shiptoCity":"Reading","shiptoState":"Berkshire","shiptoPostalCode":"RG6 1RA","shiptoCountry":"United Kingdom","scheduleDate":"2014-12-03T20:35:46.373Z"},"binaryField":null,"requery":false,"encoding":"rjson"},
  {"nameSpace":"XM","type":"Quote","id":"70010","data":{"status":"O","saleType":"CUST","calculateFreight":true,"margin":20532.8,"subtotal":20532.8,"taxTotal":0,"freight":0,"miscCharge":0,"total":20532.8,"site":"WH1","currency":"GBP","quoteDate":"2014-10-01T00:00:00.000Z","customer":"XTRM","terms":"2-10N30","salesRep":"1000","taxZone":null,"billtoContact":"3","shipto":"b28d5354-6ad4-4a0d-9926-dd05105fc703","shiptoContact":"4","shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T20:36:12.518Z","item":"RTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"db55c689-98fb-4211-c720-4f604a0e489b","value":"PL126"}],"uuid":"b4cf03cb-679d-4939-e643-38f4f7a72aa7","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":0,"tax":0,"priceUnitRatio":1,"extendedPrice":20532.8,"quantity":3200,"basePrice":6.4165,"customerPrice":6.4165,"price":6.4165,"margin":20532.8,"discount":0,"listPriceDiscount":0.060003,"listPrice":10.99}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"70010","billtoName":"Xtreme Toys LTD","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Fred","billtoContactMiddleName":"","billtoContactLastName":"Franklin","billtoContactSuffix":"","billtoContactPhone":"44-336-712-9857","billtoContactFax":"44-336-712-9857","billtoAddress1":"Xtreme Toys, Accounts Receivable","billtoAddress2":"1 Extra Way","billtoAddress3":"Suite 100","billtoCity":"Reading","billtoState":"Berkshire","billtoPostalCode":"RG6 1RA","billtoCountry":"United Kingdom","freightWeight":12000,"shiptoName":"XTRM Toys Distribution Center 1","shipNotes":"","shiptoContactFirstName":"Joe","shiptoContactMiddleName":"","shiptoContactLastName":"Stealt","shiptoContactSuffix":"","shiptoContactPhone":"55-44-336-712-9855","shiptoContactFax":"336-712-9856","shiptoAddress1":"1 Extra Way","shiptoAddress2":"Building 10","shiptoAddress3":"","shiptoCity":"Reading","shiptoState":"Berkshire","shiptoPostalCode":"RG6 1RA","shiptoCountry":"United Kingdom","scheduleDate":"2014-12-03T00:00:00.000Z"},"binaryField":null,"requery":false,"encoding":"rjson"},
  {"nameSpace":"XM","type":"Quote","id":"70011","data":{"status":"O","saleType":"CUST","calculateFreight":true,"margin":12833,"subtotal":12833,"taxTotal":0,"freight":0,"miscCharge":0,"total":12833,"site":"WH1","currency":"GBP","quoteDate":"2014-11-01T00:00:00.000Z","customer":"XTRM","terms":"2-10N30","salesRep":"JSMITH","taxZone":null,"billtoContact":"3","shipto":"b28d5354-6ad4-4a0d-9926-dd05105fc703","shiptoContact":"4","shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T20:37:10.324Z","item":"RTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"3fa4d427-beb6-41b2-8d3d-26eb56e131e0","value":"PL126"}],"uuid":"c0df2c44-ab3c-4453-9821-0db38dfbb435","lineNumber":1,"unitCost":0,"extendedPrice":12833,"tax":0,"price":6.4165,"discount":0,"listPriceDiscount":0.060003,"listPrice":10.99,"quantity":2000,"basePrice":6.4165,"customerPrice":6.4165,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","priceUnitRatio":1,"margin":12833}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"70011","billtoName":"Xtreme Toys LTD","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Fred","billtoContactMiddleName":"","billtoContactLastName":"Franklin","billtoContactSuffix":"","billtoContactPhone":"44-336-712-9857","billtoContactFax":"44-336-712-9857","billtoAddress1":"Xtreme Toys, Accounts Receivable","billtoAddress2":"1 Extra Way","billtoAddress3":"Suite 100","billtoCity":"Reading","billtoState":"Berkshire","billtoPostalCode":"RG6 1RA","billtoCountry":"United Kingdom","freightWeight":7500,"shiptoName":"XTRM Toys Distribution Center 1","shipNotes":"","shiptoContactFirstName":"Joe","shiptoContactMiddleName":"","shiptoContactLastName":"Stealt","shiptoContactSuffix":"","shiptoContactPhone":"55-44-336-712-9855","shiptoContactFax":"336-712-9856","shiptoAddress1":"1 Extra Way","shiptoAddress2":"Building 10","shiptoAddress3":"","shiptoCity":"Reading","shiptoState":"Berkshire","shiptoPostalCode":"RG6 1RA","shiptoCountry":"United Kingdom","scheduleDate":"2014-12-03T20:37:10.324Z"},"binaryField":null,"requery":false,"encoding":"rjson"},
  {"nameSpace":"XM","type":"Quote","id":"70012","data":{"status":"O","saleType":"CUST","calculateFreight":true,"margin":14116.3,"subtotal":14116.3,"taxTotal":0,"freight":0,"miscCharge":0,"total":14116.3,"site":"WH1","currency":"GBP","quoteDate":"2014-12-03T00:00:00.000Z","customer":"XTRM","terms":"2-10N30","salesRep":"JSMITH","taxZone":null,"billtoContact":"3","shipto":"b28d5354-6ad4-4a0d-9926-dd05105fc703","shiptoContact":"4","shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T20:38:29.363Z","item":"BTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"0b3bb7ec-3637-4813-f5f2-2c15832c4f81","value":"PL126"}],"uuid":"00b105c7-2b48-41a0-b2bd-380eaf9d4f10","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":0,"priceUnitRatio":1,"extendedPrice":14116.3,"tax":0,"quantity":2200,"basePrice":6.4165,"customerPrice":6.4165,"price":6.4165,"margin":14116.3,"discount":0,"listPriceDiscount":0.060003,"listPrice":10.99}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"70012","billtoName":"Xtreme Toys LTD","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Fred","billtoContactMiddleName":"","billtoContactLastName":"Franklin","billtoContactSuffix":"","billtoContactPhone":"44-336-712-9857","billtoContactFax":"44-336-712-9857","billtoAddress1":"Xtreme Toys, Accounts Receivable","billtoAddress2":"1 Extra Way","billtoAddress3":"Suite 100","billtoCity":"Reading","billtoState":"Berkshire","billtoPostalCode":"RG6 1RA","billtoCountry":"United Kingdom","freightWeight":8250,"shiptoName":"XTRM Toys Distribution Center 1","shipNotes":"","shiptoContactFirstName":"Joe","shiptoContactMiddleName":"","shiptoContactLastName":"Stealt","shiptoContactSuffix":"","shiptoContactPhone":"55-44-336-712-9855","shiptoContactFax":"336-712-9856","shiptoAddress1":"1 Extra Way","shiptoAddress2":"Building 10","shiptoAddress3":"","shiptoCity":"Reading","shiptoState":"Berkshire","shiptoPostalCode":"RG6 1RA","shiptoCountry":"United Kingdom","scheduleDate":"2014-12-03T20:38:29.363Z"},"binaryField":null,"requery":false,"encoding":"rjson"},

];
