export type TitleProps = {
  title?: string
  level?: 1 | 2 | 3
  isCenter?: boolean
}

export const defaultTitleProps: TitleProps = {
  title: '标题',
  level: 1,
  isCenter: true,
}
