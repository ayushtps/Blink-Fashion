import ClientFromInput from "./component/ClientFromInput";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrintUl from "./component/PrintUl";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/clientform' />} />
          <Route path='/clientform' element={<ClientFromInput />} />
          <Route path='/finalui' element={<PrintUl />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
