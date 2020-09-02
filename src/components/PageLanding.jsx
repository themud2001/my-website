import * as React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PageLanding() {
	return (
		<Container fluid className="page-landing text-center">
			<Row className="page-landing-row">
				<Col>
					<h1>This is me</h1>
				</Col>
			</Row>
		</Container>
	);
}

export default PageLanding;