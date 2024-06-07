import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos=createAsyncThunk('todoSlice/fetchTodos',async()=>{
    try {
        const res=await axios.get('https://jsonplaceholder.typicode.com/users');
        return res.data;
    } catch (error) {
        console.log("error while fetching data error -> " ,error);
    }
})