# Exercise: Data fetching

In this exercise a number of scenarios related to fetching component data will be explored.

## Part 1: Fetch-then-render

In this part of the exercise, the so-called "fetch-then-render" data fetching strategy is employed, to ensure that all the data that is needed to render the _UserProfile_ component, as well as the _Followers_ and _Repos_ child components, is fetched first, before any rendering occurs.

Implement the following:

* Fetch user details, followers and repos in parallel, and store the results as an object to be set as the `profile` state.

* Upon having fetched user details, also fetch the user's avatar (available via the __avatar_url__ property in the fetched user details object; utilize the `fetchImage` function to let the browser load and cache the image).

## Part 2: Custom fetch hook

> Note: Make a copy of the previous folder (`v1`) into a new folder called `v2`; add an export of `v2` in `dataFetching/index.js`.

Fetching data for a given URL is the kind of code that may generalized and reused across components.

* Implement a custom hook `useFetch` that can be invoked with an URL:

  ```javascript
  // status = 'idle' / 'pending' / 'resolved'.
  const [status, data] = useFetch(url);
  ```

  To manage the state for a "fetch", use the following reducer:

  ```javascript
  // initial state for this reducer in useReducer will be: { status: 'idle', data: null }.
  const fetchReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return {
          ...state,
          status: 'pending'
        };

      case 'FETCH_SUCCESS':
        return {
          status: 'resolved',
          data: action.payload
        };

      default:
        throw new Error(`Unsupported action type ${action.type}`)
    }
  }
  ```

  Replace the fetching code from part 1 by adding (three) separate calls to `useFetch` for fetching user details, repos and followers.

* Implement a custom hook `useImageFetch` to be invoked as follows:

  ```javascript
  const imageLoaded = useImageFetch(src);
  ```

  Call this hook to fetch the user's avatar.

  > Note: The user's details are fetched first with the `useFetch` hook, but the data may not yet be available when `useImageFetch` is called, so make sure the `useImageFetch` hook can handle a `src` argument which is null (meaning there is no image to fetch yet).

* If you click on and navigate to a user, and then click the "Back" button _before_ the user's data has been fetched, you'll get the following warning:

  _"Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function."_

  > Note: You may have to throttle your network speed in Chrome Devtools to "Fast 3G" to observe this.

  Even though the _UserProfile_ gets unmounted when clicking the "Back" button, there are still promises waiting to resolved, with subsequent state updates occurring.

  To prohibit updating state in a component that is no longer mounted, add a guard when dispatching the _FETCH_SUCCESS_ action in the `useFetch` hook.

  > Utilize a strategy similar to cancelling tasks in the _useTask_ exercise.

  > Add similar logic to the `useImageFetch` hook as well.

* Add caching of fetched resources in the `useFetch` hook.

  In the `useFetch.js` file, create an object _outside_ the hook, mapping URLs to (fetched) data.
  
   _Inside_ the hook, add code for checking if data for a given URL has already been fetched (and thus cached), otherwise cache it.

## Part 3: Colocating data fetching

> Note: Make a copy of the previous folder (`v2`) into a new folder called `v3`; add an export of `v3` in `dataFetching/index.js`.

Instead of fetching all data for a component _and_ its child components at once, let every component be responsible for managing its own data.

* Move the calls to `useFetch` for repos and followers data to the _Repos_ and _Followers_ components, and let each component display a loading indicator while data is loading.

  Change the prop passed to these components to be the endpoint URL for their data.

* Currently, repos and followers won't start to fetch until the user's details have been loaded first. To avoid this "waterfall", you can _prefetch_ repos and followers when a new user is selected.

  Add a `prefetch` function to the `useFetch.js` file, that accepts a URL as an argument and maps it to the Promise returned by `fetchResource`.

  > Note: You'll have to create an object that maps URLs to Promises.

  Add logic inside the `useFetch` hook to check whether any resources are being prefetched.

  In the _App_ component (in `index.jsx`), in the `selectUser` method, add calls to the `prefetch` function with the URLs for repos and followers for the selected user.

## Part 4: Using a 3rd party library (SWR) - Optional

As you've probably noticed, building a comprehensive data fetching solution is not an easy feat; features such as cache management, deduping requests, automatic revalidation and prefetching can take a lot of effort to implement correctly and maintain.

For these and other reasons, it's recommended to use a robust 3rd party library for efficient data fetching. There are several libraries available, such as [SWR](https://swr.vercel.app/) and [react-query](https://react-query.tanstack.com/).

For our purposes, SWR is an excellent choice: follow the [documentation](https://swr.vercel.app/getting-started) and refactor the data fetching code in the _UserProfile_, _Repos_ and _Followers components to use the SWR library's `useSWR` hook.
