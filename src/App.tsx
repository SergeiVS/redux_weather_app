import { Route, Routes } from "react-router-dom"

import Layout from "./components/Layout/Layout"
import Home from "pages/Home/Home"
import Weathers from "pages/Weathers/Weathers"

import { PagesPaths } from "./components/Layout/types"

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={PagesPaths.HOME} element={<Home />}></Route>
          <Route path={PagesPaths.WEATHERS} element={<Weathers />}></Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
