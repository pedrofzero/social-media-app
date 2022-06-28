import './App.css';
import { Box } from '@mui/material';
import Router from './router';
import { store } from 'redux/index'


function App() {
  return (
      <Box sx={{px: 1, py: 1}}>
        <Router />
      </Box>
  );
}

export default App;
