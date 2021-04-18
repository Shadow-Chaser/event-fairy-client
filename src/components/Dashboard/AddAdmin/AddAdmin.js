import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';


const AddAdmin = () => {
    const [admin, setAdmin] = useState({})
    const [isEmailValid, setIsEmailValid] = useState(true)

    const handleBlur = e => {
        let checkValidity = true;

        if (e.target.name === 'email') {
            checkValidity = /(.+)@(.+){2,}\.(.+){2,}/.test(e.target.value)
        }

        if (checkValidity) {
            const newAdmin = { ...admin };
            newAdmin[e.target.name] = e.target.value;
            setIsEmailValid(true);
            setAdmin(newAdmin);
        }
        else {
            setIsEmailValid(false)
        }

    }

    const handleSubmit = (e) => {
        // console.log(admin);
        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(admin)

        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data) {
                    alert("Admin added successfully!")
                }
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault()

    }


    return (
        <div>
            <Form onSubmit={handleSubmit} inline>
                <InputGroup className="mb-2 mr-sm-2">
                    <InputGroup.Prepend>
                        <InputGroup.Text>@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl onBlur={handleBlur} type="text" name="email" id="email" placeholder="Email Address" />
                </InputGroup>

                <Button type="submit" variant='info' className="mb-2">Make Admin</Button>
            </Form>
            {
                <p style={{ color: 'red', display: isEmailValid ? 'none' : 'block' }}>Email Address is not a valid Email Address</p>
            }
        </div>
    );
};

export default AddAdmin;