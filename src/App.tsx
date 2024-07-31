import { BrowserRouter, Route, Routes } from "react-router-dom"

import GlobalStyles from "styles/GlobalStyles"
import Layout from "components/Layout/Layout"
import 

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weathers" element={<Weathers />} />
            <Route path="*" element="Page Not Found!!!" />
          </Routes>
        </Layout>
        {/* <Lesson06 /> */}
      
      </BrowserRouter>
    </>
  )
}

export default App
