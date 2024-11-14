import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ThemeProvider from './context/ThemeProvider.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/AppLayout.tsx'
import About from './pages/About.tsx'
import Projects from './pages/Projects.tsx'
import Contact from './pages/Contact.tsx'
import { CookiesProvider } from 'react-cookie'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const router = createBrowserRouter([
   {
      path: '/',
      element: <AppLayout />,
      children: [
         {
            index: true,
            element: <App />,
         },
         {
            path: "about",
            element: <About />,
         },
         {
            path: "projects",
            element: <Projects />,
         },
         {
            path: "contact",
            element: <Contact />,
         },
      ],
      // loader: () => import('./App.tsx'),
   },
   {
      path: '*',
      element: <h1>Not Found</h1>,
   },
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<CookiesProvider defaultSetOptions={{ path: '/' }}>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <ToastContainer />
				<RouterProvider router={router} />
			</ThemeProvider>
		</CookiesProvider>
	</StrictMode>,
)
