import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import productsSlice from "../features/products/productsSlice"
import authSlice from "../features/auth/authSlice"

// * в store хранятся данные из всего react приложения
// они изменяются с помощью функции reducer, в которую передается action

export const store = configureStore({
  reducer: {
    // здесь могли бы быть ваши редьюсеры
    products: productsSlice.reducer,
    auth: authSlice.reducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>