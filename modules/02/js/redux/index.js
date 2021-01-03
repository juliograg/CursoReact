const createStore = (reducer, initialState) => {
    let state = initialState;
    let updater = () => {};
  
    const getState = () => state;
  
    const dispatch = (action) => {
      state = reducer(state, action);
      updater();
    };
  
    const subscribe = (listener) => {
      updater = listener;
    };
    return {
      getState,
      subscribe,
      dispatch,
    };
  };

  function combineReducer() {
      
  }

  export {
      createStore,
      combineReducer,
  }