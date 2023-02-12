# Component
Component is a UI building block

# Console.log
this will print the data in browser console

# State
To store the internal value of a component, we use the cocept called state
# Hooks
## useState
this hooks/function store the state of the component

# Props
Props is used to pass the argument to the component

# Local Storage
1. This will store the data in browser memory, we can tertive the data any time using window.localStorage object
2. There is no lifetime for the loca storage, it will remain the data, if we close the browser also
3.  The data will store in format for key value pair
4. Key value pair data type is string

# Session Storage
This is same as `Local Storage`, but only difference is the data will dispose/vanish/delete when we close the tab/browser

## How to store item in Local Storage
`window.localStorage.setItem('selected_location',JSON.stringify(item))`
1. `window.localStorage` : access the localStorage in react/javascript
2. `setItem` : is used to store the item into localStorage
3. `('selected_location',JSON.stringify(item))`:
    1. `selected_location`:  key of the localStorage
    2. `JSON.stringify(item)` :  value of the localStorage

## JSON.stringify
This is used to convert object to string format

## JSON.parse
This will convert json string to object

# useEffect
This hooks will execute when component mount/render to the UI

# Mock API
https://mockoon.com/

# API Call
To get the data from external application, we requried HTTP call
`fetch` is used call the external API/application data inside the react application

## Fetch
1. This is used to call the API inside the application
2. Fecth is promise in nature
3. To call any api, the API may be take some time to retrun the value
4. After returing the value, we have 2 choice
    1. Success data
    2. Error data

```
 fetch('http://localhost:3002/restaurant/list').then(res => res.json()).then(result => {
            console.log(result)
        }).catch(error => {

        })
```

1. `fetch('http://localhost:3002/restaurant/list')` : call the api
2. `then` : this will call when API response is OK(200)
3. `then(res => res.json())` : This will convert respons to JSON object
4. `catch(error =>` : call when API return error

# Tailwind CSS
https://tailwindcss.com/docs/guides/create-react-app

# className
In react to use css class name in a component, then we have to `className` props instead of `class`
becuase `class` is keyword and , we can't use class as  props

# Redux
Redux is used to manage state of the application, means redux create global state and that state we can access inside all the components.

Offical site : https://redux.js.org/

# Form
https://formik.org/ is used to do the reactive form in react js
# HTTP
https://axios-http.com/

# Error Tracking
https://sentry.io/


https://swiggy-clone-sreenutech.web.app/