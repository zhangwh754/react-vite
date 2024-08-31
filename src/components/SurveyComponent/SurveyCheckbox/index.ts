import SurveyCheckbox from './component'
import { defaultCheckboxProps } from './interface'
import PropView from './PropView'

export * from './interface'

export default {
  title: '复选框',
  type: 'surveyCheckbox',
  Component: SurveyCheckbox,
  PropView: PropView,
  defaultProps: defaultCheckboxProps,
}
