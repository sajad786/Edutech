import {configureStore} from '@reduxjs/toolkit';
import appReducer from './reducers';

const store = configureStore({
  reducer: appReducer,
});

export default store;

// note reduxjs/toolkit has inbuit thunk midleware

// import {configureStore} from '@reduxjs/toolkit';
// import {applyMiddleware} from 'redux';
// import {} from 'react-redux';
// import thunk from 'thunk';
// import appReducer from './reducers';

// const middleWares = [thunk];

// const store = configureStore(
//   {
//     reducer: appReducer,
//   },
//   applyMiddleware(...middleWares),
// );

// export default store;
