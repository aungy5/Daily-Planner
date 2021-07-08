# Daily-Planner
HW_5

Link to deployed application: https://aungy5.github.io/Daily-Planner/

GitHub Repository Link: https://github.com/aungy5/Daily-Planner

ACCEPTANCE CRITERIA:

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

Summary:
In this activity we were asked to create a daily planner that people could use to keep a list of tasks they need to complete throughout the day. 

We were required to bring in the moment.js library in order to work with dates/times. This helps the application function based on time of day, and allows the blocks to change color based on whether that hour is in the past, present, or future. 

In my application blocks of time are defined with the colors below. 

PAST = Pink

PRESENT = Red

FUTURE = Green

We were also required to use local storage to save the events, so that when the page is refreshed the list remains the same. 

