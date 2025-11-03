import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Manga } from './pages/Manga.jsx'
import { Browse } from './pages/Browse.jsx'
import { Provider } from 'react-redux'
import bookmarkStore from './store/bookmarkStore.js'
import { Bookmark } from './pages/Bookmark.jsx'
import { Author } from './pages/Author.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }, 
  {
    path: '/manga/:mangaId',
    element: <Manga />
  },
  {
    path: '/browse/:query?',
    element: <Browse />
  },
  {
    path: '/bookmark',
    element: <Bookmark />
  },
  {
    path: '/author/:authorId',
    element: <Author />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={bookmarkStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
