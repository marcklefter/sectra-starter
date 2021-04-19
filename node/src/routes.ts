import express from 'express';

import * as userService from './userService';

// ...

const routes = express.Router();

routes.get('/:userId', (req, res) => {
  const userId = +req.params.userId;

  // TODO: Fetch and return user data (via userService.findUser and userService.findTodos).
  //
  // If an error occurs, return status 500 (Internal Server Error) with the error message in the body.
  res.send({ userId });
});

export { routes };