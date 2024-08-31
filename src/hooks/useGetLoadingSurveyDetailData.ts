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

      let selectedComponentId

      if (componentsList.length && componentsList.length > 0) {
        selectedComponentId = componentsList[0].id
      }

      dispatch(
        setComponentsStateReducer({
          componentsList,
          selectedComponentId,
          copiedComponentData: null,
        })
      )
    },
  })
  const dispatch = useDispatch()

  useEffect(() => {
    run(id)
  }, [id])

  return { loading, error }
}
