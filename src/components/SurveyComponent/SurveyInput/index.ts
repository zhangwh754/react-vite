import SurveyInput from './component'
import { defaultInputProps } from './interface'
import PropView from './PropView'

export * from './interface'

export default {
  title: '输入框',
  type: 'surveyInput',
  Component: SurveyInput,
  PropView: PropView,
  defaultProps: defaultInputProps,
}
