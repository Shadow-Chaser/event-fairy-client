import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const ManageServices = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {

        fetch('https://aqueous-lake-79514.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServicesData(data);
            })

    }, [])

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://aqueous-lake-79514.herokuapp.com/deleteService/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result) {
                    const newServicesData = servicesData.filter(service => service._id !== id);
                    setServicesData(newServicesData)
                }
            })
    }

    return (
        <div className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className='col-md-10'>
                <h2 className="ml-5 mt-3 mb-3">Manage Services</h2>

            <Table striped bordered hover style={{ width: "80%", margin: '0 auto' }}>
                <thead>
                    <tr>
                        <th>Service</th>
                        {/* <th>Author Name</th> */}
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        servicesData.map(service =>
                            <tr>
                                <td>{service.title}</td>
                                {/* <td>{service.description}</td> */}
                                <td>$ {service.price}</td>
                                <td> <FontAwesomeIcon icon={faEdit} style={{ color: "rgb(70, 221, 70)", fontSize: "25px" }} /> <FontAwesomeIcon onClick={() => handleDelete(service._id)} icon={faTrashAlt} style={{ color: "red", fontSize: "25px", cursor: "pointer" }} /></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>


            </div>
        </div>
    );
};

export default ManageServices;