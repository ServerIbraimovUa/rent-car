import { Route, Routes } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Favorite from './pages/Favorite';
import HomePage from './pages/HomePage';
import Layout from './components/Layout/Layout';

const appRoutes = [
  { path: '/', element: <HomePage /> },
  {
    path: '/catalog',
    element: <Catalog />,
  },
  {
    path: '/favorite',
    element: <Favorite />,
  },
];

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {appRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
