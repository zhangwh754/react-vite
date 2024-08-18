import service from './service'

export type Res = {
  [key: string]: any
}

export type ErrorCode = number | undefined

export async function getSurveyListData(): Promise<Res> {
  const res = await service.get('/survey')

  return res
}
