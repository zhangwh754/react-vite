export type SurveyInfoProps = {
  title?: string
  isCenter?: boolean
  desc?: string
  lock?: boolean
  onChange?: (prop: SurveyInfoProps) => void
}

export const defaultInfoProps: SurveyInfoProps = {
  title: '问卷标题',
  isCenter: true,
  desc: '问卷描述...',
}
