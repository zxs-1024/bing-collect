import { createModel } from '@rematch/core'
import { getImageHistoryByMonth } from '@/services/api'

export type historyByMonthState = {
  docs: [],
  page: 1
}

export const historyByMonth = createModel({
  state: {
    docs: [],
    page: 1
  },
  reducers: {
    setHistoryByMonthList: (state: historyByMonthState, payload: []) => {
      const { docs } = state
      return {
        docs: [...docs, ...payload]
      }
    },
    setHistoryByMonthPage: (state: historyByMonthState, payload: number) => {
      return {
        ...state,
        page: payload
      }
    }
  },
  effects: dispatch => ({
    async getHistoryByMonth(payload) {
      return getImageHistoryByMonth(payload).then((data: historyByMonthState) => {
        dispatch.historyByMonth.setHistoryByMonthList(data.docs)
        return data
      })
    },
    handleSetHistoryByMonthPage(page) {
      dispatch.historyByMonth.setHistoryByMonthPage(page)
    }
  })
})
