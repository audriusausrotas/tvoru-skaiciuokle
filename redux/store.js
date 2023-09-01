import { configureStore } from "@reduxjs/toolkit";

import info from "./info";
import segments from "./segments";
import calculations from "./calculations";

export const store = configureStore({
  reducer: {
    info,
    segments,
    calculations,
  },
});
