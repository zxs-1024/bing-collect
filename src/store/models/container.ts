import { createModel } from '@rematch/core'
import { getImageList } from '@/services/api'

export type ContainerState = {
  docs: []
  total: number,
  page: number
}

export const container = createModel({
  state: {
    docs: [],
    total: 0,
    page: 1
  },
  reducers: {
    setContainerList: (state: ContainerState, payload: ContainerState) => {
      const { docs, page } = state
      return {
        docs: [...docs, ...payload.docs],
        total: payload.total,
        page: page + 1
      }
    }
  },
  effects: dispatch => ({
    async getContainerList(payload, { container }) {
      const page = container.page
      getImageList({ page }).then((data: ContainerState) => {
        dispatch.container.setContainerList(data)
      })
    }
  })
})
