import * as React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
	return (
		<Container fluid className="about-container">
			<Row className="justify-content-center">
				<Col lg="2" sm="6" xs="6" md="4">
					<h1 className="text-center about-label">About me</h1>
					<hr color="#c20c53" />
				</Col>
			</Row>

			<Row className="justify-content-center">
				<Col lg="6" sm="10" xs="10" md="8">
					<p className="lead about-content">I'm a full-stack web developer and a computer enthusiast that loves working in complex, advanced systems with the latest, cutting-edge technologies. I have developed and deployed many websites with fancy user interfaces.</p>
					<p className="lead about-content">I'm very ardent about topics like mobile development and especially artificial intelligence, which the future will rely on, and I'm really looking to dive into it.</p>
					<p className="lead about-content">I believe I have the ability to explain codes to people because I'm also a <span>Udemy</span> instructor. I explained various topics on web development and wrapped my explanation with courses I uploaded on the platform.</p>
					<p className="lead about-content">One of my best projects is that I have written an operating system (OS) and a boot loader from scratch using Assembly and C.</p>
					<p className="lead about-content">Briefly, I have experience in <span>Python (Django)</span>, <span>C++</span>, <span>JavaScript (NodeJS, ExpressJS and ReactJS)</span>, <span>PHP</span>, <span>Lua</span>, <span>MySQL</span>, <span>MongoDB</span> and a little bit of <span>C</span>.</p>
				</Col>
			</Row>
		</Container>
	);
}

export default About;