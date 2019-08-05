import axios from '@/utils/axios'

export async function getImageList({ page = 1, limit = 8 } = {}) {
  return axios(`/api/v1/images/getImageHistory/${page}/${limit}`)
}

export async function getImageDetails(id: number) {
  return axios(`/api/v1/images/getImageDetailsById/${id}`)
}

export async function getImageHistoryByYear(year: number) {
  return axios(`/api/v1/images/getImageHistoryByYear/${year}`)
}

interface MonthParams {
  month: number
  page: number
  limit: number
}

export async function getImageHistoryByMonth({ month, page = 1, limit = 8 }: MonthParams) {
  return axios(`/api/v1/images/getHistoryByMonth/${month}/${page}/${limit}`)
}