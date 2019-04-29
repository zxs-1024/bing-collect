import { createModel } from '@rematch/core'
import { getImageList } from '../../services/api'

export type ContainerState = {
  docs: []
  total: number
}

export const container = createModel({
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
      getImageList().then((data: ContainerState) => {
        dispatch.container.setContainerList(data)
      })
    }
  })
})
