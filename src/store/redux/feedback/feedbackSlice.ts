import { createAppSlice } from "store/createAppSlice"

import { likesAndDislikesSliceState } from "./types"

const likeInitialState: likesAndDislikesSliceState = {
  likes: 0,
  dislikes: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK_LIKES",
  initialState: likeInitialState,
  reducers: create => ({
    like: create.reducer((state: likesAndDislikesSliceState) => {
      state.likes = state.likes + 1
    }),
    dislike: create.reducer((state: likesAndDislikesSliceState) => {
      state.dislikes = state.dislikes + 1
    }),
    recetResults: create.reducer((state: likesAndDislikesSliceState) => {
      state.likes = 0
      state.dislikes = 0
    }),
  }),
  selectors: {
    likes: (state: likesAndDislikesSliceState) => {
      return state.likes
    },
    dislikes: (state: likesAndDislikesSliceState) => {
      return state.dislikes
    },
  },
})

export const feedbackSliceSelectors = feedbackSlice.selectors
export const feedbackSliceActions = feedbackSlice.actions
