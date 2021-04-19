# Exercise: debounce

In this exercise, data will be fetched in a _debounced_ manner; when a user ID is selected in an input element, a fetch request does _not_ get sent immediately, rather it's slightly delayed ("debounced"), giving the user some leeway in stepping through user IDs without triggering multiple (unnecessary) fetches.

## Part 1

Add the following to the App component:

* A state variable `userData` that holds fetched data for a selected user ID.

  Parameterize `useState` as follows:

  ```typescript
  useState<{ name: string } | null>(null)
  ```

* A state variable `error` that holds an error object representing a fetch error.

  Parameterize `useState` as follows:

  ```typescript
  useState<Error | null>(null)
  ```

* A state variable `loading` that represents a loading flag (boolean).

Implement the `fetchUser` function in the `useEffect` call. Ensure that the `userData`, `error` and `loading` states are updated correctly throughout the fetching process.

Uncomment the rendered elements in the returned markup to view fetch output.

## Part 2

Currently, as soon as a new user ID is selected, the data for that user is fetched immediately.

Implement debouncing as follows:

* Add a new state variable called `userResource`, which stores the entire resource URL for a specific user that has been selected.

  Given a user ID, the corresponding resource URL is provided via the function `getUserResourceUrl`.

  Make sure that a fetch is executed only when the `resource` state changes (and _not_ when the `userId` state changes, which is the case initially).

* Create a debounced function `updateUserResource` outside the component. 

  This function receives an "updater" function as a parameter; the updater, which is run after a specified delay, should contain code to _update the `userResource` state_.

  Use the Lodash library's [_.debounce](https://lodash.com/docs/4.17.15#debounce) to create `updateUserResource`.
  
  Call `updateUserResource` with an updater function when a new user ID is selected (= `handleChange` event handler).

Verify in the Chrome Devtools -> Network panel that debouncing works; fetch requests should only get sent when a final user ID has been selected, after a slight delay. 
