import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tvorlentes: [
    { name: "Alba", kaina: 1 },
    { name: "Dilė", kaina: 1 },
  ],
  daimond: [
    { name: "Daimond 60/90 nepermatoma", kaina: 35 },
    { name: "Daimond 60/90 vidutinė", kaina: 32 },
    { name: "Daimond 40/105 nepermatoma", kaina: 32 },
    { name: "Daimond 40/105 vidutinė", kaina: 29 },
  ],
  stulpai: [
    { name: "Stulpas 60x40 h2.4 m, sienelė 1.25mm", kaina: 9.26 },
    { name: "Stulpas 60x40 h2.5 m, sienelė 2mm", kaina: 17.35 },
    { name: "Stulpas 60x40 h3.0 m, sienelė 2mm", kaina: 20 },
    { name: "Stulpas 80x80 h2.5 m, sienelė 2mm", kaina: 32.39 },
  ],
  stulpaiV: [
    { name: "Stulpas 80x80 h3.0 m, sienelė 2mm", kaina: 49.5 },
    { name: "Stulpas 100x100 h3.0 m, sienelė 3mm", kaina: 80 },
  ],
  pamatas: [{ name: "pamatas 2490x200x50 mm", kaina: 16 }],
  pamatoLaikiklis: [{ name: "laikiklis 200x50 mm", kaina: 3 }],
  kniedes: [{ name: "kniedės / sąvisriegiai 1000 vnt", kaina: 45 }],
  kniedes: [{ name: "kniedės / sąvisriegiai 1000 vnt", kaina: 45 }],
  apkaustas: [{ name: "Apkaustas metrais", kaina: 2.8 }],
  skersinis: [
    { name: "skersinis 20x40 mm, 2.5 m", kaina: 7.93 },
    { name: "skersinis 20x40 mm, 3.0 m", kaina: 9.52 },
  ],
};

export const kainosSlice = createSlice({
  name: "kainos",
  initialState,
  reducers: {
    addKainos: (state, action) => {},
  },
});

export const kainosActions = kainosSlice.actions;

export default kainosSlice.reducer;
