import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profiles from './components/Profiles';
import UserProfile from './components/UserProfile';
import UserPicture from './components/UserPicture';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/profiles/:id/profile-image" component={UserPicture} />
        <Route path="/profiles/:id" component={UserProfile} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
