import { useRef, useState } from 'react'
import EventList from './components/EventList/EventList';
import EventSearcher from './components/EventSearcher/EventSearcher';
import SignUpForm from './components/Form/SignUpForm';

function App() {
  const [searchTerm, setSearchTerm] = useState('')  
  const inputRef = useRef()
  return (
    <>
      <SignUpForm />
      <EventSearcher 
        onSearch={setSearchTerm}
        ref={inputRef}/>
      <EventList
        searchTerm={searchTerm}/>
    </>
  )
}

export default App
