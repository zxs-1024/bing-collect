import { createModel } from '@rematch/core'
import { queryProjectNotice } from '../../services/api'

export type ContainerState = {
  docs: []
  total: number
}

export const bing = createModel({
  state: {
    docs: [],
    total: 0
  },
  reducers: {
    setContainerList: (state: ContainerState, payload: ContainerState) => {
      const { docs } = state
      return {
        docs: [...docs, ...payload.docs],
        total: payload.total
      }
    }
  },
  effects: dispatch => ({
    async getContainerList() {
      queryProjectNotice().then((data: ContainerState) => {
        dispatch.bing.setContainerList(data)
      })
    }
  })
})
