// routes.ts
import React from 'react'

// components
const MainContent = React.lazy(() => import('@components/MainContent'))

// layouts
const Default = React.lazy(() => import('@layouts/default'))
const Pricing = React.lazy(() => import('@layouts/pricing'))
const Download = React.lazy(() => import('@layouts/download'))
const Dashboard = React.lazy(() => import('@layouts/dashboard'))

interface RouteType {
  path: string
  element: React.ReactNode
  children?: RouteType[]
}

const routes: RouteType[] = [
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '',
        element: <MainContent />
      },
      {
        path: '/download',
        element: <Download />
      },
      {
        path: '/pricing',
        element: <Pricing />
      }
    ]
  },
  {
    path: '/admin/dashboard',
    element: <Dashboard />
  }
]

export default routes
