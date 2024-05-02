1- First, create app:
$ npx create-react-app ---(name app)----

Steps to setup redux...

2- in terminal:
npm install @reduxjs/toolkit react-redux
(maybe axios too? -> npm i axios )
(axios moment ? -> npm install axios moment)
(React router-dom ? -> npm install react-router-dom)

3- Create: src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import somethingReducer from "./some/slice";

const store = configureStore({
reducer: {
something: somethingReducer,
},
});

export default store;

4- Create 'slices': src/store/something/slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = { someProperty: "some initial value", };

export const somethingSlice = createSlice({ name: "something", initialState, reducers: {}, });

export const {
//put reducers here//
} = somethingSlice.actions; export default somethingSlice.reducer;

5- in src/index.js
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
// <React.StrictMode>
<Provider store={store}>
<App />
</Provider>
// </React.StrictMode>
);

6- in src/components/any/component.js
import { useDispatch } from "react-redux"; import { doSomething } from "../../store/something/slice";

function MyComponent() { const dispatch = useDispatch(); dispatch(doSomething("My payload")); }

7- Setup of src/store/<something>/selectors.js
export const selectSomething = (reduxState) => reduxState.something.what;

8- If needed install react-router-dom:
npm install react-router-dom

Inject the router into the app by wrapping the App component in a Router

// src/index.js
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
// <React.StrictMode>
<Provider store={store}>
<Router>
<App />
</Router>
</Provider>
// </React.StrictMode>
);

9- Setting up a HOMEPAGE:

#Create src/pages/HomePage.js:
import React from "react";

export default function HomePage() {
return <h1>HomePage!</h1>;
}

#Modify src/App.js:
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function App() {
return (

<div>
<Routes>
{/_ more pages to be added here later _/}
<Route path="/" element={<HomePage />} />
</Routes>
</div>
);
}
