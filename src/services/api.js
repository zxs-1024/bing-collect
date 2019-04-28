// import { stringify } from 'qs'
import request from '../utils/request'

export async function queryProjectNotice({ page = 1, limit = 8 } = {}) {
  return request(`/api/v1/images/${page}/${limit}`)
}

export async function getImageDetails(id) {
  return request(`/api/v1/images/${id}`)
}