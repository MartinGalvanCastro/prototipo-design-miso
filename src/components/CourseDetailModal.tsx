import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { CourseData } from './CourseCard';

interface CourseDetailModalProps {
	course: CourseData | null;
	isOpen: boolean;
	onClose: () => void;
	onChoose: (courseId: string) => void;
}

export default function CourseDetailModal({
	course,
	isOpen,
	onClose,
	onChoose
}: CourseDetailModalProps) {
	if (!course) return null;

	// Usar directamente los datos del curso
	const obligatorios = course.obligatoryCourses || [];
	const electivos = course.electiveCourses || [];

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="!max-w-5xl !max-h-[90vh] !overflow-y-auto !bg-slate-900 !border-slate-700 !text-white">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
					{/* Image Section - Left Column */}
					<div className="lg:col-span-1">
						<div className="relative h-96 lg:h-[500px] !bg-slate-800 rounded-lg overflow-hidden !border !border-slate-700">
							<img
								src={course.imageUrl}
								alt={course.title}
								className="w-full h-full object-cover opacity-80"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
						</div>
					</div>

					{/* Content Section - Right Column */}
					<div className="lg:col-span-1 space-y-6">
						{/* Title and Description */}
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<h1 className="!text-3xl !font-bold !text-white !m-0">{course.title}</h1>
								{course.isComingSoon && (
									<span className="text-sm bg-yellow-500/20 px-3 py-1 rounded-full text-yellow-300 border border-yellow-500/30">
										Próximamente
									</span>
								)}
							</div>
							<p className="!text-slate-300 !text-base !leading-relaxed !m-0">
								{course.detailedDescription || course.description}
							</p>
						</div>

						{/* Obligatorios and Electivos Sections */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{/* Obligatorios Section */}
							<div className="space-y-3">
								<div className="flex items-center gap-3 mb-3">
									<Badge variant="destructive" className="!bg-green-600 hover:!bg-green-700 !text-white">
										Obligatorios
									</Badge>
								</div>
								<div className="space-y-2">
									{obligatorios.map((item, index) => (
										<Card key={index} className="!bg-slate-800 !border-slate-700 hover:!bg-slate-700 transition-colors py-2">
											<CardContent className="py-0 px-3">
												<p className="!text-slate-200 !text-xs !font-medium !m-0">{item}</p>
											</CardContent>
										</Card>
									))}
								</div>
							</div>

							{/* Electivos Section */}
							<div className="space-y-3">
								<div className="flex items-center gap-3 mb-3">
									<Badge variant="secondary" className="!bg-green-600 hover:!bg-green-700 !text-white">
										Electivos
									</Badge>
								</div>
								<div className="space-y-2">
									{electivos.map((item, index) => (
										<Card key={index} className="!bg-slate-800 !border-slate-700 hover:!bg-slate-700 transition-colors py-2">
											<CardContent className="py-0 px-3">
												<p className="!text-slate-200 !text-xs !font-medium !m-0">{item}</p>
											</CardContent>
										</Card>
									))}
								</div>
							</div>
						</div>

						{/* Botón de inscripción */}
						<div className="flex justify-end mt-6">
							<Button
								onClick={() => {
									onChoose(course.id);
								}}
								className="!bg-green-600 hover:!bg-green-700 !text-white px-8"
								type="button"
							>
								Inscribirse
							</Button>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
