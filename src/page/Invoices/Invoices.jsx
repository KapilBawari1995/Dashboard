import React from 'react';
import labelsName from '../../Json/formLabelsName.json';
import invoiceData from '../../Json/userData.json';
import Datatable from '../../utility/Datatable';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';

const tabData = [
    {
        eventKey: "providerInvoices",
        title: "Provider Invoices",
        modalTitle: "Edit Invoice Data",
        data: invoiceData.invoiceData,
        labels: labelsName.invoiceLabels,
    },
    {
        eventKey: "providerPayment",
        title: "Provider Payment",
        modalTitle: "Edit Payment Data",
        data: invoiceData.invoiceData,
        labels: labelsName.invoiceLabels,
    },
    {
        eventKey: "fillingInvoices",
        title: "Filling Invoices",
        modalTitle: "Edit Invoice Data",
        data: invoiceData.invoiceData,
        labels: labelsName.invoiceLabels,
    },
    {
        eventKey: "fillingFreePayment",
        title: "Filling Free Payment",
        modalTitle: "Edit Free Payment Data",
        data: invoiceData.invoiceData,
        labels: labelsName.invoiceLabels,
    }
];

function Invoices() {
    return (
        <Row>
            <Col md={12} className="p-2">
                <Tabs defaultActiveKey="providerInvoices" id="invoice-tabs" className="mb-3">
                  
                    {tabData.map((tab, index) => (
                        <Tab eventKey={tab.eventKey} title={tab.title} key={index}>
                            <Datatable
                                labelsName={tab.labels}      
                                data={tab.data}              
                                modalTitle={tab.modalTitle}  
                                formData={tab.data}          
                            />
                        </Tab>
                    ))}
                </Tabs>
            </Col>

            
            <Col md={3} className="border-start border-light p-3">
              
            </Col>
        </Row>
    );
}

export default Invoices;
