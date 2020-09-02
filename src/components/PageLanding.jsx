import * as React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PageLanding() {
	return (
		<Container fluid className="page-landing">
			<Row className="page-landing-row justify-content-center">
				<Col lg="8" sm="6" xs="12" md="8">
					<Container fluid className="text-center">
						<p className="name">Moath Zayadneh</p>
						<p className="profession">Full-Stack Web Developer</p>
					</Container>
				</Col>
			</Row>
		</Container>
	);
}

export default PageLanding;