import type { ReactElement } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CoursesCarousel from '@/components/CoursesCarousel';
import CourseDetailModal from '@/components/CourseDetailModal';
import { sampleCourses } from '@/data/sampleCourses';
import type { CourseData } from '@/components/CourseCard';

function Home(): ReactElement {
	const navigate = useNavigate();
	const [selectedCourse, setSelectedCourse] = useState<CourseData | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleViewDetails = (courseId: string): void => {
		const course = sampleCourses.find(c => c.id === courseId);
		if (course) {
			setSelectedCourse(course);
			setIsModalOpen(true);
		}
	};

	const handleCloseModal = (): void => {
		setIsModalOpen(false);
		setSelectedCourse(null);
	};

	const handleChooseCourse = (courseId: string): void => {
		// Redirigir a la página de selección de cursos
		navigate(`/course-selection/${courseId}`);
		// Cerrar modal después de la navegación
		handleCloseModal();
	};

	return (
		<div className="max-w-7xl mx-auto px-6 py-8">
			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold text-foreground mb-4">
					Selecciona tu ruta avanzada
				</h1>
				<p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
					Descubre cursos especializados diseñados para llevar tus habilidades al siguiente nivel.
					Encuentra la formación perfecta para tu carrera profesional.
				</p>
			</div>

			<CoursesCarousel
				courses={sampleCourses}
				onViewDetails={handleViewDetails}
			/>

			<CourseDetailModal
				course={selectedCourse}
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				onChoose={handleChooseCourse}
			/>
		</div>
	);
}

export default Home;
