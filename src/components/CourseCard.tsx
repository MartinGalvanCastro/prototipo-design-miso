import type { ReactElement } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';

export interface CourseData {
	id: string;
	title: string;
	description: string;
	imageUrl: string;
	isComingSoon?: boolean;
	detailedDescription?: string;
	obligatoryCourses?: string[];
	electiveCourses?: string[];
}

interface CourseCardProps {
	course: CourseData;
	onViewDetails?: (courseId: string) => void;
}

function CourseCard({ course, onViewDetails }: CourseCardProps): ReactElement {
	const handleViewDetails = (): void => {
		onViewDetails?.(course.id);
	};

	return (
		<Card
			className={`
				group relative h-[450px] w-[320px]
				bg-card border-border shadow-lg hover:shadow-xl
				transition-all duration-300 ease-in-out
				${course.isComingSoon
			? 'opacity-75 hover:scale-100 hover:translate-y-0'
			: 'hover:scale-105 hover:-translate-y-2'
		}
				overflow-hidden rounded-xl flex flex-col
			`}
		>
			{/* Image Section */}
			<CardHeader className="p-0 h-[180px] flex-shrink-0">
				<div className="relative h-full w-full overflow-hidden rounded-t-xl">
					<img
						src={course.imageUrl}
						alt={course.title}
						className={`h-full w-full object-cover transition-transform duration-300 ${
							course.isComingSoon
								? 'grayscale group-hover:grayscale-0'
								: 'group-hover:scale-110'
						}`}
					/>
					{course.isComingSoon && (
						<div className="absolute top-2 right-2 bg-muted/90 text-muted-foreground px-2 py-1 rounded-md text-xs font-medium">
							Próximamente
						</div>
					)}
				</div>
			</CardHeader>

			{/* Content Section */}
			<CardContent className="p-6 h-[270px] flex flex-col">
				{/* Content área con más espacio */}
				<div className="flex-1 space-y-3 mb-6">
					<h3 className="text-lg font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors leading-tight">
						{course.title}
					</h3>
					<p className="text-sm text-muted-foreground line-clamp-4 leading-relaxed">
						{course.description}
					</p>
				</div>

				{/* Footer Button - Siempre visible */}
				<div className="flex-shrink-0">
					{course.isComingSoon ? (
						<Button
							variant="outline"
							size="sm"
							disabled
							className="w-full border-muted text-muted-foreground cursor-not-allowed opacity-60"
						>
							<span>Próximamente</span>
						</Button>
					) : (
						<Button
							variant="outline"
							size="sm"
							onClick={handleViewDetails}
							className="w-full group/button border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
						>
							<span className="mr-2">Ver detalles</span>
							<ChevronRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
						</Button>
					)}
				</div>
			</CardContent>
		</Card>
	);
}

export default CourseCard;
