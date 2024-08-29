import SurveyTitleConfig, { SurveyTitleProps } from './SurveyTitle'
import SurveyInputConfig, { SurveyInputProps } from './SurveyInput'
import { FC } from 'react'

export type ComponentPropsType = SurveyTitleProps | SurveyInputProps

export type ComponentConfigType = {
  title: string
  type: string
  Component: FC<ComponentPropsType>
  PropView: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
}

export const componentConfig: ComponentConfigType[] = [SurveyTitleConfig, SurveyInputConfig]

/**
 * @description: 通过type查找对应的组件config
 * @param {string} type
 */
export const getComponentConfigByType = (type: string) => {
  return componentConfig.find(item => {
    return item.type === type
  })!
}

export const componentListSortByType = [
  {
    id: '1',
    type: 'display',
    title: '展示组件',
    components: [SurveyTitleConfig],
  },
  {
    id: '2',
    type: 'input',
    title: '输入组件',
    components: [SurveyInputConfig],
  },
]
