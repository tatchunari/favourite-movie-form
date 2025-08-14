import { useState } from 'react'
import './App.css'
import Form from './pages/Form'
import Summary from './pages/Summary'

function App() {

  const [formData, setFormData] = useState(null);  
  const [page, setPage] = useState("form");

  return (
    <div>
      {page === 'form' && (
        <Form
        setFormData={(data) => {
          setFormData(data);
          setPage("summary")
        }}
        /> 
      )}

      {page === "summary" && formData && (
        <Summary 
        formData={formData}
        returnPage={() => setPage("form")}
        />
      )}
    </div>
  )
}

export default App
