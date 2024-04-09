import { Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function ClientFromInput() {
  const navigate = useNavigate()

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [])

  const [FormData, setFormData] = useState({
    clientname: '',
    address: '',
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
      <div style={{ width: '50%', margin: '0 auto' }}>
        <div style={{ margin: '10px 0' }}>
          <Input placeholder="Name" name='clientname' value={FormData.clientname} onChange={handalChnage} />
        </div>
        <div style={{ margin: '10px 0' }}>
          <TextArea rows={4} name='address' placeholder="Enter Address" value={FormData.address} onChange={handalChnage} />
        </div>
        <div style={{ margin: '10px 0' }}>
          <Input placeholder="Enter SKU" name='sku' value={FormData.sku} onChange={handalChnage} />
        </div>
        <div className="div">
          <button type='button' onClick={previewPage}>
            Preview
          </button>
        </div>
      </div>
    </>
  )
}

export default ClientFromInput