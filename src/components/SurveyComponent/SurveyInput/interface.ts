export type SurveyInputProps = {
  title?: string
  placeholder?: string
  onChange?: (prop: SurveyInputProps) => void
}

export const defaultInputProps: SurveyInputProps = {
  title: '标题',
  placeholder: '请输入',
}
