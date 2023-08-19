import { configureStore } from "@reduxjs/toolkit";

import info from "./info";
import segments from "./segments";

export const store = configureStore({
  reducer: {
    info,
    segments,
  },
});
