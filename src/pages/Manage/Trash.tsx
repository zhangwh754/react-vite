import { FC } from 'react'
import { Table, Tag, Typography } from 'antd'
import type { TableColumnsType } from 'antd'
import styles from './style.module.scss'
import SearchInput from '@/components/SearchInput'
import getLoadingSurveyListData from '@/hooks/getLoadingSurveyListData'
import LoadingIndicator from '@/components/LoadingIndicator'
import CustomPagination from '@/components/CustomPagination'

const { Title } = Typography

type PropTypes = {}

const App: FC<PropTypes> = () => {
  const { surveyList, total, loading } = getLoadingSurveyListData({ isDelete: true })

  const columns: TableColumnsType = [
    {
      width: '600px',
      title: '问卷名称',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '是否发布',
      dataIndex: 'isPublish',
      key: 'isPublish',
      render(isPublish: boolean) {
        return isPublish ? <Tag color="green">已发布</Tag> : <Tag color="purple">未发布</Tag>
      },
    },
    {
      title: '是否收藏',
      dataIndex: 'isStar',
      key: 'isStar',
      render(isStar: boolean) {
        return isStar ? <Tag color="orange">已收藏</Tag> : <Tag>未收藏</Tag>
      },
    },
    {
      title: '答卷人数',
      dataIndex: 'answerCount',
      key: 'answerCount',
      render(answerCount: number) {
        return answerCount ? answerCount + '人' : '-'
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
  ].map(item => {
    return { align: 'center', ...item }
  })

  return (
    <>
      <div className={styles['list-container']}>
        <div className={styles['list-header']}>
          <Title level={2}>回收站</Title>
          <SearchInput />
        </div>
        <LoadingIndicator full loading={loading} empty={surveyList.length == 0} />

        <Table pagination={false} dataSource={surveyList} columns={columns}></Table>

        <CustomPagination total={total} />
      </div>
    </>
  )
}

export default App
