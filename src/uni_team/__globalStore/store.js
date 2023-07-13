import { configureStore } from '@reduxjs/toolkit';
import USER from './reducers/userSlice';
import AUTH_STATUS from './reducers/authStatusSlice';
import MENU from './reducers/menu';
const Globalstore = configureStore(
  {
    reducer: {
      USER,
      AUTH_STATUS,
      MENU
    }
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Globalstore;
