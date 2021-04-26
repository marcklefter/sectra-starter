import {
  useReducer
} from 'react'

import {
  useDocumentTitle,
  useMode
} from './hooks';

import {
  TodoForm
} from './TodoForm';

import {
  Todo
} from './Todo';

import {
  todosReducer
} from './todosReducer';

// ...

const style = {
  width: 'calc(100% / 3)',
  margin: '150px auto auto auto'
}

export const App = () => {
  const [todos, dispatch] = useReducer(
    todosReducer,
    require('./todos.json')
  );

  useDocumentTitle(
    todos
      ? `Todos (${todos.reduce(
        (count, todo) => (!todo.completed ? ++count : count),
        0
      )})`
      : ''
  );

  // prepare to get the mode (= most frequently used word) in the set of all todo titles.
  const titles = (todos || []).map(({ title }) => title);

  const mfw = useMode(titles);

  console.log('Mode: ' + (mfw ?? 'N/A'));

  const createTodo = title => {
    dispatch({
      type: 'CREATE_TODO',
      title,
    });
  };

  const deleteTodo = todoId => {
    dispatch({
      type: 'DELETE_TODO',
      todoId,
    });
  };

  const updateTodo = todoId => {
    dispatch({
      type: 'UPDATE_TODO',
      todoId,
    });
  };

  return (
    <div style={style}>
      <TodoForm createTodo={createTodo} />

      {todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
