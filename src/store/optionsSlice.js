import { createSlice, nanoid } from '@reduxjs/toolkit';

const createOption = (title) => {
  return { id: nanoid(), title, completed: false, assignedTo: '' };
};

const initialState = [createOption(), createOption(), createOption()];

export const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {},
});

