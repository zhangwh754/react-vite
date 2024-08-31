export type SurveyParagraphProps = {
  content?: string
  lock?: boolean
  onChange?: (prop: SurveyParagraphProps) => void
}

export const defaultParagraphProps: SurveyParagraphProps = {
  content: '内容',
}
