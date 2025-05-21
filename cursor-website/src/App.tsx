import Loading from '@components/loading'
import routes from '@router/index'

import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const RouteContainer: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {routes.map((route, index) =>
          route.children ? (
            <Route key={index} path={route.path} element={route.element}>
              {route.children.map((child, idx) => (
                <Route key={idx} path={child.path} element={child.element} />
              ))}
            </Route>
          ) : (
            <Route key={index} path={route.path} element={route.element} />
          )
        )}
      </Routes>
    </Suspense>
  )
}
function App() {
  return (
    <BrowserRouter>
      <RouteContainer />
    </BrowserRouter>
  )
}

export default App
