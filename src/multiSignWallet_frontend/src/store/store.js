// store.js
import { configureStore } from '@reduxjs/toolkit';
import transferReducer from '../reducer';

const store = configureStore({
 reducer: transferReducer,
});
if (process.env.NODE_ENV !== 'production') {
    window.store = store;
   }

export default store;
