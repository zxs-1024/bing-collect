import { createModel } from '@rematch/core'
import { getImageList } from '@/services/api'

export type ContainerState = {
  docs: [],
  page: 1
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
      return getImageList({ page }).then((data: ContainerState) => {
        dispatch.container.setContainerList(data.docs)
        return data
      })
    },
    handleSetContainerPage(page) {
      dispatch.container.setContainerPage(page)
    }
  })
})
