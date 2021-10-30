import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {FaGem, FaHeart} from "react-icons/all";
import SignUp from "../SignUP/SignUp";
import {Accordion, Card, useAccordionButton} from "react-bootstrap";

const Faculty = () => {

	function CustomToggle({ children, eventKey }) {
		const decoratedOnClick = useAccordionButton(eventKey, () =>
			console.log('totally custom!'),
		);

		return (
			<div className="d-flex row">

				<p className="col-8 my-auto mx-3">Mangalam Pandey</p>

				<button className="col-1 btn btn-outline-info mx-auto"
					type="button"

					onClick={decoratedOnClick}
				>
					{children}
				</button>
			</div>

		);
	}


return (

	<div
		style={{
			display: 'flex',
			height: '100vh'
		}} className="container-fluid mx-0 px-0"
	>

		<ProSidebar >
			<SidebarHeader>
				<div className="justify-content-center">
					<img className="w-100 h-25" src="https://firebasestorage.googleapis.com/v0/b/project-management-911a2.appspot.com/o/Images%2Fprofile_demo.jpg?alt=media&token=b5716d1e-95e9-49d2-9276-511ba263bf69"/>
				</div>
			</SidebarHeader>
			<SidebarContent>
				<Menu iconShape="square">
					<MenuItem icon={<FaGem />} >Dashboard</MenuItem>
					<SubMenu title="Components" icon={<FaHeart />}>
						<MenuItem>Component 1</MenuItem>
						<MenuItem>Component 2</MenuItem>
					</SubMenu>
				</Menu>
			</SidebarContent>
			<SidebarFooter>
				<p className="text-info my-2">Copyright Mangalam Pandey</p>
			</SidebarFooter>

		</ProSidebar>

		<div className="p-3 w-100" >

			<h2 className="text-black py-5">Faculty Dashboard</h2>

			<Accordion defaultActiveKey='1'>

				<Card>
					<Card.Header >
						<CustomToggle eventKey="3">View</CustomToggle>
					</Card.Header>
					<Accordion.Collapse eventKey="3">
						<Card.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
							est laborum.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header >
						<CustomToggle eventKey="4">View</CustomToggle>
					</Card.Header>
					<Accordion.Collapse eventKey="4">
						<Card.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
							est laborum.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header >
						<CustomToggle eventKey="5">View</CustomToggle>
					</Card.Header>
					<Accordion.Collapse eventKey="5">
						<Card.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
							est laborum.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header >
						<CustomToggle eventKey="6">View</CustomToggle>
					</Card.Header>
					<Accordion.Collapse eventKey="6">
						<Card.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
							est laborum.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
				<Card.Header >
					<CustomToggle eventKey="7">View</CustomToggle>
				</Card.Header>
				<Accordion.Collapse eventKey="7">
					<Card.Body>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
						velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
						est laborum.
					</Card.Body>
				</Accordion.Collapse>
			</Card>
				<Card>
					<Card.Header >
						<CustomToggle eventKey="8">View</CustomToggle>
					</Card.Header>
					<Accordion.Collapse eventKey="8">
						<Card.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
							est laborum.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header >
						<CustomToggle eventKey="9">View</CustomToggle>
					</Card.Header>
					<Accordion.Collapse eventKey="9">
						<Card.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
							est laborum.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header >
						<CustomToggle eventKey="10">View</CustomToggle>
					</Card.Header>
					<Accordion.Collapse eventKey="10">
						<Card.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
							est laborum.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header >
						<CustomToggle eventKey="11">View</CustomToggle>
					</Card.Header>
					<Accordion.Collapse eventKey="11">
						<Card.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
							est laborum.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header >
						<CustomToggle eventKey="12">View</CustomToggle>
					</Card.Header>
					<Accordion.Collapse eventKey="12">
						<Card.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
							est laborum.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Card.Header >
						<CustomToggle eventKey="13">View</CustomToggle>
					</Card.Header>
					<Accordion.Collapse eventKey="13">
						<Card.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
							est laborum.
						</Card.Body>
					</Accordion.Collapse>
				</Card>

			</Accordion>


		</div>









	</div>



	// <div
	// style={{
	// 	display: 'flex',
	// 	justifyContent: 'Center',
	// 	alignItems: 'Center',
	// 	height: '100vh'
	// }} className="container"
	// >
	// <h1>Faculty Portal</h1>
	// </div>
);
};

export default Faculty;
