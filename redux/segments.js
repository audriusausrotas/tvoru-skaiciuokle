import { createSlice } from "@reduxjs/toolkit";

const valuesObject = {
  ilgis: "",
  aukstis: "",
  m2: "",
  space: "",
  spaceAlt: "",
  segments: "",
  segmentsAlt: "",
  wantedSpace: 2,
  double: false,
  gates: false,
  kaina: 0,
};

const initialState = {
  segments: [1],
  values: [valuesObject],
};

export const segmentsSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    addSegment: (state) => {
      state.segments.push(1);
      state.values.push(valuesObject);
    },
    clearAll: (state) => {
      state.segments = [1];
      state.values = [valuesObject];
    },
    copyLast: (state) => {
      state.segments.push(1);
      state.values.push(state.values[state.values.length - 1]);
    },
    addValues: (state, action) => {
      // updating values
      if (action.payload.parameter === "double") {
        state.values[action.payload.index].double = action.payload.value;
      } else if (action.payload.parameter === "ilgis") {
        state.values[action.payload.index].ilgis = action.payload.value;
      } else if (action.payload.parameter === "aukstis") {
        state.values[action.payload.index].aukstis = action.payload.value;
      } else if (action.payload.parameter === "gates") {
        state.values[action.payload.index].gates = action.payload.value;
      } else {
        state.values[action.payload.index].wantedSpace = action.payload.value;
      }

      // calculate m2
      if (
        state.values[action.payload.index].ilgis !== "" &&
        state.values[action.payload.index].aukstis !== ""
      ) {
        state.values[action.payload.index].m2 = (
          (state.values[action.payload.index].ilgis *
            state.values[action.payload.index].aukstis) /
          10000
        ).toFixed(2);
      } else {
        state.values[action.payload.index].m2 = "";
      }

      state.values[action.payload.index].kaina =
        (state.values[action.payload.index].aukstis / 100) * 1;

      //counting segments and spaces
      if (state.values[action.payload.index].ilgis !== "") {
        // sets space between segments
        let space = state.values[action.payload.index].double ? 8 : 2;

        if (state.values[action.payload.index].wantedSpace !== "") {
          space = Number(state.values[action.payload.index].wantedSpace);
        }
        //count segments

        let length = state.values[action.payload.index].ilgis;

        let segments = Math.round(length / (11 + space));

        //asigns segments
        state.values[action.payload.index].segments = state.values[
          action.payload.index
        ].double
          ? segments + segments - 1
          : segments;

        //count spaces
        let spacesTemp = ((length - segments * 11) / (segments - 1)).toFixed(2);

        if (state.values[action.payload.index].double) {
          const spaceBack = (
            (length - (segments - 1) * 11 - spacesTemp * (segments - 2)) /
            2
          ).toFixed(2);

          spacesTemp = `${spacesTemp} || ${spaceBack} `;
        }
        state.values[action.payload.index].space = spacesTemp;

        // count alt segments
        const segmentsAlt1 = segments - 1;
        const segmentsAlt2 = segments + 1;

        let segmentsAlt = segmentsAlt1;

        //count alt spaces
        const spaceAlt1 = (
          (Number(state.values[action.payload.index].ilgis) -
            Number(segmentsAlt1) * 11) /
          (Number(segmentsAlt1) - 1)
        ).toFixed(2);

        const spaceAlt2 = (
          (length - Number(segmentsAlt2) * 11) /
          (Number(segmentsAlt2) - 1)
        ).toFixed(2);

        let spaceAlt = spaceAlt1;

        if (
          Math.abs(spaceAlt1 - state.values[action.payload.index].wantedSpace) >
          Math.abs(spaceAlt2 - state.values[action.payload.index].wantedSpace)
        ) {
          spaceAlt = spaceAlt2;
          segmentsAlt = segmentsAlt2;
        }

        state.values[action.payload.index].segmentsAlt = state.values[
          action.payload.index
        ].double
          ? segmentsAlt + segmentsAlt - 1
          : segmentsAlt;

        if (state.values[action.payload.index].double) {
          const spaceBack = (
            (length - (segmentsAlt - 1) * 11 - spaceAlt * (segmentsAlt - 2)) /
            2
          ).toFixed(2);

          spaceAlt = `${spaceAlt} || ${spaceBack} `;
        }

        state.values[action.payload.index].spaceAlt = spaceAlt;
      }
    },
  },
});

export const { addSegment, addValues, clearAll, addWantedSpace, copyLast } =
  segmentsSlice.actions;

export default segmentsSlice.reducer;
