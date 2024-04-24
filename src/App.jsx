import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todos" element={<TodoPage />} />
        </Routes>
    </Router>
  );
}

export default App;
