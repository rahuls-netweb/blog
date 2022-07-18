import React, { useState } from 'react';
function Form() {
    const [name, setName] = useState("");
    const [select, setSelect] = useState("");
    const [check, setCheck] = useState(false);
    function getData() {
        console.log(name, select, check);
    }
    function submitData(e) {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={submitData}>
                <input type="text" onChange={(e) => setName(e.target.value)} /><br /><br />
                <select onChange={(e) => setSelect(e.target.value)} >
                    <option>Select Car</option>
                    <option>Volvo</option>
                    <option>BMW</option>
                </select><br /><br />
                <input type="checkbox" onChange={(e) => setCheck(e.target.checked)} /><br /><br />
                <button onClick={getData}>Submit</button>
            </form>
        </div>
    );

}
export default Form;