# Mentor instructions

---

## Setup

1.  Create react app
2.  Delete all unecessary files
3.  Replace app.css with https://gist.github.com/saussayjesica/cf1726fdaa6157b4d36b1011fb9528d3
4.  Add google font to index.html
5.  Add background color to index.css
6.  Download the weather svgs in this repo in the public folder and save to their project
7.  Delete all code in App.js
8.  Create App component from scratch - import react, create class, render, return, export default etc. Explain JSX and mention it should be wrapped in an enclosing tag

## Add Location component

7.  start adding the location code in App.js and hard code values
8.  pull location code out into a seperate component
9.  show how props work - move hard coded values to props
10. show how state works - move hard coded values from props to state

## Add Weather component

11. add code for weather in App.js and hard code values
12. pull weather code out into a seperate component
13. go over how props work again - move hard coded values to props
14. go over how state works again - move hard coded values from props to state

## Add Search Bar component

15. add searchbar code - don't include the value and onChange props for input or onClick for button yet
16. add the value for the input using state - refer to react docs for more info
17. make onChange function - explain event.target (a reference to the object that dispatched the event).console.log event.target so they will see value
18. explain setState and add the value to state when the input changes

* have to set up fetch call before doing onClick for button

## Fetch

20. create .env file
21. add openweathermap api key to the env file
22. work through getWeather() function
23. set up onClick for button - it calls the getweather function with this.state.textbox as an arguement
24. go through componentDidMount and remove all hard coded values in state

EXTRAS - if there is time

* Move searchBar to another component
* Press enter on search bar and it searches
* When you click on search bar it selects all text
* Update fetch to async await
* Convert class components to stateless components
* Add repo to github
