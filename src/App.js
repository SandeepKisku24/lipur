
import './App.css';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import Header from './components/header';


function App() {
  return (
    <MantineProvider>
        <div className="App" style={{backgroundColor:"#000"}} >
            <Header/>
        </div>
    </MantineProvider>
  );
}

export default App;
