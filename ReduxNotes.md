## Redux Notes

Redux solves a problem that might not be clear in the beginning: it helps giving each React component the exact piece of state it needs.

Redux holds up the state within a single location.

With Redux the logic for fetching and managing the state lives outside React.

## Getting to know the Redux store

Actions. Reducers. I kind of knew about them. But one thing wasn’t clear to me: how were all the moving parts glued together?

The store orchestrates all the moving parts in Redux. Repeat with me: the store.

The store in Redux is like the human brain: it’s kind of magic.

The Redux store is fundamental: the state of the whole application lives inside the store.

So to start playing with Redux we should create a store for wrapping up the state.

The state in redux comes from reducers. Let’s make it clear: reducers produce the state of your application.

createStore takes a reducer as the first argument

## Getting to know Redux reducers

While an initial state is useful for SSR, in Redux the state must return entirely from reducers.

Cool, but what's a reducer?

A reducer is just a JavaScript function. A reducer takes two parameters: the current state and an action (more about actions soon).

In a tipical React component the local state changes in place with setState. In Redux you cannot do that. The third principle of Redux says that the state is immutable and cannot change in place. THAT'S WHY the reducer must be PURE. A pure function is one that returns the exact same output for the given input.

Creating a reducer is not that hard. It’s a plain JavaScript function with two parameters.

## Getting to know Redux actions

Redux reducers are without doubt the most important concept in Redux. Reducers produce the state of the application.

But how does a reducer know when to produce the next state?

The second principle of Redux says the only way to change the state is by sending a signal to the store. This signal is an action. “Dispatching an action” is the process of sending out a signal.

Now, how do you change an immutable state? You won’t. The resulting state is a copy of the current state plus the new data.

Redux actions are nothing more than JavaScript objects. This is what an action looks like:
```
{
  type: 'ADD_ARTICLE',
  payload: { title: 'React Redux Tutorial', id: 1 }
}
```

Every action needs a type property for describing how the state should change.

You can specify a payload as well. In the above example the payload is a new article. A reducer will add the article to the current state later.

It is a best pratice to wrap every action within a function. Such function is an action creator.

## Refactoring the reducer

The reducer calculates the next state depending on the action type. Moreover, it should return at least the initial state when no action type matches.

When the action type matches a valid clause the reducer calculates the next state and returns a new object.

There are two key points for avoiding mutations in Redux:
Using concat(), slice(), and …spread for arrays
Using Object.assign() and …spread for objects

Redux protip: the reducer will grow as your app will become bigger. You can split a big reducer into separate functions and combine them with combineReducers

## Redux store methods

Redux itself is a small library (2KB). The Redux store exposes a simple API for managing the state. The most important methods are:
- getState for accessing the current state of the application
- dispatch for dispatching an action
- subscribe for listening on state changes

accessing the current state: `store.getState()`

we can listen for state updates with subscribe.

The subscribe method accepts a callback that will fire whenever an action is dispatched. Dispatching an action means notifying the store that we want to change the state.

To change the state in Redux we need to dispatch an action. To dispatch an action you have to call the dispatch method.

## Connecting React with Redux

Should I call getState within a React component? How do I dispatch an action from a React component? And so on.

Redux on its own is framework agnostic. You can use it with vanilla Javascript. Or with Angular. Or with React. There are bindings for joining together Redux with your favorite framework/library.

For React there is react-redux.

Before moving forward install react-redux by running:

`npm i react-redux --save-dev`

## What is react-redux?

react-redux is a Redux binding for React. It’s a small library for connecting Redux and React in an efficient way.

The most important method you’ll work with is connect.  

What does react-redux’s connect do? Unsurprisingly it connects a React component with the Redux store.

You will use connect with two or three arguments depending on the use case. The fundamental things to know are:

- the mapStateToProps function
- the mapDispatchToProps function

What does mapStateToProps do in react-redux? mapStateToProps does exactly what its name suggests: it connects a part of the Redux state to the props of a React component. By doing so a connected React component will have access to the exact part of the store it needs.

And what about mapDispatchToProps? mapDispatchToProps does something similar, but for actions. mapDispatchToProps connects Redux actions to React props. This way a connected React component will be able to dispatch actions.

## App component and Redux store

We saw that mapStateToProps connects a portion of the Redux state to the props of a React component. You may wonder: is this enough for connecting Redux with React? No, it’s not.

To start off connecting Redux with React we’re going to use Provider.

Provider is an high order component coming from react-redux.

Using layman’s terms, Provider wraps up your React application and makes it aware of the entire Redux’s store.

Why so? We saw that in Redux the store manages everything. React must talk to the store for accessing the state and dispatching actions.

Provider wraps up your entire React application. Moreover it gets the store as a prop.

## List component and Redux state

We have done nothing special so far.

But our new component, List, will interact with the Redux store.

A brief recap: the key for connecting a React component with Redux is connect.

Connect takes at least one argument.

Since we want List to get a list of articles it’s a matter of connecting state.articles with the component. How? With mapStateToProps.

The List component receives the prop articles which is a copy of the articles array we saw in the Redux state. It comes from the reducer! (So components have access to these like store items aka state variables or props we give em from the reducer...)

Always remeber: the state in redux comes from reducers. Now,it’s a matter of using the prop inside JSX for generating a list of articles:

React protip: take the habit of validating props with PropTypes or even better, use TypeScript  

## Form component and Redux actions

Even when using Redux it is totally fine to have stateful components.

Not every piece of the application’s state should go inside Redux.

In this example I don’t want any other component to be aware of the Form local state.

The form component contains some logic for updating the local state upon a form submission.

It receives a Redux action as well. This way it can update the global state by dispatching the addArticle action.

mapDispatchToProps connects Redux actions to React props. This way a connected component is able to dispatch actions.

## What is a Redux middleware?

So far we saw the building blocks of Redux: the store, in charge for orchestrating all the interactions in Redux. Then we saw the reducer which is a producer: reducers make the state in Redux.

Then there are actions, plain JavaScript objects with a property named type. Finally we have action creators which are plain JavaScript function in charge for returning Redux actions.

On top of that we saw some of the Redux’s principle: the state is immutable and can change only in response to actions.

Now, imagine the following scenario: you want to prevent the user from creating articles containing particular words inside the title. Let’s take a look at handleSubmit in Form.jsx:

we want to check the action payload (and the title property) before the actions is passed to the reducer. There should be a way for tapping into the application’s flow and altering its behaviour. And guess what, that’s exactly what a Redux middleware does.

A Redux middleware is a function that is able to intercept, and act accordingly, our actions, before they reach the reducer.

And while the theory is quite simple, a Redux middleware can look a bit confusing. In its basic form a Redux middleware is a function returning a function, which takes next as a parameter. Then the inner function returns another function which takes action as a parameter and finally returns next(action).

function()
  return function(next)
      returns function(action)
          returns next(action)


Middlewares in Redux are super important because they will hold the bulk of your application’s logic.

There is no better place than a middleware for abstracting away business logic.

while inside the middleware you can access getState and dispatch

## Your first Redux middleware

The middleware we’re going to build should inspect the action’s payload.

There are a lot of benefits from using a Redux middleware, even for simplest tasks:
- the logic can live outside React (or any other library/framework)
- middlewares become reusable pieces of logic, easily to reason about
- middlewares can be tested in isolation
- we keep the components clean

We need to check the action payload, namely the title property. If the title matches one or more bad words we stop the user from adding the article.

Also, the check should fire up only when the action is of type ADD_ARTICLE.

you should always return next(action) in your middlewares. If you forget to return next(action) the application will stop, and no other action will reach the reducer.

Now, time to wire up forbiddenWordsMiddleware to the Redux store.

For that we need to import our middleware, another utility from Redux (applyMiddleware) and then cook everything together.