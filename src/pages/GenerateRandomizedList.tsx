import React, { useCallback, useContext } from 'react'
import Card from '../components/Card'
import Title from '../components/Title'
import Button from '../components/form/Button'
import { FormContext } from '../components/context/FormContext'
import Table from '../components/table/Table'
import Header from '../components/table/Header'
import Row from '../components/table/Row'
import Data from '../components/table/Data'

interface Props {
  page: number
  setPage: (page: number) => void
}

const GenerateRandomizedList = ({
  page,
  setPage,
}: Props) => {
  const { formState, formDispatch } = useContext(FormContext)

  const generateList = useCallback(() => {
    const names: string[] = []
    const tasks: string[] = []
    formState.groupList.forEach(group => {
      names.push(group.name)
      tasks.push(group.task)
    })

    const randomNames: string[][] = [[]]
    while (names.length > 1) {
      const randomIndex = Math.floor(Math.random() * names.length)
      randomNames[0].push(names.splice(randomIndex, 1)[0])
    }
    randomNames[0].push(names[0])

    const offsets: number[] = randomNames[0].map((_, i) => i)
    offsets.splice(0, 1)

    const randomOffsets: number[] = []
    while (offsets.length > 1) {
      const randomIndex = Math.floor(Math.random() * offsets.length)
      randomOffsets.push(offsets.splice(randomIndex, 1)[0])
    }
    randomOffsets.push(offsets[0])

    randomOffsets.forEach((offset) => {
      const originalNames = randomNames[0].map(name => name)
      const offsettedNames = originalNames.splice(0, offset)
      randomNames.push([...originalNames, ...offsettedNames])
    })
    
    formDispatch({
      type: 'set-randomized-list',
      payload: [tasks, ...randomNames],
    })
  }, [formDispatch, formState.groupList])

  const downloadAsCsv = useCallback(() => {
    if (!formState.randomizedList) return
    const headers = formState.randomizedList[0]
    const csvify = (string: string) => `"${string.replaceAll('"', '""')}"`
    const data = formState.randomizedList.filter((_, i) => i !== 0).map((row) => (
      row.map(csvify)
    ))
    const csvdata = [headers, ...data].join('\n')
    const filename = `Randomized List ${
      new Date().toLocaleString().replaceAll("/", "-").replaceAll(":", "-").replaceAll(",", "")
    }.csv`
    const element = document.createElement('a')
    element.setAttribute(
      'href',
      'data:text/csv;charset=utf-8,' + encodeURIComponent(csvdata)
    )
    element.setAttribute('download', filename)
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }, [formState.randomizedList])

  return (
    <Card>
      <Title>Generate Randomized List</Title>
      <Button
        child={!!formState.randomizedList ? "Regenerate list" : "Generate list"}
        onClick={generateList}
        addClassName='w-full mt-4'
        disabled={formState.loading || (formState.groupList.length < 2)}
      />
      <Button
        child="Back to names & tasks"
        onClick={() => setPage(page - 1)}
        addClassName='w-full mt-3'
        disabled={formState.loading}
      />
      {formState.randomizedList && (
        <Button
          child="Download list as CSV"
          onClick={downloadAsCsv}
          addClassName='w-full mt-3'
          disabled={formState.loading}
        />
      )}
      {formState.randomizedList && (
        <div className='w-full overflow-x-auto mt-4'>
          <Table
            header={(
              <Row addClassName="bg-gray-100">
                {formState.randomizedList[0].map((task) => (
                  <Header>{task}</Header>
                ))}
              </Row>
            )}
            body={
              formState.randomizedList.filter((_, i) => i !== 0).map((row) => (
                <Row>
                  {row.map(name => <Data>{name}</Data>)}
                </Row>
              ))
            }
          />
        </div>
      )}
    </Card>
  )
}

export default GenerateRandomizedList