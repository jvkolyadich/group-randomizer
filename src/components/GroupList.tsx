import React, { useContext } from 'react'
import { FormContext } from './context/FormContext'
import GroupListItem from './GroupListItem'
import Button from './form/Button'

const GroupList = () => {
  const { formState, formDispatch } = useContext(FormContext)
  return (
    <div className='w-full flex flex-col items-center'>
      {formState.groupList.map(groupListItem => (
        <GroupListItem
          key={groupListItem.id}
          name={groupListItem.name}
          setName={(name: string) => formDispatch({
            type: 'update-group-list-item-name',
            payload: { id: groupListItem.id, name }
          })}
          task={groupListItem.task}
          setTask={(task: string) => formDispatch({
            type: 'update-group-list-item-task',
            payload: { id: groupListItem.id, task }
          })}
          onDelete={() => formDispatch({
            type: 'delete-group-list-item',
            payload: groupListItem.id
          })}
        />
      ))}
      <div className='text-xl mt-4'>
        Total: {formState.groupList.length} row{formState.groupList.length === 1 ? "" : "s"}
      </div>
      <Button
        child='Add row'
        addClassName='w-full mt-3'
        onClick={() => formDispatch({ type: 'add-group-list-item'})}
      />
    </div>
  )
}

export default GroupList