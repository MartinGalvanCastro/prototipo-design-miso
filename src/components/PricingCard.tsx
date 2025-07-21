import type { ReactElement } from 'react';
import { Check, X } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface PricingFeature {
	text: string;
	included: boolean;
}

interface PricingCardProps {
	title: string;
	subtitle: string;
	currency: string;
	amount: string;
	period: string;
	recurring?: string;
	features: PricingFeature[];
	buttonText: string;
	buttonVariant?: 'default' | 'secondary' | 'outline';
	isPopular?: boolean;
	popularBadgeText?: string;
	onButtonClick?: () => void;
	className?: string;
}

function PricingCard({
	title,
	subtitle,
	currency,
	amount,
	period,
	recurring,
	features,
	buttonText,
	buttonVariant = 'default',
	isPopular = false,
	popularBadgeText = 'Más Popular',
	onButtonClick,
	className,
}: PricingCardProps): ReactElement {
	return (
		<div className="relative">
			{isPopular && (
				<Badge
					className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10"
					variant="default"
				>
					{popularBadgeText}
				</Badge>
			)}
			<Card className={cn(
				'w-full max-w-sm transition-shadow duration-200 hover:shadow-lg',
				isPopular && 'border-primary',
				className
			)}>
				<CardHeader className="text-center pb-8">
					<h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
					<p className="text-sm text-muted-foreground">{subtitle}</p>

					<div className="mt-6">
						<div className="flex items-baseline justify-center mb-2">
							<span className="text-sm font-medium text-muted-foreground mr-1">
								{currency}
							</span>
							<span className="text-4xl font-bold text-foreground">
								{amount}
							</span>
						</div>
						{recurring ? (
							<p className="text-sm text-muted-foreground">{recurring}</p>
						) : period === 'único' ? (
							<p className="text-sm text-muted-foreground">Cobro único</p>
						) : period ? (
							<p className="text-sm text-muted-foreground">Cobro por {period}</p>
						) : null}
					</div>
				</CardHeader>

				<CardContent className="space-y-4">
					{features.map((feature, index) => (
						<div key={index} className="flex items-start gap-3">
							<div className="flex-shrink-0 mt-0.5">
								{feature.included ? (
									<Check className="h-4 w-4 text-green-500" />
								) : (
									<X className="h-4 w-4 text-muted-foreground" />
								)}
							</div>
							<span className={cn(
								'text-sm leading-relaxed',
								feature.included ? 'text-foreground' : 'text-muted-foreground'
							)}>
								{feature.text}
							</span>
						</div>
					))}
				</CardContent>

				<CardFooter className="pt-6">
					<Button
						className="w-full"
						variant={buttonVariant}
						onClick={onButtonClick}
					>
						{buttonText}
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}

export default PricingCard;
