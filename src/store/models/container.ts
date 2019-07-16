import { createModel } from '@rematch/core'
import { getImageList } from '@/services/api'

export type ContainerState = {
  docs: []
}

export const container = createModel({
  state: {
    docs: [],
    page: 1
  },
  reducers: {
    setContainerList: (state: ContainerState, payload: []) => {
      const { docs } = state
      return {
        ...state,
        docs: [...docs, ...payload]
      }
    },
    setContainerPage: (state: ContainerState, payload: number) => {
      return {
        ...state,
        page: payload
      }
    }
  },
  effects: dispatch => ({
    async getContainerList({ page }) {
      getImageList({ page }).then((data: ContainerState) => {
        dispatch.container.setContainerList(data.docs)
      })
    },
    handleSetContainerPage(page) {
      dispatch.container.setContainerPage(page)
    }
  })
})
