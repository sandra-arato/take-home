import { createAppSlice } from '@/store/createAppSlice'
import { Transaction } from '../../../../server/types'
import {
  getTransactions as get,
  updateTransaction as update,
} from '../apiContext'

export interface transactionSliceState {
  transactions: Transaction[]
  loading: boolean
}

const initialState: transactionSliceState = {
  transactions: [],
  loading: false,
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const transactionSlice = createAppSlice({
  name: 'transactions',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  // you could pull these out to be in a seperate transactionReducers.ts
  reducers: create => ({
    /// async thunk will update the local state optimistically till we get the
    // API response
    getTransactions: create.asyncThunk(
      async (): Promise<Transaction[]> => {
        const response = await get()
        return response
      },
      {
        pending: state => {
          state.loading = true
        },
        fulfilled: (state, action) => {
          state = {
            transactions: action.payload,
            loading: false,
          }
        },
        rejected: state => {
          state.loading = false
        },
      },
    ),
    updateTransaction: create.asyncThunk(
      async (transaction: Transaction): Promise<Transaction> => {
        const response = await update(transaction)
        // The value we return becomes the `fulfilled` action payload
        // const response = {
        //   data: 'settled' as Status, /// this would be coming typed from SDK
        // }
        return response
      },
      {
        pending: state => {
          state.loading = true
        },
        fulfilled: (state, action) => {
          state = {
            transactions: [...state.transactions, action.payload],
            loading: false,
          }
        },
        rejected: state => {
          state.loading = false
        },
      },
    ),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectLoading: state => state.loading,
  },
})

// Action creators are generated for each case reducer function.
export const { updateTransaction } = transactionSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectLoading } = transactionSlice.selectors
