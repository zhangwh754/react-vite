import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getSurveyDetailData } from '@/network'
import { useDispatch } from 'react-redux'
import { setComponentsStateReducer } from '@/store/component/componentReducer'

export default function useGetLoadingSurveyDetailData() {
  const { id } = useParams()
  const { error, loading, run } = useRequest(id => getSurveyDetailData(id), {
    manual: true,
    onSuccess(data) {
      const { componentsList } = data

      dispatch(setComponentsStateReducer({ componentsList, selectedComponentId: '' }))
    },
  })
  const dispatch = useDispatch()

  useEffect(() => {
    run(id)
  }, [id])

  return { loading, error }
}
