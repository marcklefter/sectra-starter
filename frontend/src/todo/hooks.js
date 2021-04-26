import _ from 'lodash';

import {
  mode
 } from "./mode";

// ...

export const useDocumentTitle = title => {
  document.title = title;
}

// ...

export const useMode = stringArray => {
  const words = _.flatten(
    stringArray.reduce((words, word) => {
      return [...words, word.split(' ')];
    }, [])
  );

  return mode(words);
}