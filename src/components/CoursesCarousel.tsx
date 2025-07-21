import type { ReactElement } from 'react';
import CourseCard, { type CourseData } from './CourseCard';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

interface CoursesCarouselProps {
	courses: CourseData[];
	onViewDetails?: (courseId: string) => void;
}

function CoursesCarousel({ 
	courses, 
	onViewDetails
}: CoursesCarouselProps): ReactElement {
	// Dividir cursos en grupos de 6 (2 filas x 3 columnas)
	const coursesPerSlide = 6;
	const slides = [];
	
	for (let i = 0; i < courses.length; i += coursesPerSlide) {
		slides.push(courses.slice(i, i + coursesPerSlide));
	}

	return (
		<div className="w-full max-w-7xl mx-auto px-4 animate-in fade-in-0 duration-700">
			<Carousel 
				opts={{
					align: 'start',
					loop: true,
				}}
				className="w-full"
			>
				<CarouselContent>
					{slides.map((slideGroup, slideIndex) => (
						<CarouselItem key={slideIndex}>
							<div className="grid grid-cols-3 grid-rows-2 gap-8 justify-items-center py-4">
								{slideGroup.map((course, courseIndex) => (
									<div 
										key={course.id} 
										className="flex justify-center animate-in slide-in-from-bottom-4 duration-500"
										style={{ animationDelay: `${courseIndex * 100}ms` }}
									>
										<CourseCard
											course={course}
											onViewDetails={onViewDetails}
										/>
									</div>
								))}
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="-left-12 transition-all duration-300 hover:scale-110" />
				<CarouselNext className="-right-12 transition-all duration-300 hover:scale-110" />
			</Carousel>

			{/* Course counter */}
			<div className="text-center mt-6 text-sm text-muted-foreground animate-in slide-in-from-bottom-2 duration-500 delay-300">
				Total de {courses.length} cursos disponibles
			</div>
		</div>
	);
}

export default CoursesCarousel;
