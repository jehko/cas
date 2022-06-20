export const SET_DEVICES = 'SET_DEVICES';

type ACTION = { type: string; payload: object };

export const setDevices = (devices: [] | string): ACTION => ({
  type: SET_DEVICES,
  payload: { devices },
});
