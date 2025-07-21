import type { ReactElement } from 'react';
import PricingCard from '@/components/PricingCard';

function Pricing(): ReactElement {
	const basicPlanFeatures = [
		{
			text: 'Contenido profesional y actualizado con certificados digitales',
			included: true
		},
		{
			text: 'Certificados físicos para las rutas de aprendizaje profesional',
			included: false
		},
		{
			text: 'Acceso a las escuelas de Startups, Inglés y Liderazgo',
			included: false
		},
		{
			text: 'Eventos exclusivos como Platzi Conf',
			included: false
		},
		{
			text: 'Descarga contenido en la app móvil',
			included: false
		}
	];

	const proPlanFeatures = [
		{
			text: 'Contenido profesional y actualizado con certificados digitales',
			included: true
		},
		{
			text: 'Certificados físicos para las rutas de aprendizaje profesional',
			included: true
		},
		{
			text: 'Acceso a las escuelas de Startups, Inglés y Liderazgo',
			included: true
		},
		{
			text: 'Eventos exclusivos como Platzi Conf',
			included: true
		},
		{
			text: 'Descarga contenido en la app móvil',
			included: true
		}
	];

	return (
		<div className="page">
			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold text-foreground mb-4">
					Planes de Suscripción
				</h1>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
					Elige el plan que mejor se adapte a tus necesidades de aprendizaje
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-6xl mx-auto">
				<PricingCard
					title="Plan Basic"
					subtitle="Para 1 estudiante"
					currency="🇨🇴"
					amount="179.000"
					period="mes"
					recurring="Cobro mensual recurrente"
					features={basicPlanFeatures}
					buttonText="Suscríbete a Plan Basic"
					buttonVariant="outline"
					onButtonClick={() => console.log('Basic plan selected')}
				/>

				<PricingCard
					title="Plan Pro"
					subtitle="Para 1 estudiante"
					currency="🇨🇴"
					amount="299.000"
					period="mes"
					recurring="Cobro mensual recurrente"
					features={proPlanFeatures}
					buttonText="Suscríbete a Plan Pro"
					buttonVariant="default"
					isPopular={true}
					popularBadgeText="Más Popular"
					onButtonClick={() => console.log('Pro plan selected')}
				/>
			</div>
		</div>
	);
}

export default Pricing;
