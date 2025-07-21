import type { ReactElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';

const router = createBrowserRouter(routes);

function AppRouter(): ReactElement {
	return <RouterProvider router={router} />;
}

export default AppRouter;
