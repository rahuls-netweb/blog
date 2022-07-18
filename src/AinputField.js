
import React, { useEffect, useRef, useState } from 'react';

const getData = () => [1, 2, 33, 4, 56, 7, 8];

function InputF() {
    const [data, setData] = React.useState(null);
    const [print, setPrint] = React.useState(false);
    const inputRef = useRef();

    const [serverData, setServerData] = useState([]);

    useEffect(() => {
        setServerData(getData());
    }, [])

    const onHitValue = (value, index) => {
        const copyServerData = [...serverData];

        // setServerData(prev => {
        //     .....
        // })
        copyServerData[index] = value
        setServerData(copyServerData);
    }

    return (
        <>
            {serverData.map((data, index) => {
                return <input type="text" value={serverData[index]} onChange={(e) => onHitValue(e.target.value, index)} />
            })}

            <button onClick={() => console.log(serverData)}>Print</button>
        </>

    );
}


export default InputF