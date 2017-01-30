package org.funjala.automation.web.mach2.steps.mtfeatures;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.funjala.automation.web.common.drivers.Driver;
import org.funjala.automation.web.common.utilities.Log;
import org.funjala.automation.web.model.erp.search.ModelSearch;
import org.funjala.automation.web.pages.erp.home.OEHomePage;
import org.funjala.automation.web.pages.erp.login.OELoginPage;
import org.funjala.automation.web.pages.erp.search.OESearch;
import org.funjala.automation.web.pages.mach2.dashboard.MyDashboard;
import org.funjala.automation.web.pages.mach2.menu.TopMenuPage;
import org.funjala.automation.web.pages.mach2.widget.WidgetPage;
import org.openqa.selenium.WebDriver;

import java.io.IOException;
import java.util.List;

import static org.testng.Assert.assertEquals;

/**
 * Created by Administrator on 1/30/2017.
 */
public class DennisSteps {

  String expectedList[];
  String value, tag;

  @Then("^I should see a List view with all employees that contains \"([^\"]*)\" in their \"([^\"]*)\"$")
  public void iClickOnSaveButton(String value, String tag) throws InterruptedException {
    Log log = Log.getInstance();
    WebDriver driver = Driver.getDriver().getWebDriver();
    WidgetPage widget = new WidgetPage(driver);
    this.value = value; this.tag = tag;
    log.info("Step", "I should see a List view with all employees that contains " + value + " in their " + tag, "List view with all employees with " + value);
    expectedList = widget.getNameListWidget();
    Thread.sleep(5000);
    MyDashboard dashboard = new MyDashboard(driver);
    dashboard.deleteBoard();
    TopMenuPage topMenuPage = new TopMenuPage(driver);
    topMenuPage.clickOnLogOut();
  }

  @And("^This result should be the same in the OpernERP$")
  public void assertListInOpenERP() throws IOException, InterruptedException {
    Log log = Log.getInstance();
    WebDriver driver = Driver.getDriver().getWebDriver();
    WidgetPage widget = new WidgetPage(driver);
    log.info("Step", "I click on save button", "Click on save button");
    assertEquals(expectedList, openERPVerification());
  }

  private String[] openERPVerification() throws IOException, InterruptedException {
    WebDriver driver;
    driver = Driver.getDriver().openBrowser(Driver.OpenERP);
    OELoginPage loginERP = new OELoginPage(driver);
    loginERP.setUserName("jose7");
    loginERP.setPassword("jose7");
    OEHomePage homeERP = loginERP.clickBtnSubmit();

    homeERP.clickHumanResources();
    OESearch searchERP = homeERP.oeSearch();

    searchERP.clickSearchArrow();
    searchERP.clickAdvancedSearch();
    searchERP.foundAndClickAdvancedFilterOptions(tag, "contains", value);
    searchERP.clickApplySearch();
    searchERP.clickSwitchList();
    searchERP.clickNumberElement();
    searchERP.clickQuantityButton();
    searchERP.clickUnlimitedOption();
    List<ModelSearch> list = searchERP.getResultOfSearch();
    String [] result = new String[list.size()];
    int i = 0;
    for (ModelSearch model: list) {
      result[i] = model.getName();
      i++;
    }
    homeERP.clickUserAccount();
    homeERP.clickLogOut();
    return result;
  }
}
