import * as React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
	return (
		<Container fluid className="about-container">
			<Row className="justify-content-center">
				<Col lg="2" sm="6" xs="6" md="4">
					<h1 class="text-center about-label">About me</h1>
					<hr color="#c20c53" />
				</Col>
			</Row>

			<Row className="justify-content-center">
				<Col lg="6" sm="10" xs="10" md="8">
					<p class="lead about-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis eu risus sit amet ullamcorper. Duis a consequat justo, sollicitudin mattis metus. Nullam convallis varius sapien et auctor. In lobortis arcu sit amet turpis placerat, quis semper nisi blandit. Sed maximus, augue nec porta convallis, augue ipsum cursus magna, quis laoreet ex elit interdum velit. Vestibulum condimentum, tellus sit amet condimentum egestas, ex est tristique arcu, at varius purus mi ac nunc. Aenean at mi mattis, suscipit libero nec, laoreet ante. Praesent id sollicitudin ipsum, in sodales arcu. Vivamus sollicitudin vehicula cursus. Fusce nec placerat velit. Donec vitae urna nec erat faucibus venenatis.</p>
				</Col>
			</Row>
		</Container>
	);
}

export default About;