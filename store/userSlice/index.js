// import { setUser } from "./actions";
import { createReducer, createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  username: 'user',
  password: ''
}

// export const userReducer = createReducer([],(builder)=> {
//   builder.addCase(setUser,(state,action)=>{
//     state.id = action.payload.id
//     state.user = action.payload.user
//     state.password = action.payload.password
//     return state
//   })
// })

const userSlice = createSlice({
  name : 'user',
  initialState,
  reducers : {
    setUser : (state,action ) => {
      state.id = action.payload.id
      state.username = action.payload.username
      state.password = action.payload.password
      return state
    }
  }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer