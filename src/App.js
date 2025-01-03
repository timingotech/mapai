import './App.css';
import { Route, Routes } from 'react-router-dom';
import QuoteDetails from './Components/QuoteDetails';
import Navbar from './Components/NavBar';
import QuoteResponse from './Components/QuoteResponse';
import Response1 from './Components/Response1';
import RFQReview from './Components/RFQReview';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/procurement/quotes/quote-response1' element={<Response1/>}/>
        <Route path='/procurement/quotes/quote-response' element={<QuoteResponse/>}/>
        <Route path='/procurement/quotes/response-final' element={<RFQReview/>}/>
      <Route path='/procurement/quotes' element={<QuoteDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
