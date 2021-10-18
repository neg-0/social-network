import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profiles from './components/Profiles';
import UserPicture from './components/UserPicture';
import Nav from './components/Nav';
import { Box } from '@mui/system';


function App() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Router>
        <header>
          <Nav />
        </header>
        <Switch>
          <Route path="/profiles/:id/profile-image" component={UserPicture} />
          <Route path="/profiles/:id" component={Profiles} />
          <Route path="/profiles" component={Profiles} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
