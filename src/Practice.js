import React from 'react';
// import { Button } from 'react-bootstrap';
import { Button } from '@mui/material-ui';

function Pract() {
    const [name, setName] = React.useState("");
    const [data, updateData] = React.useState(false)

    function getdata(e) {
        setName(e.target.value)
    }

    return (
        <div>
            {
                data ? <h1 style={{ color: "red" }}>{name}</h1> : null
            }
            <input type="text" onChange={getdata}></input>
            <Button onClick={() => updateData(!data)}>Submit</Button>

        </div>
    )
}
export default Pract