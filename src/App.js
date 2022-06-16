import { ThemeProvider } from '@mui/material/styles';
import theme from './Components/ui/Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Navbar from './Components/ui/Navbar';
import Home from './Containers/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' />
          <Route path='/customsoftware' />
          <Route path='/mobileapps' />
          <Route path='/websites' />
          <Route path='/revolution' />
          <Route path='/about' />
          <Route path='/contact' />
          <Route path='/estimate' />
        </Routes>
        {/* Home */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
