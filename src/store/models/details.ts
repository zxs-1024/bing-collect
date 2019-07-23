import { createModel } from '@rematch/core'
import { getImageDetails } from '@/services/api'

export type DetailsState = {
  [propName: string]: string
}

export const details = createModel({
  state: {},
  reducers: {
    setImageDetails: (state: DetailsState, payload: DetailsState = {}) => {
      return { ...payload }
    }
  },
  effects: dispatch => ({
    async getImageDetails(id) {
      getImageDetails(id).then((data: DetailsState) => {
        dispatch.details.setImageDetails(data)
      })
    }
  })
})
