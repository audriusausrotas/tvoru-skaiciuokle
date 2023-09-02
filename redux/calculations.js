import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  segmentai: 0,
  m2: 0,
  m: 0,
  tvorlentes: 0,
  tvorlentesAlt: 0,
  skersiniai: 0,
  skersiniuLaikikliai: 0,
  stulpai: 1,
  vartuStulpai: 0,
  borteliai: 0,
  borteliuLaikikliai: 0,
  kniedes: 0,
  kniedesAlt: 0,
  kojos: 0,
  apkaustai: 0,
  kaina: 0,
};

export const calculationsSlice = createSlice({
  name: "calculations",
  initialState,
  reducers: {
    addData: (state, action) => {
      let segmentai = action.payload.length;
      let m2 = 0;
      let m = 0;
      let tvorlentes = 0;
      let tvorlentesAlt = 0;
      let skersiniai = 0;
      let stulpai = 1;
      let vartuStulpai = 0;
      let borteliai = 0;
      let kniedes = 0;
      let kniedesAlt = 0;
      let kojos = [];
      let apkaustai = [];
      let isTogether = false;
      let kaina = 0;

      action.payload.forEach((item) => {
        if (item.ilgis) {
          kaina += item.kaina;
          m2 = Number(m2) + Number(item.m2);
          m = (Number(m) + Number(item.aukstis) / 100).toFixed(2);
          tvorlentes = tvorlentes + item.segments;
          tvorlentesAlt = tvorlentesAlt + item.segmentsAlt;

          kniedes =
            kniedes + item.aukstis > 160 ? tvorlentes * 6 : tvorlentes * 4;

          kniedesAlt =
            kniedesAlt + item.aukstis > 160
              ? tvorlentesAlt * 6
              : tvorlentesAlt * 4;

          kojos.push({ aukstis: item.aukstis, vnt: 2 });
          apkaustai.push({ aukstis: item.aukstis, vnt: 2 });

          if (!item.gates) {
            skersiniai = skersiniai + (item.aukstis > 160 ? 3 : 2);

            stulpai++;

            borteliai++;

            isTogether = false;
          } else {
            if (!isTogether) {
              stulpai--;
              vartuStulpai += 2;
            } else {
              vartuStulpai++;
            }
            isTogether = true;
          }
        } else {
          segmentai = segmentai - 1;
        }
      });

      state.segmentai = segmentai;
      state.m2 = m2;
      state.m = m;
      state.tvorlentes = tvorlentes;
      state.tvorlentesAlt = tvorlentesAlt;
      state.skersiniai = skersiniai;
      state.skersiniuLaikikliai = skersiniai * 2;
      state.stulpai = stulpai;
      state.vartuStulpai = vartuStulpai;
      state.borteliai = borteliai;
      state.borteliuLaikikliai = borteliai * 2;
      state.kniedes = kniedes;
      state.kniedesAlt = kniedesAlt;
      state.kojos = [...kojos];
      state.apkaustai = [...apkaustai];
      state.kaina = kaina;
    },

    clearAll: (state) => {
      state.segmentai = 0;
      state.m2 = 0;
      state.m = 0;
      state.tvorlentes = 0;
      state.tvorlentesAlt = 0;
      state.skersiniai = 0;
      state.skersiniuLaikikliai = 0;
      state.stulpai = 0;
      state.vartuStulpai = 0;
      state.borteliai = 0;
      state.borteliuLaikikliai = 0;
      state.kniedes = 0;
      state.kojos = [];
      state.apkaustai = [];
    },
  },
});

export const calculationsActions = calculationsSlice.actions;

export default calculationsSlice.reducer;
