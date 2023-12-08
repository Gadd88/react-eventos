import { useEffect, useState } from 'react'
import EventList from './components/EventList/EventList';
import EventSearcher from './components/EventSearcher/EventSearcher';
import SignUpForm from './components/Form/SignUpForm';
import { API_KEY } from './dataApi/data'

function App() {
  const [searchTerm, setSearchTerm] = useState('')  
  
  return (
    <>
      <SignUpForm />
      <EventSearcher 
        onSearch={setSearchTerm}/>
      <EventList
        searchTerm={searchTerm}/>
    </>
  )
}

export default App
