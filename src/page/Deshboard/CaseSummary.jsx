import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import axios from 'axios';

const CaseSummary = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/global');
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatNumber = (num) => {
    if (num >= 1e9) return (num / 1e9).toFixed(1) + 'B'; 
    if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M'; 
    if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K'; 
    return num;
  };

  if (loading) {
    return <Spinner animation="border" />;
  }

  return (
    <Row>
      <Col xs={6} md={2}>
        <div>
          <p className="text-muted mb-1">Total Cases</p>
          <span className="fw-bold">{formatNumber(data.total_market_cap.usd)}</span>
        </div>
      </Col>
      <Col xs={6} md={2}>
        <div>
          <p className="text-muted mb-1">Total Clients</p>
          <span className="fw-bold">{formatNumber(data.total_volume.usd)}</span>
        </div>
      </Col>
      <Col xs={6} md={2}>
        <div>
          <p className="text-muted mb-1">Ongoing Cases</p>
          <span className="fw-bold">{formatNumber(data.active_cryptocurrencies)}</span>
        </div>
      </Col>
      <Col xs={6} md={2}>
        <div>
          <p className="text-muted mb-1">Closed Cases</p>
          <span className="fw-bold">{formatNumber(data.markets)}</span>
        </div>
      </Col>
    </Row>
  );
};

export default CaseSummary;
