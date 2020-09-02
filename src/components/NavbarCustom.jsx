import * as React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavbarCustom({ isScrolling }) {
	return (
		<Navbar className={"navbar-custom justify-content-between" + (isScrolling ? " scrolling" : "")} variant="dark">
			<Navbar.Brand href="#">THEMUD</Navbar.Brand>
			<Nav>
				<Nav.Link>
					<div className="menu-toggler">
						<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'>
							<path className="menu-hamburger" stroke='#E91E63' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' d='M4 7h22M4 15h22M4 23h22'/>
						</svg>
					</div>
				</Nav.Link>
			</Nav>
		</Navbar>
	);
}

export default NavbarCustom;