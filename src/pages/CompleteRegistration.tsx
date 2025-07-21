import PricingCard from '@/components/PricingCard';
import type { ReactElement } from 'react';
const basicFeatures = [
	{ text: 'Contenido profesional y actualizado con certificados digitales', included: true },
	{ text: 'Certificados físicos para las rutas de aprendizaje profesional', included: false },
	{ text: 'Acceso a las escuelas de Startups, Inglés y liderazgo', included: false },
	{ text: 'Eventos exclusivos como Platzi Conf', included: false },
	{ text: 'Descarga contenido en la app móvil', included: false },
];

const advancedFeatures = [
	{ text: 'Acceso ilimitado a todos los cursos de la ruta avanzada', included: true },
	{ text: 'Certificación profesional y actualizado con certificados digitales', included: true },
	{ text: 'Cursos certificados por Platzi como avanzados', included: true },
	{ text: 'Incluye 4 cursos: 2 seleccionados por Platzi y 2 de libre elección para que enfoques a tus gustos y necesidades', included: true },
	{ text: 'Dos meses de acceso ilimitado para otros cursos en la plataforma', included: true },
	{ text: 'Certificados físicos para las rutas de aprendizaje profesional', included: false },
	{ text: 'Acceso a las escuelas de Startups, Inglés y liderazgo', included: false },
	{ text: 'Eventos exclusivos como Platzi Conf', included: false },
	{ text: 'Descarga contenido en la app móvil', included: false },
];

export default function CompleteRegistration(): ReactElement {
	return (
		<div className="max-w-5xl mx-auto px-6 py-12">
			<h1 className="text-3xl font-bold text-center mb-10 text-foreground">Completa tu registro</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
				<PricingCard
					title="Plan Basic"
					subtitle="Para 1 estudiante"
					currency="🇨🇴"
					amount="179.000"
					period="mes"
					recurring="Cobro mensual recurrente"
					features={basicFeatures}
					buttonText="Suscríbete a Plan Basic"
				/>
				<PricingCard
					title="Rutas avanzadas"
					subtitle="Para 1 estudiante"
					currency="🇨🇴"
					amount="90.000"
					period="único"
					features={advancedFeatures}
					buttonText="Acceder a rutas avanzadas"
					buttonVariant="default"
					isPopular={true}
					popularBadgeText="Recomendado"
					onButtonClick={() => window.location.href = '/home'}
				/>
			</div>
		</div>
	);
}
