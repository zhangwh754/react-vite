import SurveyTitle from './component'
import { defaultTitleProps } from './interface'
import PropView from './PropView'

export * from './interface'

export default {
  title: '标题',
  type: 'surveyTitle',
  Component: SurveyTitle,
  PropView: PropView,
  defaultProps: defaultTitleProps,
}
