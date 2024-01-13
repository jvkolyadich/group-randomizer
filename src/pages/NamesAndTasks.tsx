import React from 'react'
import Card from '../components/Card'
import Title from '../components/Title'
import GroupList from '../components/GroupList'
import Button from '../components/form/Button'

interface Props {
  page: number
  setPage: (page: number) => void
}

const NamesAndTasks = ({
  page,
  setPage,
}: Props) => {
  return (
    <Card>
      <Title>Names & Tasks</Title>
      <GroupList />
      <Button
        child="Generate randomized list"
        onClick={() => setPage(page + 1)}
        addClassName='w-full mt-3'
      />
    </Card>
  )
}

export default NamesAndTasks