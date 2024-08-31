import SurveyRadio from './component'
import { defaultRadioProps } from './interface'
import PropView from './PropView'

export * from './interface'

export default {
  title: '单选框',
  type: 'surveyRadio',
  Component: SurveyRadio,
  PropView: PropView,
  defaultProps: defaultRadioProps,
}
