import { createModel } from '@rematch/core'
import { getImageHistoryByMonth } from '@/services/api'

export type historyByMonthState = {
  docs: []
}

export const historyByMonth = createModel({
  state: {
    docs: []
  },
  reducers: {
    setHistoryByMonthList: (state: historyByMonthState, payload: []) => {
      const { docs } = state
      return {
        docs: [...docs, ...payload]
      }
    }
  },
  effects: dispatch => ({
    async getHistoryByMonthList({ page }) {
      getImageHistoryByMonth({ page }).then((data: historyByMonthState) => {
        dispatch.container.setContainerList(data.docs)
      })
    }
  })
})
