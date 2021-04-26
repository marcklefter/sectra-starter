export const taskReducer = (state, action) => {
  switch (action.type) {
    // TODO:
    //
    // Return updated state by handling actions:
    //
    // TASK_EXECUTE
    // TASK_SUCCESS
    // TASK_FAILURE
    // TASK_CANCEL

    default:
      throw new Error(`Unsupported action type: ${action.type}`)
  }
}