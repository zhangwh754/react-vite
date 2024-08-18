import service from './service'

export async function getSurveyListData() {
  const res = await service.get('/survey')

  return res as any
}
