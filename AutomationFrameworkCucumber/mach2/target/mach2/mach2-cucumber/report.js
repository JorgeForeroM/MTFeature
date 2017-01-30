$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/mtfeatures/featureDennis.feature");
formatter.feature({
  "line": 1,
  "name": "Validate list of Employees Experience",
  "description": "This scenario validate Employee Experience by a Skill search containing Java.",
  "id": "validate-list-of-employees-experience",
  "keyword": "Feature"
});
formatter.before({
  "duration": 109811399,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#  Scenario: Verify that Employee Experience list view shows all employees that contains the Git skill"
    },
    {
      "line": 5,
      "value": "#    Given I am login on Mach2 with credentials"
    },
    {
      "line": 6,
      "value": "#      | user        | password |"
    },
    {
      "line": 7,
      "value": "#      | jorgeforero | jb\u002611235 |"
    },
    {
      "line": 8,
      "value": "#    And I have a board and widget created"
    },
    {
      "line": 9,
      "value": "#    When I select \"List\" icon on Widget options"
    },
    {
      "line": 10,
      "value": "#    And I select \"Open ERP\" service"
    },
    {
      "line": 11,
      "value": "#    And I select \"Employees Experience\" of Open ERP"
    },
    {
      "line": 12,
      "value": "#    And I select \"GitHub\" on \"Skills\" option"
    },
    {
      "line": 13,
      "value": "#    And I click on save button"
    },
    {
      "line": 14,
      "value": "#    Then I should see a List view with all employees that contains \"GitHub\" in their \"Skills\""
    },
    {
      "line": 15,
      "value": "#    And This result should be the same in the OpernERP"
    }
  ],
  "line": 16,
  "name": "Table list with divisions by SELOG",
  "description": "",
  "id": "validate-list-of-employees-experience;table-list-with-divisions-by-selog",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I am login on Mach2 with credentials",
  "rows": [
    {
      "cells": [
        "user",
        "password"
      ],
      "line": 18
    },
    {
      "cells": [
        "fernando.iquiza",
        "AT1033748"
      ],
      "line": 19
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I have a board and widget created",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \"List\" icon on Widget options",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I select \"Open ERP\" service",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select \"Employees Personal Information\" of Open ERP",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select \"Outsourcing\" on \"Divisions\" option",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.loginOnMachWebpage(DataTable)"
});
formatter.result({
  "duration": 8984536399,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iHaveABoardWithWidget()"
});
formatter.result({
  "duration": 1982634200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "List",
      "offset": 10
    }
  ],
  "location": "CommonSteps.iClickOnListButtonOnWidgetDisplayed(String)"
});
formatter.result({
  "duration": 5612973800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Open ERP",
      "offset": 10
    }
  ],
  "location": "CommonSteps.iSelectXService(String)"
});
formatter.result({
  "duration": 1370232499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employees Personal Information",
      "offset": 10
    }
  ],
  "location": "CommonSteps.iSelectOptionOfOpenERP(String)"
});
formatter.result({
  "duration": 343091700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Outsourcing",
      "offset": 10
    },
    {
      "val": "Divisions",
      "offset": 27
    }
  ],
  "location": "ListEnInForJobTitleStep.iFillJobTitle(String,String)"
});
formatter.result({
  "duration": 1802073500,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.iClickOnSaveButton()"
});
formatter.result({
  "duration": 224712500,
  "status": "passed"
});
formatter.after({
  "duration": 771699,
  "status": "passed"
});
});