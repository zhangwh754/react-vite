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
}

export async function getSurveyListData(query: Partial<SurveyQuery> = {}): Promise<Res> {
  const res = await service.get('/survey', { params: query })

  return res
}

export async function createNewSurvey(): Promise<Res> {
  const res = await service.post('/survey')

  return res
}

export async function getSurveyDetailData({ id = '0' } = {}): Promise<Res> {
  const res = await service.get(`/survey/${id}`)

  return res
}
