# React Workshop for Node Girls

This workshop is a code along format

## Prerequisites

* Node >= 6 installed on your machine
* Have some HTML and CSS knowledge
* Text editor installed such as VS Code, Atom or Sublime
* Have some experience with the command line

## What is React?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces.

## What are we going to build?

A react weather app

![alt text](https://i.imgur.com/tteDZMy.png)

## Before we start

Signup to a free account with OpenWeatherMap so you have an api key. We'll use this later to fetch the weather data. https://openweathermap.org/appid

## Let's get started!

#### Setup

Go to https://github.com/facebook/create-react-app and run the three command lines shown in 'Quick Overview' (only run one line at a time).

#### Add styling for the app

Once you have your app running, replace the css in src/App.css with this https://gist.github.com/saussayjesica/cf1726fdaa6157b4d36b1011fb9528d3

#### Add custom font

Go to public/index.html. Add the following `<link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">`
underneath the shortcut icon link element on line 13

#### Add background color to the body

Add the following to the body styling in index.css
`background-color: #ece0fe;`

#### Add svg files

Download the svg files from this link https://wetransfer.com/downloads/3691a58a2abf5f9ac80044b1a2c5015f20180504101204/20a7a347bf145f16460ce61dd666aab020180504101204/923885
and save the files to the public folder

---

## What is JSX?

JSX looks like HTML markup in JavaScript. However, under the hood, JSX is allowing developers to use HTML syntax to compose JavaScript components

## input, select, textarea in React

Check out the React docs for these HTML form elements. They have some good examples - https://reactjs.org/docs/forms.html

## Props

Most components can be customized with different parameters when they are created. These creation parameters are called props (properties)

## State

State is similar to props, but it is private and fully controlled by the component.

* Don’t modify state directly e.g. this.state.city = ‘Sydney’
* Use setState instead e.g this.setState({city: ‘Sydney})
* You can only assign state in the constructor

---

> Mentor instructions are saved in mentor_instructions.md
