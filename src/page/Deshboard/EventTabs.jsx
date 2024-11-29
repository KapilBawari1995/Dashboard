import React, { useState } from 'react';
import { Tabs, Tab, Form, Row, Col, Dropdown } from 'react-bootstrap';

const EventTabs = () => {
    const [selectedDay, setSelectedDay] = useState('30'); 
    const [activeTab, setActiveTab] = useState('upcoming'); 

    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
    };

    const handleSelect = (tabKey) => {
        setActiveTab(tabKey);
    };

    return (
        <>
            <Row className="align-items-center mb-3">
                <Col md={6}>
                    <h5 className="mb-0">Meeting</h5>
                </Col>
                <Col md={4}>
                    <Form.Select value={selectedDay} onChange={handleDayChange}>
                        <option value="30">Last 30 Days</option>
                        <option value="7">Last 7 Days</option>
                        <option value="1">Today</option>
                    </Form.Select>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <Tabs
                        activeKey={activeTab}
                        onSelect={handleSelect}
                        id="event-tabs"
                        className="mb-3"
                        variant="pills"
                        style={{ borderBottom: '2px solid #6A00F3' }}
                    >
                        <Tab 
                            eventKey="upcoming" 
                            className={`bg-transparent ${activeTab === 'upcoming' ? 'bg-success ' : ''}`} 
                            title={<span>Upcoming</span>}
                        >
                            <ul className="list-unstyled mt-3">
                                {Array(4).fill().map((_, index) => (
                                    <li key={index} className="d-flex align-items-center justify-content-between mb-3">
                                        <div>
                                            <strong>Jim Collins</strong>
                                            <p className="mb-0 text-muted">07 Apr 2023, at 08:44 AM</p>
                                        </div>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="link" className="p-0 text-dark">
                                                &#x22EE;
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                <Dropdown.Item href="#">Delete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                ))}
                            </ul>
                        </Tab>

                        <Tab 
                            eventKey="history" 
                            className={`bg-transparent ${activeTab === 'history' ? 'bg-success ' : ''}`} 
                            title={<span>History</span>}
                        >
                            <ul className="list-unstyled mt-3">
                                {Array(4).fill().map((_, index) => (
                                    <li key={index} className="d-flex align-items-center justify-content-between mb-3">
                                        <div>
                                            <strong>John Doe</strong>
                                            <p className="mb-0 text-muted">15 Mar 2023, at 09:30 AM</p>
                                        </div>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="link" className="p-0 text-dark">
                                                &#x22EE;
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#">View</Dropdown.Item>
                                                <Dropdown.Item href="#">Delete</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                ))}
                            </ul>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </>
    );
};

export default EventTabs;
