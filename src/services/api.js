import request from '@/utils/request'

export async function getImageList({ page = 1, limit = 8 } = {}) {
  return request(`/api/v1/images/${page}/${limit}`)
}

export async function getImageDetails(id) {
  return request(`/api/v1/images/${id}`)
}

export async function getImageHistoryByYear(year) {
  return request(`/api/v1/images/history/${year}`)
}

export async function getImageHistoryByMonth({ page = 1, limit = 8 } = {}) {
  return request(`/api/v1/images/month/${page}/${limit}`)
}