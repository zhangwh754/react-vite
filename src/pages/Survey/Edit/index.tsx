import React, { FC } from 'react'
import getLoadingSurveyDetailData from '@/hooks/getLoadingSurveyDetailData'
import LoadingIndicator from '@/components/LoadingIndicator'

type PropTypes = {}

const Edit: FC<PropTypes> = () => {
  const { surveyDetail = {}, loading } = getLoadingSurveyDetailData()

  const { id, title } = surveyDetail

  return (
    <>
      <div>Edit Page</div>

      <LoadingIndicator loading={loading} />

      {!loading && (
        <>
          <p>id: {id}</p>
          <p>title: {title}</p>
        </>
      )}
    </>
  )
}

export default Edit
