import { configureStore } from "@reduxjs/toolkit";

import info from "./info";
import segments from "./segments";
import calculations from "./calculations";
import kainos from "./kainos";

export const store = configureStore({
  reducer: {
    info,
    segments,
    calculations,
    kainos,
  },
});
