import type { ReactElement } from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Info } from 'lucide-react';
import { sampleCourses } from '@/data/sampleCourses';
import type { CourseData } from '@/components/CourseCard';

function CourseSelection(): ReactElement {
	const { courseId } = useParams<{ courseId: string }>();
	const navigate = useNavigate();
	const [course, setCourse] = useState<CourseData | null>(null);
	const [selectedElectives, setSelectedElectives] = useState<string[]>([]);

	useEffect(() => {
		if (courseId) {
			const foundCourse = sampleCourses.find(c => c.id === courseId);
			setCourse(foundCourse || null);
		}
	}, [courseId]);

	const handleElectiveToggle = (elective: string): void => {
		setSelectedElectives(prev => {
			if (prev.includes(elective)) {
				return prev.filter(e => e !== elective);
			} else if (prev.length < 2) {
				return [...prev, elective];
			}
			return prev;
		});
	};

	const handleContinue = (): void => {
		if (selectedElectives.length === 2 && course) {
			// Aquí podrías guardar la selección si lo necesitas
			navigate(`/route-loading/${course.id}`);
		}
	};

	if (!course) {
		return (
			<div className="max-w-4xl mx-auto px-6 py-8">
				<div className="text-center">
					<h1 className="text-2xl font-bold text-foreground mb-4">Curso no encontrado</h1>
					<Button onClick={() => navigate('/')} variant="outline">
						Volver al inicio
					</Button>
				</div>
			</div>
		);
	}

	const obligatoryCourses = course.obligatoryCourses || [];
	const electiveCourses = course.electiveCourses || [];

	return (
		<div className="max-w-4xl mx-auto px-6 py-8">
			{/* Header */}
			<div className="text-center mb-8">
				<h1 className="text-3xl font-bold text-foreground mb-4">
					Personaliza tu ruta en {course.title}
				</h1>
				<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
					Selecciona 2 cursos electivos de tu preferencia para completar tu ruta de aprendizaje personalizada.
				</p>
			</div>

			{/* Friendly Reminder */}
			<div className="flex justify-center mb-8">
				<Card className="w-full max-w-xl bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
					<CardContent className="py-2 px-6">
						<div className="flex items-center gap-3 min-h-0">
							<div className="flex items-center justify-center h-7 w-7">
								<Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
							</div>
							<div className="flex-1">
								<h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-0.5">
									¡Recuerda!
								</h3>
								<p className="text-blue-800 dark:text-blue-200 text-sm leading-tight">
									Estos son los cursos a los cuales siempre vas a tener acceso. Pero recuerda que tienes 2 meses incluidos para explorar toda la plataforma.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Cursos Obligatorios */}
				<div className="space-y-4">
					<div className="flex items-center gap-3 mb-4">
						<Badge variant="destructive" className="bg-green-600 hover:bg-green-700 text-white">
							Cursos Obligatorios
						</Badge>
						<span className="text-sm text-muted-foreground">
							({obligatoryCourses.length} cursos)
						</span>
					</div>
					<div className="space-y-3">
						{obligatoryCourses.map((obligatory, index) => (
							<Card key={index} className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
								<CardContent className="p-4">
									<div className="flex items-center gap-3">
										<div className="h-6 w-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
											<Check className="h-4 w-4 text-white" />
										</div>
										<p className="font-medium text-green-900 dark:text-green-100">
											{obligatory}
										</p>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>

				{/* Cursos Electivos */}
				<div className="space-y-4">
					<div className="flex items-center gap-3 mb-4">
						<Badge variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white">
							Cursos Electivos
						</Badge>
						<span className="text-sm text-muted-foreground">
							(Selecciona 2 de {electiveCourses.length})
						</span>
					</div>
					<div className="space-y-3">
						{electiveCourses.map((elective, index) => {
							const isSelected = selectedElectives.includes(elective);
							const canSelect = selectedElectives.length < 2 || isSelected;

							return (
								<Card
									key={index}
									className={`cursor-pointer transition-all duration-200 ${
										isSelected
											? 'bg-blue-50 dark:bg-blue-950/20 border-blue-500 shadow-md'
											: canSelect
												? 'hover:bg-gray-50 dark:hover:bg-gray-800 border-border'
												: 'opacity-50 cursor-not-allowed border-border'
									}`}
									onClick={() => canSelect && handleElectiveToggle(elective)}
								>
									<CardContent className="p-4">
										<div className="flex items-center gap-3">
											<div className={`h-6 w-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
												isSelected
													? 'bg-blue-600 border-blue-600'
													: 'border-gray-300 dark:border-gray-600'
											}`}>
												{isSelected && <Check className="h-4 w-4 text-white" />}
											</div>
											<p className={`font-medium ${
												isSelected
													? 'text-blue-900 dark:text-blue-100'
													: 'text-foreground'
											}`}>
												{elective}
											</p>
										</div>
									</CardContent>
								</Card>
							);
						})}
					</div>
				</div>
			</div>

			{/* Progress and Continue Button */}
			<div className="mt-8 space-y-4">


				<div className="flex justify-center gap-4">
					<Button
						variant="outline"
						onClick={() => navigate('/')}
					>
						Cancelar
					</Button>
					<Button
						onClick={handleContinue}
						disabled={selectedElectives.length !== 2}
						className="bg-green-600 hover:bg-green-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
					>
						Continuar con mi ruta ({selectedElectives.length}/2)
					</Button>
				</div>
			</div>
		</div>
	);
}

export default CourseSelection;
