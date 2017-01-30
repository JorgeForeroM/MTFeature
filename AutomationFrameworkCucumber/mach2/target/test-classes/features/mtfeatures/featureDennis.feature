Feature: Validate list of Employees Experience
  This scenario validate Employee Experience by a Skill search containing Java.

#  Scenario: Verify that Employee Experience list view shows all employees that contains the Git skill
#    Given I am login on Mach2 with credentials
#      | user        | password |
#      | jorgeforero | jb&11235 |
#    And I have a board and widget created
#    When I select "List" icon on Widget options
#    And I select "Open ERP" service
#    And I select "Employees Experience" of Open ERP
#    And I select "GitHub" on "Skills" option
#    And I click on save button
#    Then I should see a List view with all employees that contains "GitHub" in their "Skills"
#    And This result should be the same in the OpernERP
  Scenario: Table list with divisions by SELOG
    Given I am login on Mach2 with credentials
      | user            | password  |
      | fernando.iquiza | AT1033748 |
    And I have a board and widget created
    When I select "List" icon on Widget options
    And I select "Open ERP" service
    And I select "Employees Personal Information" of Open ERP
    And I select "Outsourcing" on "Divisions" option
    And I click on save button