import type { RouteObject } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import CompleteRegistration from '../pages/CompleteRegistration';
import About from '../pages/About';
import Contact from '../pages/Contact';
import CourseSelection from '../pages/CourseSelection';
import RouteLoading from '../pages/RouteLoading';

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <CompleteRegistration />,
			},
			{
				path: 'home',
				element: <Home />,
			},
			{
				path: 'registro',
				element: <CompleteRegistration />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
			{
				path: 'course-selection/:courseId',
				element: <CourseSelection />,
			},
			{
				path: 'route-loading/:courseId',
				element: <RouteLoading />,
			},
		],
	},
];
