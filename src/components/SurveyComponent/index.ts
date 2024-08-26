import SurveyTitleConfig, { SurveyTitleProps } from './SurveyTitle'
import SurveyInputConfig, { SurveyInputProps } from './SurveyInput'
import { FC } from 'react'

export type ComponentPropsType = SurveyTitleProps | SurveyInputProps

export type ComponentConfigType = {
  title: string
  type: string
  component: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
}

export const componentConfig: ComponentConfigType[] = [SurveyTitleConfig, SurveyInputConfig]

/**
 * @description: 通过type查找对应的组件config
 * @param {string} type
 */
export const getComponentConfigByType = (type: string) => {
  return componentConfig.find(item => item.type === type)
}
