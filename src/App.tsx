import React, { useState } from 'react'
import { FormProvider } from './components/context/FormContext'
import NamesAndTasks from './pages/NamesAndTasks'
import GenerateRandomizedList from './pages/GenerateRandomizedList'

const App = () => {
  const [page, setPage] = useState(1)

  return (
    <div className='w-full h-full bg-gray-300 flex justify-center overflow-auto'>
      <FormProvider>
        {page === 1 ? (
          <NamesAndTasks page={page} setPage={setPage} />
        ) : page === 2 ? (
          <GenerateRandomizedList page={page} setPage={setPage} />
        ) : <div>Invalid Page</div>}
      </FormProvider>
    </div>
  )
}

export default App
