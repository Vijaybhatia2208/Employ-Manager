import { configureStore, createSlice } from "@reduxjs/toolkit";

const employSlice = createSlice({
    name: "employs",
    initialState: [],
    reducers: {
        createEmploy(state, action) {
            state.push(action.payload)
        },

        deleteEmploy(state, action) {
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        },

        editEmploy(state, action) {
            return action.payload
        }

    }
})

const store = configureStore({
    reducer: {
        employs: employSlice.reducer
    }
})

store.dispatch(
    employSlice.actions.deleteEmploy()
)

export { store };
export const { createEmploy, editEmploy, deleteEmploy } = employSlice.actions;
