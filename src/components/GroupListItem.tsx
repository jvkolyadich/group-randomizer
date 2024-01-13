import React from 'react'
import Input from './form/Input'
import Button from './form/Button'
import { ReactComponent as TrashIcon } from '../assets/icons/trash.svg'

interface Props {
  name: string
  setName: (name: string) => void
  task: string
  setTask: (task: string) => void
  onDelete: () => void
  loading?: boolean
}

const GroupListItem = ({
  name,
  setName,
  task,
  setTask,
  onDelete,
  loading = false,
}: Props) => {
  return (
    <div className="relative w-full flex flex-col md:flex-row items-end mt-3 bg-gray-100 p-2 rounded border border-gray-200">
      <Input
        label='Name'
        addClassName='mb-2 md:mr-3 md:mb-0'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Input
        label='Task'
        addClassName='mb-2 md:mr-3 md:mb-0'
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <Button
        child={<TrashIcon className='text-gray-400 hover:opacity-80 active:opacity-70 w-5 h-5'/>}
        onClick={onDelete}
        addClassName="absolute top-0 right-0 p-0 bg-transparent"
        disabled={loading}
      />
    </div>
  )
}

export default GroupListItem