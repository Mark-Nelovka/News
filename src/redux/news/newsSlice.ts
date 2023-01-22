import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getNews } from "./newsOperations";
import { IStateNews } from '../../interfaces/state';
import { INews } from '../../interfaces/news';
import Notiflix from "notiflix";

export const initialState: IStateNews = {
  news: [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(getNews.pending, (state: IStateNews, _) => {
     
    });
    builder.addCase(getNews.fulfilled, (state: IStateNews, { payload }: PayloadAction<INews[]>) => {
      state.news = payload;
     });
    builder.addCase(getNews.rejected, (state: IStateNews, {payload} ) => {
      Notiflix.Notify.failure(`${payload}`);
    });    
  },
  
});

export default newsSlice.reducer;