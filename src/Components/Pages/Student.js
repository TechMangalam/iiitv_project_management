import * as React from 'react';
import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu} from "react-pro-sidebar";
import {FaGem, FaHeart} from "react-icons/all";
import {Accordion, Card, useAccordionButton} from "react-bootstrap";


const Student = ()=>{

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

                <h3 className="text-black py-5">Choose project</h3>

                <select className="btn btn-outline-secondary w-50" name="paymentType" id="paymentType" required >
                    <option value="selectFaculty" selected>Select Faculty</option>
                    <option value="Antriksh Goswami" >Antriksh Goswami</option>
                    <option value="Pratik Shah">Pratik Shah</option>
                    <option value="Kamal Kishor Jha" >Kamal Kishor Jha</option>
                    <option value="Novarun Deb">Novarun Deb</option>
                </select>
                <select className="btn btn-outline-secondary w-50" name="paymentType" id="paymentType" required >
                    <option value="selectFaculty" selected>Select Project</option>
                    <option value="ERP for IIITV" >ERP for IIITV</option>
                    <option value="Audience Counter robot">Audience Counter robot</option>
                    <option value="Converting handwritten notes to text" >Converting handwritten notes to text</option>
                    <option value="Android app for event management for IIITV">Android app for event management for IIITV</option>
                    <option value="IIITV Project Management">IIITV Project Management</option>
                    <option value="Object detection from computer vision">Object detection from computer vision</option>
                </select>
                <h5 className="my-3">Write project description</h5>
                <textarea className="w-100 h-25 p-2" maxLength="500" />
                <button className="btn btn-info my-3">Submit for approval from faculty</button>

                <hr/>

                <h3 className="my-3">Project Requests</h3>

                <Accordion >

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
                            <CustomToggle eventKey="4" name="201951089 Mangalam Pandey">Sports News and Live Scores</CustomToggle>
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
                            <CustomToggle eventKey="5" name="201951089 Mangalam Pandey">ERP for IIIT Vadodara</CustomToggle>
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

                </Accordion>

            </div>

        </div>
    );

};

export default Student;