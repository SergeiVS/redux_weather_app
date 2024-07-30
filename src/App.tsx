import { Route, Routes } from "react-router-dom"

import Layout from "./components/Layout/Layout"

import { PagesPaths } from "./components/Layout/types"

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={PagesPaths.HOME}></Route>
          <Route path={PagesPaths.WEATHERS}></Route>
          <Route path="*" element="Page not found" />
        </Routes>
      </Layout>
    </>
  )
}

export default App
