# Exercise: hooks

This exercise introduces the following built-in hooks and their usage in components:

* `useState`
* `useEffect`
* `useReducer`

## Part 1

Implement an "effect" (with the useEffect hook) that starts a timer when the Counter component is shown, and increments the count by 1 every second (hint: Use the setInterval / clearInterval methods).

If the user hides the Counter component, the timer must stop (to avoid getting an error for trying to update the state of an unmounted component).

> Note: When working with the useEffect hook, you'll probably notice the timer getting too frequently created and destroyed (try logging the calls to setInterval / clearInterval).
>
> You want to start the timer _once_, upon the first render of the Counter component, and stop it only when the Counter component is hidden; investigate the [functional update variant](https://reactjs.org/docs/hooks-reference.html#functional-updates) of `setCount` to resolve this.

## Part 2

Add an additional `useEffect` call that persists the `count` state, whenever it changes, to local storage. When the user toggles the visibility of the Counter component, counting will thus pick up from the most recently stored value.

> The local storage API can be viewed [here](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage#example).

Set the initial value of the `count` state to either be read from local storage (if it has previously been stored), or default to 0.

As reading from local storage is a potentially expensive operation, use [lazy initialization](https://reactjs.org/docs/hooks-reference.html#lazy-initial-state) to set the initial value of the `count` state.

> Note: To remove a value from local storage, go to Chrome Devtools -> Application -> Local Storage and remove the key that's been stored.

## Part 3

Add additional component state to track _how much_ to increase the count value by (call the state variable `incBy`).

Add an HTML input element that allows the user to change the `incBy` state (remember to convert the input value from a string to a number).

Change the `useEffect` containing the timer code to update the `count` state with the value of `incBy`.

## Part 4

When you have complex state logic that involves multiple sub-values or when the next state depends on the previous one, the `useReducer` hook may be preferable to `useState`.

This is the case with the `count` and `incBy` state variables. They are interconnected and currently cause the timer to get destroyed and recreated whenever `incBy` changes, which is potentially wasteful.

Copy your code in the App component to the one in the `App_withReducer.tsx` file. Refactor the code from using _multiple_ calls to `useState` to a _single_ call to `useReducer` instead. Use the counter example from the [documentation](https://reactjs.org/docs/hooks-reference.html#usereducer) as a guide.

You'll have to provide the following typing for the `state` and `action` parameters in the reducer function:

```typescript
type State = {
  count: number;
  incBy: number;
};

type Action = 
  { type: 'UPDATE' } |
  { type: 'CHANGE', incBy: number };

const reducer = (state: State, action: Action) => {
  // ...
}
```

> Note: Make sure to change the export in `index.ts` from `App` to `App_withReducer`.

## Part 5 (optional)

Provide a custom implementation of the `useState` hook, powered by `useReducer`!

> Note: This part of the exercise is conducted in the `useStateImpl` example. In `src/index.tsx`, disable the `hooks` import and enable `useStateImpl`.
