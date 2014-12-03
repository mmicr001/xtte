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
  //{"nameSpace":"XM","type":"UserAccount","id":"samm","data":{"disableExport":false,"isActive":true,"isAgent":false,"locale":"Default","grantedPrivileges":[],"userAccountRoles":[],"grantedUserAccountRoles":[{"userAccountRole":"ADMIN","uuid":"4d429cc9-dc24-43ba-8021-875654656e27"}],"grantedExtensions":[],"username":"samm","password":"admin","properName":"Sam Masters"},"binaryField":null,"requery":false,"encoding":"rjson"},
  //{"nameSpace":"XM","type":"UserAccount","id":"johns","data":{"disableExport":false,"isActive":true,"isAgent":false,"locale":"Default","grantedPrivileges":[],"userAccountRoles":[],"grantedUserAccountRoles":[{"userAccountRole":"ADMIN","uuid":"c9906fc8-1ee4-4198-f8e6-d19f53db23c7"}],"grantedExtensions":[],"username":"johns","password":"admin","properName":"John Smith"},"binaryField":null,"requery":false,"encoding":"rjson"},
  //{"nameSpace":"XM","type":"UserAccount","id":"iraw","data":{"disableExport":false,"isActive":true,"isAgent":false,"locale":"Default","grantedPrivileges":[],"userAccountRoles":[],"grantedUserAccountRoles":[{"userAccountRole":"ADMIN","uuid":"c3c42ebb-11dc-41ac-dde7-f53653418a59"}],"grantedExtensions":[],"username":"iraw","password":"admin","properName":"Ira Watcher"},"binaryField":null,"requery":false,"encoding":"rjson"},
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
  {"nameSpace":"XM","type":"Quote",
    "id":"50001",
    "data":{"status":"C",
      "saleType":"CUST","calculateFreight":true,"margin":19782,"subtotal":19782,"taxTotal":989.1,"freight":0,"miscCharge":0,"total":20771.1,"site":"WH1","currency":"USD",
      "quoteDate":"2013-01-01T00:00:00.000Z",
      "customer":"TTOYS",
      "terms":"2-10N30",
      "salesRep":"1000",
      "taxZone":"VA TAX","billtoContact":"1","shipto":"40a13fa2-6a29-4a3d-b023-add5ef929e4b","shiptoContact":"8","shipZone":"DOMESTIC1","lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:02:04.950Z","item":"BTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"41c69bd3-35b8-40a0-facc-f1b412737a5c","value":"PL126"}],"uuid":"08188b2c-8454-4788-d42b-db35636de5d0","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":0,"priceUnitRatio":1,"extendedPrice":19782,"tax":989.1,"quantity":2000,"basePrice":9.891,"customerPrice":9.891,"price":9.891,"margin":19782,"discount":0,"listPriceDiscount":0.1,"listPrice":10.99}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40014","billtoName":"Tremendous Toys Incorporated","commission":0.075,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Mike","billtoContactMiddleName":"","billtoContactLastName":"Farley","billtoContactSuffix":"","billtoContactPhone":"703-931-4269","billtoContactFax":"703-931-2212","billtoAddress1":"Tremendous Toys Inc.","billtoAddress2":"101 Toys Place","billtoAddress3":"","billtoCity":"Walnut Hills","billtoState":"VA","billtoPostalCode":"22209","billtoCountry":"United States","freightWeight":7500,"shiptoName":"Olde Towne Store 1","shipNotes":"Packing List Note:  No special handling or delivery instructions for \ndeliveries to STORE1.\n","shiptoContactFirstName":"Jake","shiptoContactMiddleName":"","shiptoContactLastName":"Sweet","shiptoContactSuffix":"","shiptoContactPhone":"800-321-5433","shiptoContactFax":"703-931-2212","shiptoAddress1":"Olde Towne Toys Store 1","shiptoAddress2":"1 Duke Street","shiptoAddress3":"","shiptoCity":"Alexandria","shiptoState":"VA","shiptoPostalCode":"22201","shiptoCountry":"United States","scheduleDate":"2014-12-03T14:02:04.950Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  },
  {"nameSpace":"XM","type":"Quote",
    "id":"50002",
    "data":{"status":"C",
      "saleType":"CUST","calculateFreight":true,"margin":17741.4,"subtotal":21980,"taxTotal":0,"freight":0,"miscCharge":0,"total":21980,"site":"WH1","currency":"USD",
      "quoteDate":"2013-02-01T00:00:00.000Z",
      "customer":"XRETAIL",
      "terms":"COD",
      "salesRep":"JSMITH",
      "taxZone":null,"billtoContact":"32","shipto":null,"shiptoContact":null,"shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:06:24.470Z","item":"YTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"17be0fed-f9d1-485f-c152-d821e8addc32","value":"PL127"},{"characteristic":"I-FINISH","uuid":"dc46a236-50e8-43de-a430-436a0cbf612f","value":"Gloss"}],"uuid":"3cbecc02-4aa3-4930-b9ee-bc95853d55b5","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":2.1193,"priceUnitRatio":1,"extendedPrice":21980,"tax":0,"price":10.99,"discount":0,"listPriceDiscount":0,"markup":4.185675,"listPrice":10.99,"quantity":2000,"basePrice":10.99,"customerPrice":10.99,"margin":null}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40015","billtoName":"Master Prodiem Toys Retail Customer","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Frank","billtoContactMiddleName":"L","billtoContactLastName":"Zane","billtoContactSuffix":"","billtoContactPhone":"","billtoContactFax":"","billtoAddress1":"Prodiem Toys Inc.","billtoAddress2":"1 Playland Way","billtoAddress3":"","billtoCity":"Norfolk","billtoState":"AA","billtoPostalCode":"23180","billtoCountry":"United States","freightWeight":7500,"scheduleDate":"2014-12-03T14:06:24.470Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  }, 
  {"nameSpace":"XM","type":"Quote",
    "id":"50003",
    "data":{"status":"C",
      "saleType":"CUST","calculateFreight":true,"margin":35031,"subtotal":35031,"taxTotal":0,"freight":0,"miscCharge":0,"total":35031,"site":"WH1","currency":"GBP",
      "quoteDate":"2013-03-01T00:00:00.000Z",
      "customer":"XTRM",
      "terms":"2-10N30",
      "salesRep":"1000",
      "taxZone":null,"billtoContact":"3","shipto":"004ba13c-019b-4839-a1f8-e9d1d9740a74","shiptoContact":"4","shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:10:56.855Z","item":"KCAR1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"4688f304-c5ff-464d-e70f-30bec2e4b369","value":""}],"uuid":"c557b1f5-6c8c-4489-f05a-745fdcc48f8a","lineNumber":1,"unitCost":0,"extendedPrice":35031,"tax":0,"price":17.5155,"discount":0,"listPriceDiscount":0.060001,"listPrice":30,"quantity":2000,"basePrice":17.5155,"customerPrice":17.5155,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","priceUnitRatio":1,"margin":35031}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40016","billtoName":"Xtreme Toys LTD","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Fred","billtoContactMiddleName":"","billtoContactLastName":"Franklin","billtoContactSuffix":"","billtoContactPhone":"44-336-712-9857","billtoContactFax":"44-336-712-9857","billtoAddress1":"Xtreme Toys, Accounts Receivable","billtoAddress2":"1 Extra Way","billtoAddress3":"Suite 100","billtoCity":"Reading","billtoState":"Berkshire","billtoPostalCode":"RG6 1RA","billtoCountry":"United Kingdom","freightWeight":7500,"shiptoName":"XTRM Toys Distribution Center 1","shipNotes":"","shiptoContactFirstName":"Joe","shiptoContactMiddleName":"","shiptoContactLastName":"Stealt","shiptoContactSuffix":"","shiptoContactPhone":"55-44-336-712-9855","shiptoContactFax":"336-712-9856","shiptoAddress1":"1 Extra Way","shiptoAddress2":"Building 10","shiptoAddress3":"","shiptoCity":"Reading","shiptoState":"Berkshire","shiptoPostalCode":"RG6 1RA","shiptoCountry":"United Kingdom","scheduleDate":"2014-12-03T14:10:56.855Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  },
  {"nameSpace":"XM","type":"Quote",
    "id":"50004",
    "data":{"status":"C",
      "saleType":"CUST","calculateFreight":true,"margin":19782,"subtotal":19782,"taxTotal":989.1,"freight":0,"miscCharge":0,"total":20771.1,"site":"WH1","currency":"USD",
      "quoteDate":"2013-04-01T00:00:00.000Z",
      "customer":"TTOYS",
      "terms":"2-10N30",
      "salesRep":"1000",
      "taxZone":"VA TAX","billtoContact":"1","shipto":"40a13fa2-6a29-4a3d-b023-add5ef929e4b","shiptoContact":"8","shipZone":"DOMESTIC1","lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:02:04.950Z","item":"BTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"41c69bd3-35b8-40a0-facc-f1b412737a5c","value":"PL126"}],"uuid":"08188b2c-8454-4788-d42b-db35636de5d0","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":0,"priceUnitRatio":1,"extendedPrice":19782,"tax":989.1,"quantity":2000,"basePrice":9.891,"customerPrice":9.891,"price":9.891,"margin":19782,"discount":0,"listPriceDiscount":0.1,"listPrice":10.99}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40014","billtoName":"Tremendous Toys Incorporated","commission":0.075,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Mike","billtoContactMiddleName":"","billtoContactLastName":"Farley","billtoContactSuffix":"","billtoContactPhone":"703-931-4269","billtoContactFax":"703-931-2212","billtoAddress1":"Tremendous Toys Inc.","billtoAddress2":"101 Toys Place","billtoAddress3":"","billtoCity":"Walnut Hills","billtoState":"VA","billtoPostalCode":"22209","billtoCountry":"United States","freightWeight":7500,"shiptoName":"Olde Towne Store 1","shipNotes":"Packing List Note:  No special handling or delivery instructions for \ndeliveries to STORE1.\n","shiptoContactFirstName":"Jake","shiptoContactMiddleName":"","shiptoContactLastName":"Sweet","shiptoContactSuffix":"","shiptoContactPhone":"800-321-5433","shiptoContactFax":"703-931-2212","shiptoAddress1":"Olde Towne Toys Store 1","shiptoAddress2":"1 Duke Street","shiptoAddress3":"","shiptoCity":"Alexandria","shiptoState":"VA","shiptoPostalCode":"22201","shiptoCountry":"United States","scheduleDate":"2014-12-03T14:02:04.950Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  },  
  {"nameSpace":"XM","type":"Quote",
    "id":"50005",
    "data":{"status":"C",
      "saleType":"CUST","calculateFreight":true,"margin":17741.4,"subtotal":21980,"taxTotal":0,"freight":0,"miscCharge":0,"total":21980,"site":"WH1","currency":"USD",
      "quoteDate":"2013-05-01T00:00:00.000Z",
      "customer":"XRETAIL",
      "terms":"COD",
      "salesRep":"JSMITH",
      "taxZone":null,"billtoContact":"32","shipto":null,"shiptoContact":null,"shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:06:24.470Z","item":"YTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"17be0fed-f9d1-485f-c152-d821e8addc32","value":"PL127"},{"characteristic":"I-FINISH","uuid":"dc46a236-50e8-43de-a430-436a0cbf612f","value":"Gloss"}],"uuid":"3cbecc02-4aa3-4930-b9ee-bc95853d55b5","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":2.1193,"priceUnitRatio":1,"extendedPrice":21980,"tax":0,"price":10.99,"discount":0,"listPriceDiscount":0,"markup":4.185675,"listPrice":10.99,"quantity":2000,"basePrice":10.99,"customerPrice":10.99,"margin":null}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40015","billtoName":"Master Prodiem Toys Retail Customer","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Frank","billtoContactMiddleName":"L","billtoContactLastName":"Zane","billtoContactSuffix":"","billtoContactPhone":"","billtoContactFax":"","billtoAddress1":"Prodiem Toys Inc.","billtoAddress2":"1 Playland Way","billtoAddress3":"","billtoCity":"Norfolk","billtoState":"AA","billtoPostalCode":"23180","billtoCountry":"United States","freightWeight":7500,"scheduleDate":"2014-12-03T14:06:24.470Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  }, 
  {"nameSpace":"XM","type":"Quote",
    "id":"50006",
    "data":{"status":"C",
      "saleType":"CUST","calculateFreight":true,"margin":35031,"subtotal":35031,"taxTotal":0,"freight":0,"miscCharge":0,"total":35031,"site":"WH1","currency":"GBP",
      "quoteDate":"2013-06-01T00:00:00.000Z",
      "customer":"XTRM",
      "terms":"2-10N30",
      "salesRep":"1000",
      "taxZone":null,"billtoContact":"3","shipto":"004ba13c-019b-4839-a1f8-e9d1d9740a74","shiptoContact":"4","shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:10:56.855Z","item":"KCAR1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"4688f304-c5ff-464d-e70f-30bec2e4b369","value":""}],"uuid":"c557b1f5-6c8c-4489-f05a-745fdcc48f8a","lineNumber":1,"unitCost":0,"extendedPrice":35031,"tax":0,"price":17.5155,"discount":0,"listPriceDiscount":0.060001,"listPrice":30,"quantity":2000,"basePrice":17.5155,"customerPrice":17.5155,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","priceUnitRatio":1,"margin":35031}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40016","billtoName":"Xtreme Toys LTD","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Fred","billtoContactMiddleName":"","billtoContactLastName":"Franklin","billtoContactSuffix":"","billtoContactPhone":"44-336-712-9857","billtoContactFax":"44-336-712-9857","billtoAddress1":"Xtreme Toys, Accounts Receivable","billtoAddress2":"1 Extra Way","billtoAddress3":"Suite 100","billtoCity":"Reading","billtoState":"Berkshire","billtoPostalCode":"RG6 1RA","billtoCountry":"United Kingdom","freightWeight":7500,"shiptoName":"XTRM Toys Distribution Center 1","shipNotes":"","shiptoContactFirstName":"Joe","shiptoContactMiddleName":"","shiptoContactLastName":"Stealt","shiptoContactSuffix":"","shiptoContactPhone":"55-44-336-712-9855","shiptoContactFax":"336-712-9856","shiptoAddress1":"1 Extra Way","shiptoAddress2":"Building 10","shiptoAddress3":"","shiptoCity":"Reading","shiptoState":"Berkshire","shiptoPostalCode":"RG6 1RA","shiptoCountry":"United Kingdom","scheduleDate":"2014-12-03T14:10:56.855Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  },  
  {"nameSpace":"XM","type":"Quote",
    "id":"50007",
    "data":{"status":"C",
      "saleType":"CUST","calculateFreight":true,"margin":19782,"subtotal":19782,"taxTotal":989.1,"freight":0,"miscCharge":0,"total":20771.1,"site":"WH1","currency":"USD",
      "quoteDate":"2013-07-01T00:00:00.000Z",
      "customer":"TTOYS",
      "terms":"2-10N30",
      "salesRep":"1000",
      "taxZone":"VA TAX","billtoContact":"1","shipto":"40a13fa2-6a29-4a3d-b023-add5ef929e4b","shiptoContact":"8","shipZone":"DOMESTIC1","lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:02:04.950Z","item":"BTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"41c69bd3-35b8-40a0-facc-f1b412737a5c","value":"PL126"}],"uuid":"08188b2c-8454-4788-d42b-db35636de5d0","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":0,"priceUnitRatio":1,"extendedPrice":19782,"tax":989.1,"quantity":2000,"basePrice":9.891,"customerPrice":9.891,"price":9.891,"margin":19782,"discount":0,"listPriceDiscount":0.1,"listPrice":10.99}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40014","billtoName":"Tremendous Toys Incorporated","commission":0.075,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Mike","billtoContactMiddleName":"","billtoContactLastName":"Farley","billtoContactSuffix":"","billtoContactPhone":"703-931-4269","billtoContactFax":"703-931-2212","billtoAddress1":"Tremendous Toys Inc.","billtoAddress2":"101 Toys Place","billtoAddress3":"","billtoCity":"Walnut Hills","billtoState":"VA","billtoPostalCode":"22209","billtoCountry":"United States","freightWeight":7500,"shiptoName":"Olde Towne Store 1","shipNotes":"Packing List Note:  No special handling or delivery instructions for \ndeliveries to STORE1.\n","shiptoContactFirstName":"Jake","shiptoContactMiddleName":"","shiptoContactLastName":"Sweet","shiptoContactSuffix":"","shiptoContactPhone":"800-321-5433","shiptoContactFax":"703-931-2212","shiptoAddress1":"Olde Towne Toys Store 1","shiptoAddress2":"1 Duke Street","shiptoAddress3":"","shiptoCity":"Alexandria","shiptoState":"VA","shiptoPostalCode":"22201","shiptoCountry":"United States","scheduleDate":"2014-12-03T14:02:04.950Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  },  
  {"nameSpace":"XM","type":"Quote",
    "id":"50008",
    "data":{"status":"C",
      "saleType":"CUST","calculateFreight":true,"margin":17741.4,"subtotal":21980,"taxTotal":0,"freight":0,"miscCharge":0,"total":21980,"site":"WH1","currency":"USD",
      "quoteDate":"2013-08-01T00:00:00.000Z",
      "customer":"XRETAIL",
      "terms":"COD",
      "salesRep":"JSMITH",
      "taxZone":null,"billtoContact":"32","shipto":null,"shiptoContact":null,"shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:06:24.470Z","item":"YTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"17be0fed-f9d1-485f-c152-d821e8addc32","value":"PL127"},{"characteristic":"I-FINISH","uuid":"dc46a236-50e8-43de-a430-436a0cbf612f","value":"Gloss"}],"uuid":"3cbecc02-4aa3-4930-b9ee-bc95853d55b5","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":2.1193,"priceUnitRatio":1,"extendedPrice":21980,"tax":0,"price":10.99,"discount":0,"listPriceDiscount":0,"markup":4.185675,"listPrice":10.99,"quantity":2000,"basePrice":10.99,"customerPrice":10.99,"margin":null}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40015","billtoName":"Master Prodiem Toys Retail Customer","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Frank","billtoContactMiddleName":"L","billtoContactLastName":"Zane","billtoContactSuffix":"","billtoContactPhone":"","billtoContactFax":"","billtoAddress1":"Prodiem Toys Inc.","billtoAddress2":"1 Playland Way","billtoAddress3":"","billtoCity":"Norfolk","billtoState":"AA","billtoPostalCode":"23180","billtoCountry":"United States","freightWeight":7500,"scheduleDate":"2014-12-03T14:06:24.470Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  },  
  {"nameSpace":"XM","type":"Quote",
    "id":"50009",
    "data":{"status":"C",
      "saleType":"CUST","calculateFreight":true,"margin":35031,"subtotal":35031,"taxTotal":0,"freight":0,"miscCharge":0,"total":35031,"site":"WH1","currency":"GBP",
      "quoteDate":"2013-09-01T00:00:00.000Z",
      "customer":"XTRM",
      "terms":"2-10N30",
      "salesRep":"1000",
      "taxZone":null,"billtoContact":"3","shipto":"004ba13c-019b-4839-a1f8-e9d1d9740a74","shiptoContact":"4","shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:10:56.855Z","item":"KCAR1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"4688f304-c5ff-464d-e70f-30bec2e4b369","value":""}],"uuid":"c557b1f5-6c8c-4489-f05a-745fdcc48f8a","lineNumber":1,"unitCost":0,"extendedPrice":35031,"tax":0,"price":17.5155,"discount":0,"listPriceDiscount":0.060001,"listPrice":30,"quantity":2000,"basePrice":17.5155,"customerPrice":17.5155,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","priceUnitRatio":1,"margin":35031}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40016","billtoName":"Xtreme Toys LTD","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Fred","billtoContactMiddleName":"","billtoContactLastName":"Franklin","billtoContactSuffix":"","billtoContactPhone":"44-336-712-9857","billtoContactFax":"44-336-712-9857","billtoAddress1":"Xtreme Toys, Accounts Receivable","billtoAddress2":"1 Extra Way","billtoAddress3":"Suite 100","billtoCity":"Reading","billtoState":"Berkshire","billtoPostalCode":"RG6 1RA","billtoCountry":"United Kingdom","freightWeight":7500,"shiptoName":"XTRM Toys Distribution Center 1","shipNotes":"","shiptoContactFirstName":"Joe","shiptoContactMiddleName":"","shiptoContactLastName":"Stealt","shiptoContactSuffix":"","shiptoContactPhone":"55-44-336-712-9855","shiptoContactFax":"336-712-9856","shiptoAddress1":"1 Extra Way","shiptoAddress2":"Building 10","shiptoAddress3":"","shiptoCity":"Reading","shiptoState":"Berkshire","shiptoPostalCode":"RG6 1RA","shiptoCountry":"United Kingdom","scheduleDate":"2014-12-03T14:10:56.855Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  },  
  {"nameSpace":"XM","type":"Quote",
    "id":"50010",
    "data":{"status":"C",
      "saleType":"CUST","calculateFreight":true,"margin":19782,"subtotal":19782,"taxTotal":989.1,"freight":0,"miscCharge":0,"total":20771.1,"site":"WH1","currency":"USD",
      "quoteDate":"2013-10-01T00:00:00.000Z",
      "customer":"TTOYS",
      "terms":"2-10N30",
      "salesRep":"1000",
      "taxZone":"VA TAX","billtoContact":"1","shipto":"40a13fa2-6a29-4a3d-b023-add5ef929e4b","shiptoContact":"8","shipZone":"DOMESTIC1","lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:02:04.950Z","item":"BTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"41c69bd3-35b8-40a0-facc-f1b412737a5c","value":"PL126"}],"uuid":"08188b2c-8454-4788-d42b-db35636de5d0","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":0,"priceUnitRatio":1,"extendedPrice":19782,"tax":989.1,"quantity":2000,"basePrice":9.891,"customerPrice":9.891,"price":9.891,"margin":19782,"discount":0,"listPriceDiscount":0.1,"listPrice":10.99}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40014","billtoName":"Tremendous Toys Incorporated","commission":0.075,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Mike","billtoContactMiddleName":"","billtoContactLastName":"Farley","billtoContactSuffix":"","billtoContactPhone":"703-931-4269","billtoContactFax":"703-931-2212","billtoAddress1":"Tremendous Toys Inc.","billtoAddress2":"101 Toys Place","billtoAddress3":"","billtoCity":"Walnut Hills","billtoState":"VA","billtoPostalCode":"22209","billtoCountry":"United States","freightWeight":7500,"shiptoName":"Olde Towne Store 1","shipNotes":"Packing List Note:  No special handling or delivery instructions for \ndeliveries to STORE1.\n","shiptoContactFirstName":"Jake","shiptoContactMiddleName":"","shiptoContactLastName":"Sweet","shiptoContactSuffix":"","shiptoContactPhone":"800-321-5433","shiptoContactFax":"703-931-2212","shiptoAddress1":"Olde Towne Toys Store 1","shiptoAddress2":"1 Duke Street","shiptoAddress3":"","shiptoCity":"Alexandria","shiptoState":"VA","shiptoPostalCode":"22201","shiptoCountry":"United States","scheduleDate":"2014-12-03T14:02:04.950Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  },  
  {"nameSpace":"XM","type":"Quote",
    "id":"50011",
    "data":{"status":"C",
      "saleType":"CUST","calculateFreight":true,"margin":17741.4,"subtotal":21980,"taxTotal":0,"freight":0,"miscCharge":0,"total":21980,"site":"WH1","currency":"USD",
      "quoteDate":"2013-11-01T00:00:00.000Z",
      "customer":"XRETAIL",
      "terms":"COD",
      "salesRep":"JSMITH",
      "taxZone":null,"billtoContact":"32","shipto":null,"shiptoContact":null,"shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:06:24.470Z","item":"YTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"17be0fed-f9d1-485f-c152-d821e8addc32","value":"PL127"},{"characteristic":"I-FINISH","uuid":"dc46a236-50e8-43de-a430-436a0cbf612f","value":"Gloss"}],"uuid":"3cbecc02-4aa3-4930-b9ee-bc95853d55b5","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":2.1193,"priceUnitRatio":1,"extendedPrice":21980,"tax":0,"price":10.99,"discount":0,"listPriceDiscount":0,"markup":4.185675,"listPrice":10.99,"quantity":2000,"basePrice":10.99,"customerPrice":10.99,"margin":null}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40015","billtoName":"Master Prodiem Toys Retail Customer","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Frank","billtoContactMiddleName":"L","billtoContactLastName":"Zane","billtoContactSuffix":"","billtoContactPhone":"","billtoContactFax":"","billtoAddress1":"Prodiem Toys Inc.","billtoAddress2":"1 Playland Way","billtoAddress3":"","billtoCity":"Norfolk","billtoState":"AA","billtoPostalCode":"23180","billtoCountry":"United States","freightWeight":7500,"scheduleDate":"2014-12-03T14:06:24.470Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  },  
  {"nameSpace":"XM","type":"Quote",
    "id":"50012",
    "data":{"status":"C",
      "saleType":"CUST","calculateFreight":true,"margin":35031,"subtotal":35031,"taxTotal":0,"freight":0,"miscCharge":0,"total":35031,"site":"WH1","currency":"GBP",
      "quoteDate":"2013-12-01T00:00:00.000Z",
      "customer":"XTRM",
      "terms":"2-10N30",
      "salesRep":"1000",
      "taxZone":null,"billtoContact":"3","shipto":"004ba13c-019b-4839-a1f8-e9d1d9740a74","shiptoContact":"4","shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:10:56.855Z","item":"KCAR1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"4688f304-c5ff-464d-e70f-30bec2e4b369","value":""}],"uuid":"c557b1f5-6c8c-4489-f05a-745fdcc48f8a","lineNumber":1,"unitCost":0,"extendedPrice":35031,"tax":0,"price":17.5155,"discount":0,"listPriceDiscount":0.060001,"listPrice":30,"quantity":2000,"basePrice":17.5155,"customerPrice":17.5155,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","priceUnitRatio":1,"margin":35031}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40016","billtoName":"Xtreme Toys LTD","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Fred","billtoContactMiddleName":"","billtoContactLastName":"Franklin","billtoContactSuffix":"","billtoContactPhone":"44-336-712-9857","billtoContactFax":"44-336-712-9857","billtoAddress1":"Xtreme Toys, Accounts Receivable","billtoAddress2":"1 Extra Way","billtoAddress3":"Suite 100","billtoCity":"Reading","billtoState":"Berkshire","billtoPostalCode":"RG6 1RA","billtoCountry":"United Kingdom","freightWeight":7500,"shiptoName":"XTRM Toys Distribution Center 1","shipNotes":"","shiptoContactFirstName":"Joe","shiptoContactMiddleName":"","shiptoContactLastName":"Stealt","shiptoContactSuffix":"","shiptoContactPhone":"55-44-336-712-9855","shiptoContactFax":"336-712-9856","shiptoAddress1":"1 Extra Way","shiptoAddress2":"Building 10","shiptoAddress3":"","shiptoCity":"Reading","shiptoState":"Berkshire","shiptoPostalCode":"RG6 1RA","shiptoCountry":"United Kingdom","scheduleDate":"2014-12-03T14:10:56.855Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  },  
  {"nameSpace":"XM","type":"Quote",
    "id":"60001",
    "data":{"status":"C",
      "saleType":"CUST","calculateFreight":true,"margin":19782,"subtotal":19782,"taxTotal":989.1,"freight":0,"miscCharge":0,"total":20771.1,"site":"WH1","currency":"USD",
      "quoteDate":"2014-01-01T00:00:00.000Z",
      "customer":"TTOYS",
      "terms":"2-10N30",
      "salesRep":"1000",
      "taxZone":"VA TAX","billtoContact":"1","shipto":"40a13fa2-6a29-4a3d-b023-add5ef929e4b","shiptoContact":"8","shipZone":"DOMESTIC1","lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:02:04.950Z","item":"BTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"41c69bd3-35b8-40a0-facc-f1b412737a5c","value":"PL126"}],"uuid":"08188b2c-8454-4788-d42b-db35636de5d0","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":0,"priceUnitRatio":1,"extendedPrice":19782,"tax":989.1,"quantity":2000,"basePrice":9.891,"customerPrice":9.891,"price":9.891,"margin":19782,"discount":0,"listPriceDiscount":0.1,"listPrice":10.99}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40014","billtoName":"Tremendous Toys Incorporated","commission":0.075,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Mike","billtoContactMiddleName":"","billtoContactLastName":"Farley","billtoContactSuffix":"","billtoContactPhone":"703-931-4269","billtoContactFax":"703-931-2212","billtoAddress1":"Tremendous Toys Inc.","billtoAddress2":"101 Toys Place","billtoAddress3":"","billtoCity":"Walnut Hills","billtoState":"VA","billtoPostalCode":"22209","billtoCountry":"United States","freightWeight":7500,"shiptoName":"Olde Towne Store 1","shipNotes":"Packing List Note:  No special handling or delivery instructions for \ndeliveries to STORE1.\n","shiptoContactFirstName":"Jake","shiptoContactMiddleName":"","shiptoContactLastName":"Sweet","shiptoContactSuffix":"","shiptoContactPhone":"800-321-5433","shiptoContactFax":"703-931-2212","shiptoAddress1":"Olde Towne Toys Store 1","shiptoAddress2":"1 Duke Street","shiptoAddress3":"","shiptoCity":"Alexandria","shiptoState":"VA","shiptoPostalCode":"22201","shiptoCountry":"United States","scheduleDate":"2014-12-03T14:02:04.950Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  },
  {"nameSpace":"XM","type":"Quote",
    "id":"60002",
    "data":{"status":"C",
      "saleType":"CUST","calculateFreight":true,"margin":17741.4,"subtotal":21980,"taxTotal":0,"freight":0,"miscCharge":0,"total":21980,"site":"WH1","currency":"USD",
      "quoteDate":"2014-02-01T00:00:00.000Z",
      "customer":"XRETAIL",
      "terms":"COD",
      "salesRep":"JSMITH",
      "taxZone":null,"billtoContact":"32","shipto":null,"shiptoContact":null,"shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:06:24.470Z","item":"YTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"17be0fed-f9d1-485f-c152-d821e8addc32","value":"PL127"},{"characteristic":"I-FINISH","uuid":"dc46a236-50e8-43de-a430-436a0cbf612f","value":"Gloss"}],"uuid":"3cbecc02-4aa3-4930-b9ee-bc95853d55b5","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":2.1193,"priceUnitRatio":1,"extendedPrice":21980,"tax":0,"price":10.99,"discount":0,"listPriceDiscount":0,"markup":4.185675,"listPrice":10.99,"quantity":2000,"basePrice":10.99,"customerPrice":10.99,"margin":null}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40015","billtoName":"Master Prodiem Toys Retail Customer","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Frank","billtoContactMiddleName":"L","billtoContactLastName":"Zane","billtoContactSuffix":"","billtoContactPhone":"","billtoContactFax":"","billtoAddress1":"Prodiem Toys Inc.","billtoAddress2":"1 Playland Way","billtoAddress3":"","billtoCity":"Norfolk","billtoState":"AA","billtoPostalCode":"23180","billtoCountry":"United States","freightWeight":7500,"scheduleDate":"2014-12-03T14:06:24.470Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  }, 
  {"nameSpace":"XM","type":"Quote",
    "id":"60003",
    "data":{"status":"C",
      "saleType":"CUST","calculateFreight":true,"margin":35031,"subtotal":35031,"taxTotal":0,"freight":0,"miscCharge":0,"total":35031,"site":"WH1","currency":"GBP",
      "quoteDate":"2014-03-01T00:00:00.000Z",
      "customer":"XTRM",
      "terms":"2-10N30",
      "salesRep":"1000",
      "taxZone":null,"billtoContact":"3","shipto":"004ba13c-019b-4839-a1f8-e9d1d9740a74","shiptoContact":"4","shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:10:56.855Z","item":"KCAR1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"4688f304-c5ff-464d-e70f-30bec2e4b369","value":""}],"uuid":"c557b1f5-6c8c-4489-f05a-745fdcc48f8a","lineNumber":1,"unitCost":0,"extendedPrice":35031,"tax":0,"price":17.5155,"discount":0,"listPriceDiscount":0.060001,"listPrice":30,"quantity":2000,"basePrice":17.5155,"customerPrice":17.5155,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","priceUnitRatio":1,"margin":35031}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40016","billtoName":"Xtreme Toys LTD","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Fred","billtoContactMiddleName":"","billtoContactLastName":"Franklin","billtoContactSuffix":"","billtoContactPhone":"44-336-712-9857","billtoContactFax":"44-336-712-9857","billtoAddress1":"Xtreme Toys, Accounts Receivable","billtoAddress2":"1 Extra Way","billtoAddress3":"Suite 100","billtoCity":"Reading","billtoState":"Berkshire","billtoPostalCode":"RG6 1RA","billtoCountry":"United Kingdom","freightWeight":7500,"shiptoName":"XTRM Toys Distribution Center 1","shipNotes":"","shiptoContactFirstName":"Joe","shiptoContactMiddleName":"","shiptoContactLastName":"Stealt","shiptoContactSuffix":"","shiptoContactPhone":"55-44-336-712-9855","shiptoContactFax":"336-712-9856","shiptoAddress1":"1 Extra Way","shiptoAddress2":"Building 10","shiptoAddress3":"","shiptoCity":"Reading","shiptoState":"Berkshire","shiptoPostalCode":"RG6 1RA","shiptoCountry":"United Kingdom","scheduleDate":"2014-12-03T14:10:56.855Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  },
  {"nameSpace":"XM","type":"Quote",
    "id":"60004",
    "data":{"status":"C",
      "saleType":"CUST","calculateFreight":true,"margin":19782,"subtotal":19782,"taxTotal":989.1,"freight":0,"miscCharge":0,"total":20771.1,"site":"WH1","currency":"USD",
      "quoteDate":"2014-04-01T00:00:00.000Z",
      "customer":"TTOYS",
      "terms":"2-10N30",
      "salesRep":"1000",
      "taxZone":"VA TAX","billtoContact":"1","shipto":"40a13fa2-6a29-4a3d-b023-add5ef929e4b","shiptoContact":"8","shipZone":"DOMESTIC1","lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:02:04.950Z","item":"BTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"41c69bd3-35b8-40a0-facc-f1b412737a5c","value":"PL126"}],"uuid":"08188b2c-8454-4788-d42b-db35636de5d0","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":0,"priceUnitRatio":1,"extendedPrice":19782,"tax":989.1,"quantity":2000,"basePrice":9.891,"customerPrice":9.891,"price":9.891,"margin":19782,"discount":0,"listPriceDiscount":0.1,"listPrice":10.99}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40014","billtoName":"Tremendous Toys Incorporated","commission":0.075,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Mike","billtoContactMiddleName":"","billtoContactLastName":"Farley","billtoContactSuffix":"","billtoContactPhone":"703-931-4269","billtoContactFax":"703-931-2212","billtoAddress1":"Tremendous Toys Inc.","billtoAddress2":"101 Toys Place","billtoAddress3":"","billtoCity":"Walnut Hills","billtoState":"VA","billtoPostalCode":"22209","billtoCountry":"United States","freightWeight":7500,"shiptoName":"Olde Towne Store 1","shipNotes":"Packing List Note:  No special handling or delivery instructions for \ndeliveries to STORE1.\n","shiptoContactFirstName":"Jake","shiptoContactMiddleName":"","shiptoContactLastName":"Sweet","shiptoContactSuffix":"","shiptoContactPhone":"800-321-5433","shiptoContactFax":"703-931-2212","shiptoAddress1":"Olde Towne Toys Store 1","shiptoAddress2":"1 Duke Street","shiptoAddress3":"","shiptoCity":"Alexandria","shiptoState":"VA","shiptoPostalCode":"22201","shiptoCountry":"United States","scheduleDate":"2014-12-03T14:02:04.950Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  },  
  {"nameSpace":"XM","type":"Quote",
    "id":"60005",
    "data":{"status":"C",
      "saleType":"CUST","calculateFreight":true,"margin":17741.4,"subtotal":21980,"taxTotal":0,"freight":0,"miscCharge":0,"total":21980,"site":"WH1","currency":"USD",
      "quoteDate":"2014-05-01T00:00:00.000Z",
      "customer":"XRETAIL",
      "terms":"COD",
      "salesRep":"JSMITH",
      "taxZone":null,"billtoContact":"32","shipto":null,"shiptoContact":null,"shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:06:24.470Z","item":"YTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"17be0fed-f9d1-485f-c152-d821e8addc32","value":"PL127"},{"characteristic":"I-FINISH","uuid":"dc46a236-50e8-43de-a430-436a0cbf612f","value":"Gloss"}],"uuid":"3cbecc02-4aa3-4930-b9ee-bc95853d55b5","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":2.1193,"priceUnitRatio":1,"extendedPrice":21980,"tax":0,"price":10.99,"discount":0,"listPriceDiscount":0,"markup":4.185675,"listPrice":10.99,"quantity":2000,"basePrice":10.99,"customerPrice":10.99,"margin":null}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40015","billtoName":"Master Prodiem Toys Retail Customer","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Frank","billtoContactMiddleName":"L","billtoContactLastName":"Zane","billtoContactSuffix":"","billtoContactPhone":"","billtoContactFax":"","billtoAddress1":"Prodiem Toys Inc.","billtoAddress2":"1 Playland Way","billtoAddress3":"","billtoCity":"Norfolk","billtoState":"AA","billtoPostalCode":"23180","billtoCountry":"United States","freightWeight":7500,"scheduleDate":"2014-12-03T14:06:24.470Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  }, 
  {"nameSpace":"XM","type":"Quote",
    "id":"60006",
    "data":{"status":"C",
      "saleType":"CUST","calculateFreight":true,"margin":35031,"subtotal":35031,"taxTotal":0,"freight":0,"miscCharge":0,"total":35031,"site":"WH1","currency":"GBP",
      "quoteDate":"2014-06-01T00:00:00.000Z",
      "customer":"XTRM",
      "terms":"2-10N30",
      "salesRep":"1000",
      "taxZone":null,"billtoContact":"3","shipto":"004ba13c-019b-4839-a1f8-e9d1d9740a74","shiptoContact":"4","shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:10:56.855Z","item":"KCAR1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"4688f304-c5ff-464d-e70f-30bec2e4b369","value":""}],"uuid":"c557b1f5-6c8c-4489-f05a-745fdcc48f8a","lineNumber":1,"unitCost":0,"extendedPrice":35031,"tax":0,"price":17.5155,"discount":0,"listPriceDiscount":0.060001,"listPrice":30,"quantity":2000,"basePrice":17.5155,"customerPrice":17.5155,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","priceUnitRatio":1,"margin":35031}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40016","billtoName":"Xtreme Toys LTD","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Fred","billtoContactMiddleName":"","billtoContactLastName":"Franklin","billtoContactSuffix":"","billtoContactPhone":"44-336-712-9857","billtoContactFax":"44-336-712-9857","billtoAddress1":"Xtreme Toys, Accounts Receivable","billtoAddress2":"1 Extra Way","billtoAddress3":"Suite 100","billtoCity":"Reading","billtoState":"Berkshire","billtoPostalCode":"RG6 1RA","billtoCountry":"United Kingdom","freightWeight":7500,"shiptoName":"XTRM Toys Distribution Center 1","shipNotes":"","shiptoContactFirstName":"Joe","shiptoContactMiddleName":"","shiptoContactLastName":"Stealt","shiptoContactSuffix":"","shiptoContactPhone":"55-44-336-712-9855","shiptoContactFax":"336-712-9856","shiptoAddress1":"1 Extra Way","shiptoAddress2":"Building 10","shiptoAddress3":"","shiptoCity":"Reading","shiptoState":"Berkshire","shiptoPostalCode":"RG6 1RA","shiptoCountry":"United Kingdom","scheduleDate":"2014-12-03T14:10:56.855Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  },  
  {"nameSpace":"XM","type":"Quote",
    "id":"60007",
    "data":{"status":"C",
      "saleType":"CUST","calculateFreight":true,"margin":19782,"subtotal":19782,"taxTotal":989.1,"freight":0,"miscCharge":0,"total":20771.1,"site":"WH1","currency":"USD",
      "quoteDate":"2014-07-01T00:00:00.000Z",
      "customer":"TTOYS",
      "terms":"2-10N30",
      "salesRep":"1000",
      "taxZone":"VA TAX","billtoContact":"1","shipto":"40a13fa2-6a29-4a3d-b023-add5ef929e4b","shiptoContact":"8","shipZone":"DOMESTIC1","lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:02:04.950Z","item":"BTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"41c69bd3-35b8-40a0-facc-f1b412737a5c","value":"PL126"}],"uuid":"08188b2c-8454-4788-d42b-db35636de5d0","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":0,"priceUnitRatio":1,"extendedPrice":19782,"tax":989.1,"quantity":2000,"basePrice":9.891,"customerPrice":9.891,"price":9.891,"margin":19782,"discount":0,"listPriceDiscount":0.1,"listPrice":10.99}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40014","billtoName":"Tremendous Toys Incorporated","commission":0.075,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Mike","billtoContactMiddleName":"","billtoContactLastName":"Farley","billtoContactSuffix":"","billtoContactPhone":"703-931-4269","billtoContactFax":"703-931-2212","billtoAddress1":"Tremendous Toys Inc.","billtoAddress2":"101 Toys Place","billtoAddress3":"","billtoCity":"Walnut Hills","billtoState":"VA","billtoPostalCode":"22209","billtoCountry":"United States","freightWeight":7500,"shiptoName":"Olde Towne Store 1","shipNotes":"Packing List Note:  No special handling or delivery instructions for \ndeliveries to STORE1.\n","shiptoContactFirstName":"Jake","shiptoContactMiddleName":"","shiptoContactLastName":"Sweet","shiptoContactSuffix":"","shiptoContactPhone":"800-321-5433","shiptoContactFax":"703-931-2212","shiptoAddress1":"Olde Towne Toys Store 1","shiptoAddress2":"1 Duke Street","shiptoAddress3":"","shiptoCity":"Alexandria","shiptoState":"VA","shiptoPostalCode":"22201","shiptoCountry":"United States","scheduleDate":"2014-12-03T14:02:04.950Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  },  
  {"nameSpace":"XM","type":"Quote",
    "id":"60008",
    "data":{"status":"O",
      "saleType":"CUST","calculateFreight":true,"margin":17741.4,"subtotal":21980,"taxTotal":0,"freight":0,"miscCharge":0,"total":21980,"site":"WH1","currency":"USD",
      "quoteDate":"2014-08-01T00:00:00.000Z",
      "customer":"XRETAIL",
      "terms":"COD",
      "salesRep":"JSMITH",
      "taxZone":null,"billtoContact":"32","shipto":null,"shiptoContact":null,"shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:06:24.470Z","item":"YTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"17be0fed-f9d1-485f-c152-d821e8addc32","value":"PL127"},{"characteristic":"I-FINISH","uuid":"dc46a236-50e8-43de-a430-436a0cbf612f","value":"Gloss"}],"uuid":"3cbecc02-4aa3-4930-b9ee-bc95853d55b5","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":2.1193,"priceUnitRatio":1,"extendedPrice":21980,"tax":0,"price":10.99,"discount":0,"listPriceDiscount":0,"markup":4.185675,"listPrice":10.99,"quantity":2000,"basePrice":10.99,"customerPrice":10.99,"margin":null}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40015","billtoName":"Master Prodiem Toys Retail Customer","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Frank","billtoContactMiddleName":"L","billtoContactLastName":"Zane","billtoContactSuffix":"","billtoContactPhone":"","billtoContactFax":"","billtoAddress1":"Prodiem Toys Inc.","billtoAddress2":"1 Playland Way","billtoAddress3":"","billtoCity":"Norfolk","billtoState":"AA","billtoPostalCode":"23180","billtoCountry":"United States","freightWeight":7500,"scheduleDate":"2014-12-03T14:06:24.470Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  },  
  {"nameSpace":"XM","type":"Quote",
    "id":"60009",
    "data":{"status":"O",
      "saleType":"CUST","calculateFreight":true,"margin":35031,"subtotal":35031,"taxTotal":0,"freight":0,"miscCharge":0,"total":35031,"site":"WH1","currency":"GBP",
      "quoteDate":"2014-09-01T00:00:00.000Z",
      "customer":"XTRM",
      "terms":"2-10N30",
      "salesRep":"1000",
      "taxZone":null,"billtoContact":"3","shipto":"004ba13c-019b-4839-a1f8-e9d1d9740a74","shiptoContact":"4","shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:10:56.855Z","item":"KCAR1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"4688f304-c5ff-464d-e70f-30bec2e4b369","value":""}],"uuid":"c557b1f5-6c8c-4489-f05a-745fdcc48f8a","lineNumber":1,"unitCost":0,"extendedPrice":35031,"tax":0,"price":17.5155,"discount":0,"listPriceDiscount":0.060001,"listPrice":30,"quantity":2000,"basePrice":17.5155,"customerPrice":17.5155,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","priceUnitRatio":1,"margin":35031}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40016","billtoName":"Xtreme Toys LTD","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Fred","billtoContactMiddleName":"","billtoContactLastName":"Franklin","billtoContactSuffix":"","billtoContactPhone":"44-336-712-9857","billtoContactFax":"44-336-712-9857","billtoAddress1":"Xtreme Toys, Accounts Receivable","billtoAddress2":"1 Extra Way","billtoAddress3":"Suite 100","billtoCity":"Reading","billtoState":"Berkshire","billtoPostalCode":"RG6 1RA","billtoCountry":"United Kingdom","freightWeight":7500,"shiptoName":"XTRM Toys Distribution Center 1","shipNotes":"","shiptoContactFirstName":"Joe","shiptoContactMiddleName":"","shiptoContactLastName":"Stealt","shiptoContactSuffix":"","shiptoContactPhone":"55-44-336-712-9855","shiptoContactFax":"336-712-9856","shiptoAddress1":"1 Extra Way","shiptoAddress2":"Building 10","shiptoAddress3":"","shiptoCity":"Reading","shiptoState":"Berkshire","shiptoPostalCode":"RG6 1RA","shiptoCountry":"United Kingdom","scheduleDate":"2014-12-03T14:10:56.855Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  },  
  {"nameSpace":"XM","type":"Quote",
    "id":"60010",
    "data":{"status":"O",
      "saleType":"CUST","calculateFreight":true,"margin":19782,"subtotal":19782,"taxTotal":989.1,"freight":0,"miscCharge":0,"total":20771.1,"site":"WH1","currency":"USD",
      "quoteDate":"2014-10-01T00:00:00.000Z",
      "customer":"TTOYS",
      "terms":"2-10N30",
      "salesRep":"1000",
      "taxZone":"VA TAX","billtoContact":"1","shipto":"40a13fa2-6a29-4a3d-b023-add5ef929e4b","shiptoContact":"8","shipZone":"DOMESTIC1","lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:02:04.950Z","item":"BTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"41c69bd3-35b8-40a0-facc-f1b412737a5c","value":"PL126"}],"uuid":"08188b2c-8454-4788-d42b-db35636de5d0","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":0,"priceUnitRatio":1,"extendedPrice":19782,"tax":989.1,"quantity":2000,"basePrice":9.891,"customerPrice":9.891,"price":9.891,"margin":19782,"discount":0,"listPriceDiscount":0.1,"listPrice":10.99}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40014","billtoName":"Tremendous Toys Incorporated","commission":0.075,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Mike","billtoContactMiddleName":"","billtoContactLastName":"Farley","billtoContactSuffix":"","billtoContactPhone":"703-931-4269","billtoContactFax":"703-931-2212","billtoAddress1":"Tremendous Toys Inc.","billtoAddress2":"101 Toys Place","billtoAddress3":"","billtoCity":"Walnut Hills","billtoState":"VA","billtoPostalCode":"22209","billtoCountry":"United States","freightWeight":7500,"shiptoName":"Olde Towne Store 1","shipNotes":"Packing List Note:  No special handling or delivery instructions for \ndeliveries to STORE1.\n","shiptoContactFirstName":"Jake","shiptoContactMiddleName":"","shiptoContactLastName":"Sweet","shiptoContactSuffix":"","shiptoContactPhone":"800-321-5433","shiptoContactFax":"703-931-2212","shiptoAddress1":"Olde Towne Toys Store 1","shiptoAddress2":"1 Duke Street","shiptoAddress3":"","shiptoCity":"Alexandria","shiptoState":"VA","shiptoPostalCode":"22201","shiptoCountry":"United States","scheduleDate":"2014-12-03T14:02:04.950Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  },  
  {"nameSpace":"XM","type":"Quote",
    "id":"60011",
    "data":{"status":"O",
      "saleType":"CUST","calculateFreight":true,"margin":17741.4,"subtotal":21980,"taxTotal":0,"freight":0,"miscCharge":0,"total":21980,"site":"WH1","currency":"USD",
      "quoteDate":"2014-11-01T00:00:00.000Z",
      "customer":"XRETAIL",
      "terms":"COD",
      "salesRep":"JSMITH",
      "taxZone":null,"billtoContact":"32","shipto":null,"shiptoContact":null,"shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:06:24.470Z","item":"YTRUCK1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"17be0fed-f9d1-485f-c152-d821e8addc32","value":"PL127"},{"characteristic":"I-FINISH","uuid":"dc46a236-50e8-43de-a430-436a0cbf612f","value":"Gloss"}],"uuid":"3cbecc02-4aa3-4930-b9ee-bc95853d55b5","lineNumber":1,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","unitCost":2.1193,"priceUnitRatio":1,"extendedPrice":21980,"tax":0,"price":10.99,"discount":0,"listPriceDiscount":0,"markup":4.185675,"listPrice":10.99,"quantity":2000,"basePrice":10.99,"customerPrice":10.99,"margin":null}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40015","billtoName":"Master Prodiem Toys Retail Customer","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Frank","billtoContactMiddleName":"L","billtoContactLastName":"Zane","billtoContactSuffix":"","billtoContactPhone":"","billtoContactFax":"","billtoAddress1":"Prodiem Toys Inc.","billtoAddress2":"1 Playland Way","billtoAddress3":"","billtoCity":"Norfolk","billtoState":"AA","billtoPostalCode":"23180","billtoCountry":"United States","freightWeight":7500,"scheduleDate":"2014-12-03T14:06:24.470Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  },  
  {"nameSpace":"XM","type":"Quote",
    "id":"60012",
    "data":{"status":"O",
      "saleType":"CUST","calculateFreight":true,"margin":35031,"subtotal":35031,"taxTotal":0,"freight":0,"miscCharge":0,"total":35031,"site":"WH1","currency":"GBP",
      "quoteDate":"2014-12-01T00:00:00.000Z",
      "customer":"XTRM",
      "terms":"2-10N30",
      "salesRep":"1000",
      "taxZone":null,"billtoContact":"3","shipto":"004ba13c-019b-4839-a1f8-e9d1d9740a74","shiptoContact":"4","shipZone":null,"lineItems":[{"quantityUnitRatio":1,"scheduleDate":"2014-12-03T14:10:56.855Z","item":"KCAR1","site":"WH1","comments":[],"characteristics":[{"characteristic":"I-COLOR","uuid":"4688f304-c5ff-464d-e70f-30bec2e4b369","value":""}],"uuid":"c557b1f5-6c8c-4489-f05a-745fdcc48f8a","lineNumber":1,"unitCost":0,"extendedPrice":35031,"tax":0,"price":17.5155,"discount":0,"listPriceDiscount":0.060001,"listPrice":30,"quantity":2000,"basePrice":17.5155,"customerPrice":17.5155,"taxType":"Taxable","quantityUnit":"EA","priceUnit":"EA","priceUnitRatio":1,"margin":35031}],"comments":[],"files":[],"accounts":[],"contacts":[],"urls":[],"items":[],"projects":[],"opportunity":null,"customers":[],"opportunities":[],"incidents":[],"toDos":[],"number":"40016","billtoName":"Xtreme Toys LTD","commission":0,"shipVia":"UPS-GROUND-UPS Ground","billtoContactFirstName":"Fred","billtoContactMiddleName":"","billtoContactLastName":"Franklin","billtoContactSuffix":"","billtoContactPhone":"44-336-712-9857","billtoContactFax":"44-336-712-9857","billtoAddress1":"Xtreme Toys, Accounts Receivable","billtoAddress2":"1 Extra Way","billtoAddress3":"Suite 100","billtoCity":"Reading","billtoState":"Berkshire","billtoPostalCode":"RG6 1RA","billtoCountry":"United Kingdom","freightWeight":7500,"shiptoName":"XTRM Toys Distribution Center 1","shipNotes":"","shiptoContactFirstName":"Joe","shiptoContactMiddleName":"","shiptoContactLastName":"Stealt","shiptoContactSuffix":"","shiptoContactPhone":"55-44-336-712-9855","shiptoContactFax":"336-712-9856","shiptoAddress1":"1 Extra Way","shiptoAddress2":"Building 10","shiptoAddress3":"","shiptoCity":"Reading","shiptoState":"Berkshire","shiptoPostalCode":"RG6 1RA","shiptoCountry":"United Kingdom","scheduleDate":"2014-12-03T14:10:56.855Z"},"binaryField":null,"requery":false,"encoding":"rjson"
  },
];