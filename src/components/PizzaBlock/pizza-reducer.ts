import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios';

export type PizzaItemType = {
    id: number
    imageUrl: string
    name: string
    types: [0, 1]
    sizes: [26, 30, 40]
    price: number
    category: number
    rating: number
}

type ErrorType = null | string

const initialState = {
    items: [] as Array<PizzaItemType>,
    isLoading: false,
    error: null as ErrorType
}

const fetchPizzasTC = createAsyncThunk('pizzas/fetchPizzas', async () => {
    try {

    } catch (err) {
    }
})

export type PizzasInitialState = typeof initialState

export const asyncActions = {
    fetchPizzasTC
}

export const slice = createSlice({
    name: 'pizzas',
    initialState: initialState,
    reducers: {

    },
    extraReducers: builder => {

    }
})

export const pizzaReducer = slice.reducer
export const {} = slice.actions
