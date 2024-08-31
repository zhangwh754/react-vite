import SurveyTitle from './component'
import { defaultParagraphProps } from './interface'
import PropView from './PropView'

export * from './interface'

export default {
  title: '段落',
  type: 'surveyParagraph',
  Component: SurveyTitle,
  PropView: PropView,
  defaultProps: defaultParagraphProps,
}
