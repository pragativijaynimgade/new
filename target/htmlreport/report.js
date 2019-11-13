$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/skeleton/login.feature");
formatter.feature({
  "name": "Test login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "test login with valid data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user launching chromebrowser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_launching_chromebrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens login application",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_opens_login_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username as \"Lalitha\"",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enters_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters passwrod as \"Password123\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_enters_passwrod_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify login success",
  "keyword": "And "
});
formatter.match({
  "location": "Login.verify_login_success()"
});
formatter.result({
  "status": "passed"
});
});