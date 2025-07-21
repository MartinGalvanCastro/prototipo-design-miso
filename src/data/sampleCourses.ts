import type { CourseData } from '@/components/CourseCard';

export const sampleCourses: CourseData[] = [
	 {
		id: '1',
		title: 'Arquitectura de Software',
		description: 'Diseña sistemas escalables y mantenibles.',
		imageUrl: '/softa.png',
		isComingSoon: false,
		detailedDescription: 'En este curso avanzado profundizarás en patrones arquitectónicos como microservicios y arquitecturas hexagonales, aplicarás los principios SOLID y Clean Architecture para obtener un diseño limpio, y aprenderás estrategias de resiliencia, tolerancia a fallos y escalabilidad, así como técnicas de documentación de decisiones arquitectónicas.',
		obligatoryCourses: [
			'Patrones de diseño avanzados',
			'Sistemas distribuidos'
		],
		electiveCourses: [
			'Arquitectura basada en eventos',
			'Resiliencia y tolerancia a fallos',
			'CI/CD con Terraform',
			'Cache distribuido y escalable'
		]
	},
	{
		id: '2',
		title: 'Adobe Photoshop y Premiere',
		description: 'Domina edición de imagen y video profesional.',
		imageUrl: '/edicion.png',
		isComingSoon: false,
		detailedDescription: 'Aprenderás técnicas avanzadas de retoque y compositing en Photoshop, automatizar flujos con Actions y scripts, profundizar en edición multicámara, corrección de color y efectos visuales en Premiere Pro, y explorarás motion graphics básicos con After Effects e integración de audio.',
		obligatoryCourses: [
			'Retoque profesional en Photoshop',
			'Edición multicámara en Premiere Pro'
		],
		electiveCourses: [
			'Automatización de Photoshop con scripts',
			'Corrección de color avanzada',
			'Motion graphics con After Effects',
			'Audio para producción de video'
		]
	},
	{
		id: '3',
		title: 'Marketing Digital',
		description: 'Crea y optimiza campañas basadas en datos.',
		imageUrl: '/marketing.png',
		isComingSoon: false,
		detailedDescription: 'Este curso cubre SEO técnico, gestión de campañas PPC en Google Ads y Facebook Ads, analítica web con Google Analytics y Tag Manager, automatización de email marketing y lead nurturing, y estrategias de contenido y social media para maximizar conversiones.',
		obligatoryCourses: [
			'SEO técnico avanzado',
			'Campañas PPC'
		],
		electiveCourses: [
			'Automatización de email marketing',
			'Estrategia de contenidos',
			'Analítica avanzada con Google Analytics',
			'Publicidad en redes sociales'
		]
	},
	{
		id: '4',
		title: 'Machine Learning con Python',
		description: 'Aprende algoritmos de ML y análisis de datos',
		imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&auto=format',
		isComingSoon: true,
		detailedDescription: 'Aprende algoritmos de ML y análisis de datos para crear modelos predictivos y sistemas inteligentes. Domina Python, TensorFlow, y las técnicas más modernas de aprendizaje automático.',
		obligatoryCourses: [
			'Python para Data Science',
			'Estadística Descriptiva',
			'Álgebra Lineal',
			'Probabilidad y Estadística'
		],
		electiveCourses: [
			'Deep Learning con TensorFlow',
			'Computer Vision',
			'Natural Language Processing',
			'MLOps y Despliegue'
		]
	},
	{
		id: '5',
		title: 'Cloud Computing con AWS',
		description: 'Domina los servicios de Amazon Web Services',
		imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&auto=format',
		isComingSoon: true,
		detailedDescription: 'Domina los servicios de Amazon Web Services para desplegar aplicaciones escalables en la nube. Aprende sobre infraestructura como código, contenedores, y arquitecturas cloud-native.',
		obligatoryCourses: [
			'Fundamentos de Cloud Computing',
			'EC2 y Redes',
			'S3 y Almacenamiento',
			'IAM y Seguridad'
		],
		electiveCourses: [
			'Lambda y Serverless',
			'EKS y Kubernetes',
			'CloudFormation',
			'DevOps en AWS'
		]
	},
	{
		id: '6',
		title: 'Ciberseguridad Avanzada',
		description: 'Protege sistemas y redes contra amenazas',
		imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop&auto=format',
		isComingSoon: true,
		detailedDescription: 'Protege sistemas y redes contra amenazas cibernéticas. Aprende ethical hacking, análisis de vulnerabilidades, y cómo implementar protocolos de seguridad robustos.',
		obligatoryCourses: [
			'Fundamentos de Seguridad',
			'Redes y Protocolos',
			'Criptografía',
			'Análisis de Vulnerabilidades'
		],
		electiveCourses: [
			'Ethical Hacking',
			'Forense Digital',
			'Seguridad en Cloud',
			'Incident Response'
		]
	},
	{
		id: '7',
		title: 'Blockchain y Criptomonedas',
		description: 'Desarrollo de aplicaciones descentralizadas',
		imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&auto=format',
		isComingSoon: true,
		detailedDescription: 'Desarrollo de aplicaciones descentralizadas y smart contracts en diferentes blockchains. Aprende Solidity, Web3, y cómo crear DApps modernas.',
		obligatoryCourses: [
			'Fundamentos de Blockchain',
			'Criptografía Aplicada',
			'Ethereum y Smart Contracts',
			'Solidity Básico'
		],
		electiveCourses: [
			'DeFi Development',
			'NFT Marketplaces',
			'Web3 Frontend',
			'Layer 2 Solutions'
		]
	}
];
