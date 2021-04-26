import axios from 'axios';

// ...

export const fetchUser = (id, delayMs = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      async () => {
        try {
          resolve((await axios(`${process.env.REACT_APP_API_URL}/users/${id}`)).data);
        } catch (error) {
          reject(error);
        }
      },
      delayMs
    );
  });
}