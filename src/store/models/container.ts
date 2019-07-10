import { createModel } from '@rematch/core'
import { getImageList } from '@/services/api'

export type ContainerState = {
  docs: []
}

export const container = createModel({
  state: {
    docs: []
  },
  reducers: {
    setContainerList: (state: ContainerState, payload: []) => {
      const { docs } = state
      return {
        docs: [...docs, ...payload]
      }
    }
  },
  effects: dispatch => ({
    async getContainerList({ page }) {
      getImageList({ page }).then((data: ContainerState) => {
        dispatch.container.setContainerList(data.docs)
      })
    }
  })
})
