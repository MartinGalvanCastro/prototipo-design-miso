import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { sampleCourses } from '@/data/sampleCourses';

function RouteLoading(): ReactElement {
	const { courseId } = useParams<{ courseId: string }>();
	const [showWelcome, setShowWelcome] = useState(false);
	const [courseTitle, setCourseTitle] = useState('');
	const [courseImg, setCourseImg] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		const course = sampleCourses.find(c => c.id === courseId);
		setCourseTitle(course?.title || '');
		setCourseImg(course?.imageUrl || '');
		const timeout = setTimeout(() => {
			setShowWelcome(true);
		}, 1000 + Math.random() * 2000); // 1-3 segundos
		return () => {
			clearTimeout(timeout);
		};
	}, [courseId]);

	if (showWelcome) {
		return (
			<div className="flex flex-col items-center justify-center min-h-[60vh]">
				{courseImg && (
					<img src={courseImg} alt={courseTitle} className="mb-6 rounded-lg shadow-lg w-64 h-40 object-cover" />
				)}
				<h1 className="text-3xl font-bold text-foreground mb-6 text-center">
					Bienvenido a tu ruta avanzada en {courseTitle}
				</h1>
				<button
					className="mt-4 px-6 py-2 rounded bg-green-600 text-white hover:bg-green-700"
					onClick={() => navigate('/')}
				>
					Ir al inicio
				</button>
			</div>
		);
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-[60vh]">
			{courseImg && (
				<img src={courseImg} alt={courseTitle} className="mb-6 rounded-lg shadow-lg w-64 h-40 object-cover" />
			)}
			<div className="mb-6">
				<svg className="animate-spin h-12 w-12 text-green-600" viewBox="0 0 24 24">
					<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
					<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
				</svg>
			</div>
			<h2 className="text-2xl font-semibold text-foreground text-center">
				Estamos terminando de configurar tu ruta
			</h2>
		</div>
	);
}

export default RouteLoading;
