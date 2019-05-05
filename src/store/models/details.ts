import { createModel } from '@rematch/core'
import { getImageDetails } from '@/services/api'

export type ContainerState = Container

interface Container {
  [propName: string]: string
}

export const details = createModel({
  state: {},
  reducers: {
    setContainerList: (state: ContainerState, payload: ContainerState) => {
      return {...payload }
    }
  },
  effects: dispatch => ({
    async getContainerList(id) {
      getImageDetails(id).then((data: ContainerState) => {
        dispatch.details.setContainerList(data)
      })
    }
  })
})