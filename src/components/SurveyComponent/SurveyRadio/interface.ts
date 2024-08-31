export type OptionsType = {
  label: string
  value: string
}

export type SurveyRadioProps = {
  title?: string
  options?: OptionsType[]
  defaultValue?: string
  isVertical?: boolean
  lock?: boolean
  onChange?: (prop: SurveyRadioProps) => void
}

export const defaultRadioProps: SurveyRadioProps = {
  title: '单选框',
  options: [
    { label: '单选框1', value: '单选框1' },
    { label: '单选框2', value: '单选框2' },
  ],
  isVertical: false,
  defaultValue: '单选框1',
}
