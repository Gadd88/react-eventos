import { useRef, useState } from 'react'
import EventList from './components/EventList/EventList';
import EventSearcher from './components/EventSearcher/EventSearcher';
import SignUpForm from './components/Form/SignUpForm';

function App() {
  const [searchTerm, setSearchTerm] = useState('')  
  const inputRef = useRef()
  return (
    <div
      style={{
        width: '100%',
        
      }}>
      {/* <SignUpForm /> */}
      <EventSearcher 
        onSearch={setSearchTerm}
        ref={inputRef}/>
      <EventList
        searchTerm={searchTerm}/>
    </div>
  )
}

export default App
