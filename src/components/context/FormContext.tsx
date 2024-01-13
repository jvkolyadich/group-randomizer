import React, { createContext, useReducer } from 'react'

export interface GroupListItem {
  id: number
  name: string
  task: string
}

interface FormState {
  loading: boolean
  error?: any
  groupList: GroupListItem[]
  randomizedList?: string[][]
}

const initialFormState: FormState = {
  loading: false,
  groupList: [],
}

let currentGroupListItemId = 1

const reducer = (state: FormState, action: any) => {
  switch (action.type) {
    case 'add-group-list-item':
      return {
        ...state,
        groupList: [...state.groupList, {
          id: currentGroupListItemId++,
          name: '',
          task: '',
        }]
      }
    case 'update-group-list-item-name':
      return {
        ...state,
        groupList: state.groupList.map(groupListItem => {
          if (groupListItem.id !== action.payload.id) return groupListItem
          return {
            ...groupListItem,
            name: action.payload.name,
          }
        })
      }
    case 'update-group-list-item-task':
      return {
        ...state,
        groupList: state.groupList.map(groupListItem => {
          if (groupListItem.id !== action.payload.id) return groupListItem
          return {
            ...groupListItem,
            task: action.payload.task,
          }
        })
      }
    case 'delete-group-list-item':
      return {
        ...state,
        groupList: state.groupList.filter(groupListItem => groupListItem.id !== action.payload)
      }
    case 'set-randomized-list':
      return {
        ...state,
        randomizedList: action.payload
      }
  }
  return initialFormState
}

export const FormContext = createContext({
  formState: initialFormState,
  formDispatch: (action: any) => {},
})

interface Props {
  children: React.ReactNode
}

export const FormProvider = ({ children }: Props) => {

  const [formState, formDispatch] = useReducer(reducer, initialFormState)

  return (
    <FormContext.Provider
      value={{
        formState,
        formDispatch,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
