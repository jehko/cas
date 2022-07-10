import { createSlice } from '@reduxjs/toolkit';

type device = {
  ip: string;
  label: string;
};

type initialState = {
  deviceList: Array<device>;
};

const initialState: initialState = {
  deviceList: [],
};

const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setDevice(state, action) {
      state.deviceList = action.payload.data;
    },
  },
});

export const deviceActions = deviceSlice.actions;
export default deviceSlice.reducer;
