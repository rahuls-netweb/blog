import React from 'react';
import * as bootstrap from 'react-bootstrap';

function Array() {
    const students = [
        { name: "anil", email: "anil@gmail.com", mobile: 9999 },
        { name: "mohit", email: "mohit@gmail.com", mobile: 8888 },
        { name: "saurabh", email: "saurabh@gmail.com", mobile: 7777 },
        { name: "Monu", email: "Monu@gmail.com", mobile: 4444 },
    ];
    return (
        <div>
            <bootstrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((item, i) => {
                            return <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                            </tr>
                        })
                    }
                </tbody>
            </bootstrap.Table>
            <bootstrap.Button variant="success">Success</bootstrap.Button>

        </div>
    );
}
export default Array
