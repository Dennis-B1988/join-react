import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LogInPage from './components/Authentication/LogInPage/LogInPage';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element=<LogInPage /> />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
