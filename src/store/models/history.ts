import { createModel } from '@rematch/core'
import { getImageHistoryByYear } from '@/services/api'

export type ContainerState = {
  docs: [][]
}

export const history = createModel({
  state: {
    docs: []
  },
  reducers: {
    setImageHistory: (state: ContainerState, payload: []) => {
      const { docs = [] } = state
      return {
        docs: [...docs, payload]
      }
    }
  },
  effects: dispatch => ({
    async getImageHistory(year) {
      getImageHistoryByYear(year).then((data: []) => {
        dispatch.history.setImageHistory(data)
      })
    }
  })
})
