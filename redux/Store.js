import { configureStore,  } from "@reduxjs/toolkit";
// import devToolsEnhancer from "remote-redux-devtools";
import CartReducer from "./CartReducer";
// export const store = configureStore({
//   reducer: {
//     ZomatoCart: CartReducer,
//   },

//   devTools: process.env.NODE_ENV == "development",
//   devTools: true,
//   // enhancers: [devToolsEnhancer({ realtime: true })],
//   enhancers: [batchedSubscribe(debounceNotify)],
// });

export const store = configureStore({
  reducer: {
    ZomatoCart: CartReducer,
  },
  // enhancers: [devToolsEnhancer({ realtime: true, port: 8000 })],
});
