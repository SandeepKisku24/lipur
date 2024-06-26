
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { createTheme, Group, MantineProvider, Stack, Title } from '@mantine/core';
import '@mantine/core/styles.css';
import Header from './components/header';
import Home from './home';


function App() {
  return (
    <MantineProvider>
        <div className="App" style={{backgroundColor:"#000"}} >
            <Router>
            <Group style={{ height: '100vh', alignItems: 'flex-start', margin: 0, padding: 0 }}>
                <div style={{ width: '25%', margin: 0, padding: 0 }}>
                    <Header />
                </div>
              
                <Routes>
                        <Route exact path="/" element={<Home />} />
                </Routes>
            </Group>
            

            </Router>
        </div>
    </MantineProvider>
  );
}

export default App;
