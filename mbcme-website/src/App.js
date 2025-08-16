import { 
  BrowserRouter as Router, 
  Route, 
  Routes
} from 'react-router-dom';
import Home from './Seiten/Home';
import Karriere from './Seiten/Jobangebote';
//import Contact from './Seiten/Kontakt';


function App() {
  return (
     <Router  class="bg-base-100 text-base-content" data-theme="dark">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/career" element={<Karriere />} />
            </Routes>
        </Router>
  );
}

export default App;
