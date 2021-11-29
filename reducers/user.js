import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: {
    username: 'sofia',
  },

  reducers: {
    addUser(store, action) {
      const newUser = {
        name: action.payload,
      };

      // immutable approach
      store.userName = [...store.username, newUser]; // this spreads whatever was before (...store) and adds the new data. It makes a totally new array that adds the values of the old array PLUS the values of the new array
    },
  },
});
export default user;
