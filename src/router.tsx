import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Intelsy } from '@/Intelsy/Intelsy'
import { PrivacyPolicy } from '@/PrivacyPolicy/PrivacyPolicy'

const publicRoutes: RouteObject[] = [
  {
    element: <Intelsy />,
    path: '/',
  },
  {
    element: <PrivacyPolicy />,
    path: '/privacy-policy',
  },
]

// const privateRoutes: RouteObject[] = [
//   {
//     element: <div>hello</div>,
//     path: '/',
//   },
// ]

// function PrivateRoutes() {
//   const isAuthenticated = false
//
//   return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
// }

const router = createBrowserRouter([
  // {
  //   children: privateRoutes,
  //   element: <PrivateRoutes />,
  // },
  ...publicRoutes,
])

export function Router() {
  return <RouterProvider router={router} />
}
