import { IAction } from "../interfaces/interfaces";
import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk(
  "team/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await axios.get<IAction[]>(
        "https://artisant.io/api/products "
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);
