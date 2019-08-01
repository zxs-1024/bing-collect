import axios from '@/utils/axios'

export async function getImageList({ page = 1, limit = 8 } = {}) {
  return axios(`/api/v1/images/${page}/${limit}`)
}

export async function getImageDetails(id) {
  return axios(`/api/v1/images/${id}`)
}

export async function getImageHistoryByYear(year) {
  return axios(`/api/v1/images/history/${year}`)
}

export async function getImageHistoryByMonth({ month, page = 1, limit = 8 } = {}) {
  return axios(`/api/v1/images/month/${month}/${page}/${limit}`)
}