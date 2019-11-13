Feature: Test login functionality

Scenario: test login with valid data
Given user launching chromebrowser
And user opens login application
When user enters username as "Lalitha"
And user enters passwrod as "Password123"
Then click on login button
And verify login success


