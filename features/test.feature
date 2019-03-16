Feature: weather app
@Application_Check

Scenario: validate feature of weather web app
Given I enter city name "perth"
Then I validate that five weather forcast is populated
When I select "1" day
Then I validate that three hours data is available
When I select an already selected day "1"
Then I validate that three hours data is hidden from user for day "1"

@Weather_check
Scenario: validate weather check
Given I select "1" day
Then I Validate Max tempature "1"
Then I Validate Min tempature "1"
Then I validate current windspeed "1"
Then I validate current winddirection "1"
Then I validate aggegrate rain fall "1"
# Then I validate that five weather forcast is popusssslated
# When I select "1" day
# Then I validate that three hours data is available
# When I select an already selected day "1"
# Then I validate that three hours data is hidden from user for day "1"