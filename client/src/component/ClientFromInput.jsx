import { Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../style/ClientFromInput.css'

function ClientFromInput() {
  const navigate = useNavigate()

  const [FormData, setFormData] = useState({
    clientname: '',
    address: '',
    mobile: "",
    sku: '',
  })

  const handalChnage = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const previewPage = () => {
    localStorage.setItem("ClientDetail", JSON.stringify(FormData));
    setTimeout(() => {
      navigate('/finalui')
    }, 500);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      previewPage();
    }
  };
  return (
    <>

      <div className="main-div1">
        <h1 className='heading'>Welcome To Blink Fashion</h1>
        <div className="container1">
          <div className="parent1">
            <form>
              <div className="input-div">
                <label className='labelforfrom'>Client Name:-</label>
                <Input placeholder="Name" name='clientname' value={FormData.clientname} onChange={handalChnage} onKeyDown={handleKeyPress} />
              </div>
              <div className="input-div">
                <label className='labelforfrom'>Client Address:-</label>
                <TextArea rows={4} name='address' placeholder="Enter Address" value={FormData.address} onChange={handalChnage} onKeyDown={handleKeyPress}  />
              </div>
              <div className="input-div">
                <label className='labelforfrom'>Client Mobile No:-</label>
                <Input placeholder="Enter Mobile Number" type='number' name='mobile' value={FormData.mobile} onChange={handalChnage}  onKeyDown={handleKeyPress} />
              </div>
              <div className="input-div">
                <label className='labelforfrom'>Product SKU:-</label>
                <Input placeholder="Enter SKU" name='sku' value={FormData.sku} onChange={handalChnage} onKeyDown={handleKeyPress} />
              </div>
            </form>
          </div>
          <div className="input-div">
            <button type='button' onClick={previewPage} className='printbtn'>
              Preview
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientFromInput