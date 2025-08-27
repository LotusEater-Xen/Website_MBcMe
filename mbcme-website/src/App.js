import { 
  BrowserRouter as Router, 
  Route, 
  Routes
} from 'react-router-dom';
import Home from './Seiten/Home';
import Karriere from './Seiten/Jobangebote';
import Kontakt from './Seiten/Kontakt';

//App.js is the parent of all pages in the "Seiten" directory
//This is the component that gets rendered by index.js 



function App() {
  return (
     <Router  class="bg-base-100 text-base-content" data-theme="dark">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/career" element={<Karriere />} />
                <Route path="/contact" element={<Kontakt />} />
            </Routes>
        </Router>
  );
}

export default App;
