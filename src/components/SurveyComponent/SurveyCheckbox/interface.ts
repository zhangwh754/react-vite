export type OptionsType = {
  label: string
  value: string
  checked: boolean
}

export type SurveyCheckboxProps = {
  title?: string
  options?: OptionsType[]
  isVertical?: boolean
  lock?: boolean
  onChange?: (prop: SurveyCheckboxProps) => void
}

export const defaultCheckboxProps: SurveyCheckboxProps = {
  title: '复选框',
  options: [
    { label: '复选框1', value: '复选框1', checked: true },
    { label: '复选框2', value: '复选框2', checked: true },
  ],
  isVertical: false,
}
