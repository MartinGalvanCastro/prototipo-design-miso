import type { ReactElement } from 'react';

function Contact(): ReactElement {
	return (
		<div className="page">
			<h1>Contact Page</h1>
			<p>Contáctanos aquí.</p>
			<div className="contact-info">
				<p>Email: contact@example.com</p>
				<p>Teléfono: +123 456 7890</p>
			</div>
		</div>
	);
}

export default Contact;
