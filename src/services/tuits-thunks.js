// The Redux createAsyncThunk function can wrap an asynchronous HTTP function so that it can interact
// with a Redux reducer to store data from a remote server into a local redux store.
import {createAsyncThunk} from "@reduxjs/toolkit"
// import all exported functions as service
import * as service from "./tuits-service"

// create thunk for findTuits
export const findTuitsThunk = createAsyncThunk(
    // give unique name, thunk invokes service function. Returned data goes in redux action's payload
    'tuits/findTuits', async () =>
        await service.findTuits()
)

export const deleteTuitThunk = createAsyncThunk(
    // unique thunk identifier
    // wraps
    // service method
    // return tuit ID so we can remove tuit
    // from reducer's store
    'tuits/deleteTuit',
    async (tuitId) => {
        await service.deleteTuit(tuitId)
        return tuitId
    })

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) => {
    const newTuit = await service.createTuit(tuit)
    return newTuit
})

export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) =>
            await service.updateTuit(tuit)
    )

