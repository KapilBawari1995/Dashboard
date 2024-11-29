import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import FormComponent from '../utility/FormComponent';

function Datatable({ labelsName, data, modalTitle, formData }) {
    const [openModal, setOpenModal] = useState(false);

    const editHandler = () => {
        setOpenModal(true);
    };

    // Function to handle closing the modal
    const closeModalHandler = () => {
        setOpenModal(false);
    };

    return (
        <div>
            <div className="container my-4">
                <div className="row mt-4">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            {labelsName.map((obj) => (
                                                <th key={obj.key}>{obj.displayName}</th>
                                            ))}
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => (
                                            <tr key={index}>
                                                {labelsName.map((obj) => (
                                                    <td key={obj.key}>{item[obj.key]}</td>
                                                ))}
                                                <td>
                                                    <button className="btn btn-success btn-sm me-1" onClick={editHandler}>
                                                        Edit
                                                    </button>
                                                    <button className="btn btn-primary btn-sm">View</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                
                <Modal show={openModal} onHide={closeModalHandler} className="mt-5">
                    <Modal.Header closeButton>
                        <Modal.Title>{modalTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormComponent labelsName={labelsName} data={formData} />
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-secondary" onClick={closeModalHandler}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default Datatable;
