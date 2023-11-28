import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./features/auth/module";
import ordersReducer from "./features/orders/module";
import shippersReducer from "./features/shippers/module";
import registeredUsersReducer from "./features/registeredUsers/module";

import datePickerReducer from "./features/datePicker/module";
import drawerReducer from "./features/drawer/module";
import toastReducer from "./features/toast/module";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    orders: ordersReducer,
    shippers: shippersReducer,
    registeredUsers: registeredUsersReducer,

    datePicker: datePickerReducer,
    drawer: drawerReducer,
    toast: toastReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
