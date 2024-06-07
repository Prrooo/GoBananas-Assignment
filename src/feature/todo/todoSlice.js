import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "../../helpFun/todoFun";

const initialState={
    todos:[],
    searchQuery:'',
    status:'idle',
}

export const todoSlice =createSlice({
    name : 'todo',
    initialState,
    reducers:{
        setSearchQuery(state,action){
            state.searchQuery=action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTodos.pending,(state)=>{
            state.status='Loading';
        })
        .addCase(fetchTodos.fulfilled,(state,action)=>{
            state.status='succeded';
            state.todos=action.payload;
        })
        .addCase(fetchTodos.rejected,(state)=>{
            state.status='failed'
        });
    }
})

export const {setSearchQuery}=todoSlice.actions;

export default todoSlice.reducer;