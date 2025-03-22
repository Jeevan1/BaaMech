import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home';
import PageNotFoundLayout from './layouts/PageNotFoundLayout';
import MainLayout from './layouts/MainLayout';

import './styles/App.css';
import TermsPage from './pages/terms';
import PrivacyPage from './pages/privacy';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/terms',
          element: <TermsPage />,
        },
        {
          path: '/privacy',
          element: <PrivacyPage />,
        },
      ],
    },
    {
      path: '*',
      element: <PageNotFoundLayout />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
