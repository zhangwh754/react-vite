import service from './service'

export type Res = {
  [key: string]: any
}

export type ErrorCode = number | undefined

type SurveyQuery = {
  keyword: string
  isPublish: boolean
  isStar: boolean
  isDelete: boolean
  pageNum: number
  pageSize: number
}

export async function getSurveyListData(query: Partial<SurveyQuery> = {}): Promise<Res> {
  const res = await service.get('/survey', { params: query })

  return res
}

export async function createNewSurvey(): Promise<Res> {
  const res = await service.post('/survey')

  return res
}

export async function getSurveyDetailData(id: string): Promise<Res> {
  const res = await service.get(`/survey/${id}`)

  return res
}

export async function updateSurveyData(id: string, query: Partial<SurveyQuery> = {}): Promise<Res> {
  const res = await service.patch(`/survey/update/${id}`, query)

  return res
}

export async function duplicateSurveyData(id: string): Promise<Res> {
  const res = await service.post(`/survey/duplicate/${id}`)

  return res
}

export async function deleteSurveyData(id: string): Promise<Res> {
  const res = await service.delete(`/survey/delete/${id}`)

  return res
}
