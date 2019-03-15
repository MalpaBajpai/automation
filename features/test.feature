Feature: weather app

Scenario: validate feature of weather web app
Given I enter city name "perth"
Then I validate that five weather forcast is populated
When I select "1" day
Then I validate that three hours data is available
When I select an already selected day "1"
Then I validate that three hours data is hidden from user for day "1"