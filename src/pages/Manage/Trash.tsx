import { FC, useState } from 'react'
import { Button, message, Space, Table, Tag, Typography } from 'antd'
import type { TableColumnsType } from 'antd'
import styles from './style.module.scss'
import SearchInput from '@/components/SearchInput'
import getLoadingSurveyListData from '@/hooks/getLoadingSurveyListData'
import LoadingIndicator from '@/components/LoadingIndicator'
import CustomPagination from '@/components/CustomPagination'
import { TableRowSelection } from 'antd/es/table/interface'
import { updateSurveyData, deleteSurveyData } from '@/network'
import { useRequest } from 'ahooks'

const { Title } = Typography

type PropTypes = {}

const App: FC<PropTypes> = () => {
  const { surveyList, total, loading, refresh } = getLoadingSurveyListData({ isDelete: true })

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

  // 多选
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection: TableRowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }

  // 恢复逻辑
  const { run: restore, loading: storeLoading } = useRequest(
    async () => {
      for await (const key of selectedRowKeys) {
        await updateSurveyData(key as string, { isDelete: false })
      }
    },
    {
      manual: true,
      onSuccess() {
        message.success('恢复成功')
        setSelectedRowKeys([])
        refresh()
      },
    }
  )

  // 删除逻辑
  const { run: remove, loading: deleteLoading } = useRequest(
    async () => {
      for await (const key of selectedRowKeys) {
        await deleteSurveyData(key as string)
      }
    },
    {
      manual: true,
      onSuccess() {
        message.success('删除成功')
        setSelectedRowKeys([])
        refresh()
      },
    }
  )

  return (
    <>
      <div className={styles['list-container']}>
        <div className={styles['list-header']}>
          <Title level={2}>回收站</Title>
          <SearchInput />
        </div>
        <LoadingIndicator full loading={loading} empty={surveyList.length == 0} />

        <Space style={{ marginBottom: '12px' }}>
          <Button disabled={storeLoading} type="primary" onClick={restore}>
            批量恢复
          </Button>
          <Button disabled={deleteLoading} danger type="default" onClick={remove}>
            批量删除
          </Button>
        </Space>

        <Table
          rowKey="id"
          rowSelection={rowSelection}
          pagination={false}
          dataSource={surveyList}
          columns={columns}
        ></Table>

        <CustomPagination total={total} />
      </div>
    </>
  )
}

export default App
