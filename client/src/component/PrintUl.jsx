import React, { useEffect, useState } from 'react'
import '../style/PrintUl.css'
import instagram from '../image/instagram.svg'
import whatsapp from '../image/whatsapp.svg'
import moment from 'moment';

function PrintUl() {
    const [obj, setobj] = useState({})
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

    const printData = () => {
        window.print()
    }
    return (
        <>
            <div className="main-div">
                <div className="container">
                    <div className="parent">
                        <div className="demo">
                            <div className="child">
                                BLINK_FASHION
                            </div>
                            <img src={require('../image/bd928175-88da-4acf-9d46-93ded5490f23.jpg')} className="img" alt="" />
                        </div>
                        <div className="child-2">
                            <div>
                                <span>Name:-</span><span>{obj.clientname}</span>
                            </div>
                            <div className='address'>
                                <span>Address:-</span>{obj.address}
                            </div>
                        </div>
                        <div className="child-5">
                            {obj.mobile}
                        </div>
                        <div className="child-6">
                            <p>Date:-{moment().format('DD/MM/YYYY')}</p>
                            <p>SKU-{obj.sku}</p>
                        </div>
                        <div className="child-3">
                            thank you for shopping
                        </div>
                        <div className="child-4">
                            <div className="abc" style={{ borderRight: "2px solid black" }}>
                                <div className='image-div'><img src={instagram} alt="" style={{ marginRight: "5px" }} /></div>
                                <div>@blinkfashion45</div>
                            </div>
                            <div className="abc">
                                <div className='image-div'> <img src={whatsapp} alt="" style={{ marginRight: '5px' }} /></div>
                                <div>@blinkfashion45</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-div">
                    <button onClick={printData} className='printbtn'>Print</button>
                </div>
            </div>


        </>
    )
}

export default PrintUl