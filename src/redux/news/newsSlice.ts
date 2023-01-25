import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { filter, getNews } from "./newsOperations";
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

    builder.addCase(filter, (state: IStateNews, {payload} ) => {
      state.filter = payload;
      // state.news = state.news.filter(item => {
      //   const matchValue = payload.toLowerCase()
      //   const { title, summary } = item
      //   if (title.toLowerCase().includes(matchValue)) return true
      //   if (summary.toLowerCase().includes(matchValue)) return true
      //   return false
      // })
    });    
  },
  
});

export default newsSlice.reducer;