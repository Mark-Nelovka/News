import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IStateNews } from "../../interfaces/state";
import Notiflix from "notiflix";

const { REACT_APP_API_KEY, REACT_APP_URL_API } = process.env;

axios.defaults.baseURL = `${REACT_APP_URL_API}`;



const getNews = createAsyncThunk('news/getNews', async (payload, thunkApi) => {
   return payload;
});

export { getNews };