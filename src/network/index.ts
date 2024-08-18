import service from './service'

export type Res = {
  [key: string]: any
}

export type ErrorCode = number | undefined

export async function getSurveyListData(): Promise<Res> {
  const res = await service.get('/survey')

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
