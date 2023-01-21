import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getNews } from "./newsOperations";
import { IStateNews } from '../../interfaces/state';
import Notiflix from "notiflix";

export const initialState: IStateNews = {
  news: [],
};

const authSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {


    builder.addCase(getNews.pending, (state: IStateNews, _) => {
     
    });
     builder.addCase(getNews.fulfilled, (state: IStateNews, {payload}: PayloadAction<void>) => {
         return state;
     });
    builder.addCase(getNews.rejected, (state: IStateNews, _) => {
     
    });    
  },
  
});

export default authSlice.reducer;