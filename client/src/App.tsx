import React from 'react';
import './App.css';
import FormComponent from './components/FormComponent';
import ResultPage from './containers/ResultPage';
import {Routes, Route, Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/result" element={<ResultPage />}> </Route>
          <Route path="/" element={<FormComponent />}> </Route>
        </Routes>
    </div>
  );
}

export default App;
