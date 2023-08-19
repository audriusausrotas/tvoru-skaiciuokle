import { createSlice } from "@reduxjs/toolkit";

const valuesObject = {
  ilgis: "",
  aukstis: "",
  m2: "",
  space: "",
  spaceAlt: "",
  segments: "",
  segmentsAlt: "",
  wantedSpace: "",
  double: false,
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
    addValues: (state, action) => {
      // updating values
      if (action.payload.parameter === "double") {
        state.values[action.payload.index].double = action.payload.value;
      } else if (action.payload.parameter === "ilgis") {
        state.values[action.payload.index].ilgis = action.payload.value;
      } else if (action.payload.parameter === "aukstis") {
        state.values[action.payload.index].aukstis = action.payload.value;
      } else {
        state.values[action.payload.index].wantedSpace = action.payload.value;
      }

      // calculate m2
      if (
        state.values[action.payload.index].ilgis !== "" &&
        state.values[action.payload.index].aukstis !== ""
      ) {
        state.values[action.payload.index].m2 = (
          state.values[action.payload.index].ilgis *
          state.values[action.payload.index].aukstis
        ).toFixed(2);
      } else {
        state.values[action.payload.index].m2 = "";
      }

      //counting segments and spaces
      if (state.values[action.payload.index].ilgis !== "") {
        // sets space between segments
        let space = state.values[action.payload.index].double ? 8 : 3;

        if (state.values[action.payload.index].wantedSpace !== "") {
          space = Number(state.values[action.payload.index].wantedSpace);
        }
        //count segments

        let length = state.values[action.payload.index].ilgis * 100;

        if (state.values[action.payload.index].double) {
          length = length * 2;
        }

        let segmentCount = length / (11 + space);

        if (state.values[action.payload.index].double) {
          segmentCount = segmentCount + 1;
        }

        const segments = Math.round(segmentCount);
        state.values[action.payload.index].segments = segments;

        state.values[action.payload.index].space = (
          (length - Number(state.values[action.payload.index].segments) * 11) /
          (Number(state.values[action.payload.index].segments) - 1)
        ).toFixed(2);

        // count alt segments
        const segmentsAlt1 = segments - 1;
        const segmentsAlt2 = segments + 1;

        let segmentsAlt = segmentsAlt1;

        //count alt spaces
        const spaceAlt1 = (
          (Number(state.values[action.payload.index].ilgis) * 100 -
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

        state.values[action.payload.index].segmentsAlt = segmentsAlt;
        state.values[action.payload.index].spaceAlt = spaceAlt;
      }
    },
  },
});

export const { addSegment, addValues, clearAll, addWantedSpace } =
  segmentsSlice.actions;

export default segmentsSlice.reducer;
