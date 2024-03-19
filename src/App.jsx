import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Resources from './components/Resources'

function App() {
 
  return (
    <Layout>
      <Routes>
        <Route index element={<Resources page="html"/>}/>
        <Route path="html" element={<Resources page="html"/>} />
        <Route path="css" element={<Resources page="css"/>} />
        <Route path="javascript" element={<Resources page="javascript"/>} />
        <Route path="react" element={<Resources page="react"/>} />
        <Route path="sanity" element={<Resources page="headless-cms"/>} />
      </Routes>
    </Layout>
  )
}

export default App
