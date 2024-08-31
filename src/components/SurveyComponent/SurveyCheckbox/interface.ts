export type OptionsType = {
  label: string
  value: string
}

export type SurveyCheckboxProps = {
  title?: string
  options?: OptionsType[]
  defaultValue?: string[]
  isVertical?: boolean
  lock?: boolean
  onChange?: (prop: SurveyCheckboxProps) => void
}

export const defaultCheckboxProps: SurveyCheckboxProps = {
  title: '复选框',
  options: [
    { label: '复选框1', value: '复选框1' },
    { label: '复选框2', value: '复选框2' },
  ],
  isVertical: false,
  defaultValue: ['复选框1', '复选框2'],
}
