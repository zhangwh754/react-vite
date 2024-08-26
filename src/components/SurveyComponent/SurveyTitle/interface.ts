export type SurveyTitleProps = {
  title?: string
  level?: 1 | 2 | 3
  isCenter?: boolean
}

export const defaultTitleProps: SurveyTitleProps = {
  title: '标题',
  level: 1,
  isCenter: true,
}
