import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Header from './components/Header';
import NotesPage from './pages/NotesPage';
import NotePage from './pages/NotePage';
import './App.css';


function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route element={<NotesPage />} path="/"/>
            <Route element={<NotePage />} path="/note/:id"/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
