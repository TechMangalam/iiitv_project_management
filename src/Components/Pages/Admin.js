import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {FaGem, FaHeart} from "react-icons/all";
import SignUp from "../SignUP/SignUp";
import {Accordion, Card, useAccordionButton} from "react-bootstrap";

const Admin = () => {

	function CustomToggle({ children, eventKey,name }) {
		const decoratedOnClick = useAccordionButton(eventKey, () =>
			console.log('totally custom!'),
		);

		return (
			<div className="d-flex row">

				<p className="col-8 my-auto mx-3">{name}</p>

				<button className="col-1 btn btn-outline-info mx-auto"
						type="button"

						onClick={decoratedOnClick}
				>
					View
				</button>
				<p className="my-auto mx-3">{children}</p>
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
						<MenuItem icon={<FaGem />} >201951089</MenuItem>
						<MenuItem icon={<FaGem />} >Mangalam Pandey</MenuItem>
						{/*<SubMenu title="Components" icon={<FaHeart />}>*/}
						{/*    <MenuItem>Component 1</MenuItem>*/}
						{/*    <MenuItem>Component 2</MenuItem>*/}
						{/*</SubMenu>*/}
					</Menu>
				</SidebarContent>
				<SidebarFooter>
					<p className="text-info my-2">Copyright Mangalam Pandey</p>
				</SidebarFooter>

			</ProSidebar>

			<div className="p-3 w-100" >

				<h2 className="text-black py-5">Admin Dashboard</h2>

				<Accordion defaultActiveKey='2'>

					<Card>
						<Card.Header >
							<CustomToggle eventKey="3" name="201951089 Mangalam Pandey">IIITV Project Management</CustomToggle>

						</Card.Header>
						<Accordion.Collapse eventKey="3">
							<Card.Body>
								<h5>Description :</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
									velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
									est laborum.
								</p>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header >
							<CustomToggle eventKey="4" name="201951008 Abhishek Kumar Prajapati">Sports News and Live Scores</CustomToggle>
						</Card.Header>
						<Accordion.Collapse eventKey="4">
							<Card.Body>
								<h5>Description :</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
									velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
									est laborum.
								</p>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header >
							<CustomToggle eventKey="5" name="201951024 Anurodh Singh">ERP for IIIT Vadodara</CustomToggle>
						</Card.Header>
						<Accordion.Collapse eventKey="5">
							<Card.Body>
								<h5>Description :</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
									velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
									est laborum.
								</p>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header >
							<CustomToggle eventKey="6" name="201951018 Aman Kothari">Chat bot using supervised learning.</CustomToggle>
						</Card.Header>
						<Accordion.Collapse eventKey="6">
							<Card.Body>
								<h5>Description :</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
									velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
									est laborum.
								</p>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header >
							<CustomToggle eventKey="7" name="201951137 Saurabh Kumar Jaiswar">Web crawling website</CustomToggle>
						</Card.Header>
						<Accordion.Collapse eventKey="7">
							<Card.Body>
								<h5>Description :</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
									velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
									est laborum.
								</p>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header >
							<CustomToggle eventKey="8" name="201951117 Prashant Garg">Chatting App</CustomToggle>
						</Card.Header>
						<Accordion.Collapse eventKey="8">
							<Card.Body>
								<h5>Description :</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
									velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
									est laborum.
								</p>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header >
							<CustomToggle eventKey="9" name="201951049 Chirag Jain">Photo Gallery Website</CustomToggle>
						</Card.Header>
						<Accordion.Collapse eventKey="9">
							<Card.Body>
								<h5>Description :</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
									velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
									est laborum.
								</p>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header >
							<CustomToggle eventKey="10" name="201951083 Krishna Gaur">Scan text from handwritten text</CustomToggle>
						</Card.Header>
						<Accordion.Collapse eventKey="10">
							<Card.Body>
								<h5>Description :</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
									velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
									est laborum.
								</p>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header >
							<CustomToggle eventKey="11" name="201951086 Lavesh Panghal">Identifying object app</CustomToggle>
						</Card.Header>
						<Accordion.Collapse eventKey="11">
							<Card.Body>
								<h5>Description :</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
									velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
									est laborum.
								</p>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header >
							<CustomToggle eventKey="12" name="201951090 Manjot Singh">Event Management app</CustomToggle>
						</Card.Header>
						<Accordion.Collapse eventKey="12">
							<Card.Body>
								<h5>Description :</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
									velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
									est laborum.
								</p>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card>
						<Card.Header >
							<CustomToggle eventKey="13" name="201951088 Malsani Raykant Reddy">Community for gamers</CustomToggle>
						</Card.Header>
						<Accordion.Collapse eventKey="13">
							<Card.Body>
								<h5>Description :</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
									velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
									est laborum.
								</p>
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

export default Admin;
