import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { YoutubeForm } from './react-hook-form/components/YoutubeForm.tsx'

let router = createBrowserRouter([{
  path: "/learn-rhf",
  Component: YoutubeForm,
},
{
  path: "/",
  Component: App,
}])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
