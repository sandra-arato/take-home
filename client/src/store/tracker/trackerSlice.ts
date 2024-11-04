import { createAppSlice } from '@/store/createAppSlice'
import { Tracker } from '../../../../server/types'
import {
  // getTrackers as get,
  updateTracker as update,
  createTracker as createNewTracker,
  deleteTracker as deleteExistingTracker,
  getTrackers,
} from '../apiContext'
import { createAsyncThunk } from '@reduxjs/toolkit'

export interface trackerSliceState {
  trackers: Tracker[]
  loading: boolean
}

const initialState: trackerSliceState = {
  trackers: [],
  loading: false,
}

export const fetchTrackers = createAsyncThunk('fetchTrackers', async () => {
  console.log('fetching trackers.... ')
  const response = await getTrackers()
  console.log('get request response', response)
  if (response === undefined) {
    throw new Error('Failed to fetch trackers')
  }
  return response
})
// If you are not using async thunks you can use the standalone `createSlice`.
export const trackerSlice = createAppSlice({
  name: 'trackers',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  // you could pull these out to be in a seperate trackerReducers.ts
  reducers: create => ({
    /// async thunk will update the local state optimistically till we get the
    // API response
    updateTracker: create.asyncThunk(
      async (tracker: Tracker): Promise<Tracker> => {
        const response = await update(tracker)
        if (!response) {
          throw new Error('Failed to update tracker')
        }
        return response
      },
      {
        pending: state => {
          state.loading = true
        },
        fulfilled: (state, action) => {
          state.trackers = state.trackers.map(tracker =>
            tracker.id === action.payload.id ? action.payload : tracker,
          )
          console.log('fullfilled update', action.payload, state.trackers)
          state.loading = false
        },
        rejected: state => {
          state.loading = false
        },
      },
    ),
    createTracker: create.asyncThunk(
      async (tracker: Tracker): Promise<Tracker> => {
        const response = await createNewTracker(tracker)
        if (!response) {
          throw new Error('Failed to create tracker')
        }
        return response
      },
      {
        pending: state => {
          console.log('pending')
          state.loading = true
          state.trackers = [...state.trackers]
        },
        fulfilled: (state, action) => {
          console.log('fullfilled', action)
          state.trackers = [...state.trackers, action.payload]
          state.loading = false
        },
        rejected: state => {
          state.loading = false
        },
      },
    ),
    deleteTracker: create.asyncThunk(
      async (tracker: Tracker): Promise<Tracker> => {
        const response = await deleteExistingTracker(tracker)
        if (!response) {
          throw new Error('Failed to delete tracker')
        }
        return response
      },
      {
        pending: state => {
          state.loading = true
        },
        fulfilled: (state, action) => {
          state.trackers = state.trackers.filter(
            tracker => tracker.id !== action.payload.id,
          )
          state.loading = false
        },
        rejected: state => {
          state.loading = false
        },
      },
    ),
  }),
  extraReducers: builder => {
    builder.addCase(fetchTrackers.pending, state => {
      console.log('pending fetchTrackers', state)
      state.loading = true
    })
    builder.addCase(fetchTrackers.fulfilled, (state, action) => {
      console.log('fulfilled fetchTrackers')
      console.log(Object.values(action.payload))

      state.trackers = [...Object.values(action.payload)] satisfies Tracker[]
      state.loading = false
    })
    builder.addCase(fetchTrackers.rejected, state => {
      console.error('rejected fetchTrackers')
      state.trackers = []
      state.loading = false
    })
  },
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectLoading: state => state.loading,
    selectTrackers: state => state.trackers,
  },
})

// Action creators are generated for each case reducer function.
export const { updateTracker, deleteTracker, createTracker } =
  trackerSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectLoading, selectTrackers } = trackerSlice.selectors
