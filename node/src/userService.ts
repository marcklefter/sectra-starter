import fetch, {
  Response
} from 'node-fetch';

import _ from 'lodash';

// ...

type Resource = Record<string, unknown>;

const findResource = async (resourcePath: string) => {
  // TODO: Fetch the resource given by resourcePath and handle any error(s). 
  //
  // Note: A response error is indicated via the response.ok flag.
}

export const findUser = async (id: number): Promise<Resource> => {
  const user = await findResource(`users/${id}`);

  return _.pick(user, ['name', 'email']);
}

export const findTodos = async (id: number): Promise<string[]> => {
  const todos = await findResource(`todos?userId=${id}`);

  return todos.map((todo: Resource) => todo.title);
}