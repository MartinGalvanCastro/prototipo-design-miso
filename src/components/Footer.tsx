import type { ReactElement } from 'react';

function Footer(): ReactElement {
	return (
		<footer className="border-t bg-card border-border mt-auto">
			<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
				<div className="text-center">
					<div className="mb-4">
						<h3 className="text-lg font-semibold text-card-foreground mb-2">
							Aviso Legal
						</h3>
						<div className="text-sm text-muted-foreground leading-relaxed max-w-4xl mx-auto">
							<p className="mb-3">
								<strong>Este sitio web no hace parte ni tiene afiliación alguna con Platzi.</strong>
							</p>
							<p className="mb-3">
								El propósito de este sitio web es la creación de un prototipo de producto para la materia
								<span className="font-medium"> Design Thinking y Lean Startup</span> de la
								<span className="font-medium"> Maestría de Ingeniería de Software de Uniandes</span>.
							</p>
							<p className="text-muted-foreground/80">
								Este sitio no tiene ningún fin comercial y es utilizado únicamente con fines académicos.
							</p>
						</div>
					</div>

					<div className="pt-4 border-t border-border">
						<p className="text-xs text-muted-foreground/60">
							2024 Prototipo Académico
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
