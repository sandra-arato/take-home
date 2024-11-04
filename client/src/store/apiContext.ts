import { transactions, trackers } from '../../../server/mockData'
import { Tracker, Transaction } from '../../../server/types'

// this would be a more robust API handler,
// but for now, I just export mock calls from this file

// A mock function to mimic making an async request for data
export const getTransactions = (): Promise<Transaction[]> => {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          ...transactions,
        }),
      500,
    ),
  )
}

export const updateTransaction = (
  transaction: Transaction,
): Promise<Transaction> => {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          ...transaction,
        }),
      500,
    ),
  )
}

export const getTrackers = (): Promise<Tracker[]> => {
  return new Promise(resolve => {
    const response = fetch('/api/trackers', {
      method: 'GET',
    })
    console.log('response from get trackers', response)
    resolve({ ...trackers })
  })
}

// API request type coming from the api itself
export const createTracker = (
  tracker?: Tracker,
): Promise<Tracker | undefined> => {
  // this is mock only
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve(
          tracker
            ? {
                ...tracker,
              }
            : undefined,
        ),
      100,
    ),
  )
}
// in a normal world, this is incorrect, but for now, since I'm not writing
// to the BE anyway, I can get away with the following renamigns of the same function
export const deleteTracker = (tracker: Tracker): Promise<Tracker> => {
  // this is mock only
  return new Promise(resolve => setTimeout(() => resolve({ ...tracker }), 100))
}
export const updateTracker = (tracker: Tracker): Promise<Tracker> => {
  // this is mock only
  return new Promise(resolve => setTimeout(() => resolve({ ...tracker }), 100))
}
