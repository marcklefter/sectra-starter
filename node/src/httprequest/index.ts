import http from 'http';

// ...
// Callback.

type Callback<T> = (err: Error | null, result?: T) => void;

const getUser = (id: number, uc: Callback<unknown>) => {
  // ...
}

getUser(100, (err, user) => {
  if (err) return console.error(`ERROR: ${err.message}`);

  console.log(user);
});