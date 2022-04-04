import { IAction } from "./../interfaces/interfaces";
import { IItem } from "../interfaces/interfaces";
import { fetchItems } from "./item-actions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialTeamState {
  items: IItem[];
  loading: boolean;
  error: string;
}

const initialState: InitialTeamState = {
  items: [],
  loading: false,
  error: "",
};

export const itemsSlice = createSlice({
  name: "item",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchItems.fulfilled.type]: (state, action: PayloadAction<IAction>) => {
      state.items = action.payload.data.products;
    },
  },
});

export default itemsSlice.reducer;
