import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { filter, getNews, getNewsById } from "./newsOperations";
import { IStateNews } from '../../interfaces/state';
import { INews } from '../../interfaces/news';
import Notiflix from "notiflix";

export const initialState: IStateNews = {
  news: [],
  filter: ""
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
    
    builder.addCase(getNewsById.pending, (state: IStateNews, _) => {
     
    });
    builder.addCase(getNewsById.fulfilled, (state: IStateNews, { payload }: PayloadAction<INews>) => {
      state.news = [payload];
     });
    builder.addCase(getNewsById.rejected, (state: IStateNews, {payload} ) => {
      Notiflix.Notify.failure(`${payload}`);
    });   

    builder.addCase(filter, (state: IStateNews, {payload} ) => {
      state.filter = payload;
    });    
  },
  
});

export default newsSlice.reducer;