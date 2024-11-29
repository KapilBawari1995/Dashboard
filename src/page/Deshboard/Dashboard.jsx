import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, } from 'react-bootstrap';
import RevenueChart from '../../chart/RevenueChart';
import CalendarComponent from '../../chart/CalendarComponent';
import EventTabs from '../../page/Deshboard/EventTabs';
import TaskList from '../../page/Deshboard/TaskList';
import CaseSummary from '../../page/Deshboard/CaseSummary';
import './Dashboard.css';
import EarningReport from '../../chart/EarningReport';
import axios from 'axios';
import BillableHoursMetrics from '../../chart/BillableHoursMetrics';


const Dashboard = () => {
    const [date, setDate] = useState(new Date());
    const [tasks] = useState([
        { title: 'Task 1', description: 'Short description of task 1', details: 'Detailed information about task 1' },
        { title: 'Task 2', description: 'Short description of task 2', details: 'Detailed information about task 2' },
        { title: 'Task 3', description: 'Short description of task 3', details: 'Detailed information about task 3' }
    ]);

    const [data, setData] = useState(0);
    const [loading, setLoading] = useState(true);
    const [earningsData, setEarningsData] = useState([]);
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });
    const [totalRevenue, setTotalRevenue] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true); 
          try {
            const response = await axios.get("https://financialmodelingprep.com/api/v3/income-statement-as-reported/AAPL?period=annual&limit=50&apikey=nTerzchMgSNzr8jPKR1KsuXrg296bqYH");
            const result = (response.data.length * 50 / 2000); 
            setData(result);
          } catch (error) {
            console.error("Error fetching data:", error);
          } finally {
            setLoading(false); 
          }
        };
      
        fetchData(); 
      }, []);
      


    useEffect(() => {
        const fetchEarningsData = async () => {
            try {
                const response = await axios.get('https://financialmodelingprep.com/api/v3/income-statement-as-reported/AAPL?period=annual&limit=50&apikey=nTerzchMgSNzr8jPKR1KsuXrg296bqYH');
                const earnings = response.data.map(item => item.earningspersharebasic);
                setEarningsData(earnings);
            } catch (error) {
                console.error('Error fetching earnings data:', error);
            }
        };

        fetchEarningsData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get( 'https://financialmodelingprep.com/api/v3/income-statement-as-reported/AAPL?period=annual&limit=50&apikey=nTerzchMgSNzr8jPKR1KsuXrg296bqYH'  );

               // if (!response.data.length) {
                    //throw new Error('No data available for this symbol.');
                //}

                const monthLabels = [];
                for (let i = 0; i < 12; i++) {
                    const date = new Date(2024, i);
                    monthLabels.push(date.toLocaleString('default', { month: 'short' }));
                }

                const revenues = monthLabels.map(month => Math.random() * 30000000000);
                const netIncomes = monthLabels.map(month => Math.random() * 15000000000);

                const calculatedTotalRevenue = revenues.reduce((acc, curr) => acc + curr, 0);
                setTotalRevenue(calculatedTotalRevenue);

                setChartData({
                    labels: monthLabels,
                    datasets: [
                        {
                            label: 'Revenue',
                            data: revenues,
                            borderColor: 'rgba(123, 97, 255, 0.2)',
                            backgroundColor: 'rgba(123, 97, 255, 0.2)',
                            fill: true,
                            tension: 0.3,
                            pointRadius: 0,
                        },
                        {
                            label: 'Net Income',
                            data: netIncomes,
                            borderColor: 'rgba(40, 167, 69, 0.2)',
                            backgroundColor: 'rgba(40, 167, 69, 0.2)',
                            fill: true,
                            tension: 0.3,
                            pointRadius: 0,
                        }
                    ]
                });
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <Container fluid className="p-0 mt-4">
            <Row>
                <Col md={9} className="p-2">
                    <Row>
                        <Col xs={12} className="mb-4">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search..."
                                        className="me-2 serch_bar"
                                        aria-label="Search"
                                    />
                                    <Col xs={5} className="me-2">
                                        <Form.Select className='button_bg'>
                                            <option value="Case Number">Case Number</option>
                                            <option value="Action 1">Action 1</option>
                                            <option value="Action 2">Action 2</option>
                                            <option value="Action 3">Action 3</option>
                                        </Form.Select>
                                    </Col>
                                </Form>
                                
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <CaseSummary />
                    </Row>
                    <Row className='mt-5'> 
                        <Col xs={7} className="mb-4">
                            <RevenueChart chartData={chartData} totalRevenue={totalRevenue} />
                        </Col>
                        <Col xs={5} className="mb-4">
                            <EarningReport earningsData={earningsData} />
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={7} className="mb-4">
                            <EventTabs />
                        </Col>
                        <Col xs={5} className="mb-4">
                         <BillableHoursMetrics setdata={data} />
                        </Col>result
                    </Row>
                </Col>

                <Col md={3} className="border-start .border-light p-3 ">
                    <Row>
                        <CalendarComponent />
                    </Row>
                    <Row>
                        <TaskList tasks={tasks} />
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
