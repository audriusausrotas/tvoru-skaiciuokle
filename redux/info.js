import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: "",
  adress: "",
  tel: "",
  email: "",
  type: "",
  metal: "",
  color: "",
  width: "",
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    addClient: (state, action) => {
      state.client = action.payload;
    },
    addAdress: (state, action) => {
      state.adress = action.payload;
    },
    addTel: (state, action) => {
      state.tel = action.payload;
    },
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    addType: (state, action) => {
      state.type = action.payload;
    },
    addMetal: (state, action) => {
      state.metal = action.payload;
    },
    addColor: (state, action) => {
      state.color = action.payload;
    },
    addWidth: (state, action) => {
      state.width = action.payload;
    },
    clearAll: (state) => {
      state.client = "";
      state.adress = "";
      state.tel = "";
      state.email = "";
      state.type = "";
      state.metal = "";
      state.color = "";
      state.width = "";
    },
  },
});

export const infoActions = infoSlice.actions;

export default infoSlice.reducer;
