import React, { useEffect, useState } from 'react'

function PrintUl() {
    const [obj, setobj] = useState({})
    const [printButtonClicked, setPrintButtonClicked] = useState(false);
    useEffect(() => {
        setobj(JSON.parse(localStorage.getItem("ClientDetail")))
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [])

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            printData();
        }
    };

    const printData = (e) => {
        setPrintButtonClicked(true);
        setTimeout(() => {
            window.print()
        }, 300);
        setTimeout(() => {
            setPrintButtonClicked(false)
        }, 300);
    }
    return (
        <>
            <div>name:-{obj.clientname}</div>
            {!printButtonClicked && <button onClick={printData}>Print</button>}
        </>
    )
}

export default PrintUl