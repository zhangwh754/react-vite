import SurveyInfo from './component'
import { defaultInfoProps } from './interface'
import PropView from './PropView'

export * from './interface'

export default {
  title: '标题',
  type: 'surveyInfo',
  Component: SurveyInfo,
  PropView: PropView,
  defaultProps: defaultInfoProps,
}
