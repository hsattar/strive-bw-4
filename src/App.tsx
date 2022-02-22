import { createTheme, ThemeProvider } from '@mui/material'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import PrivateRoute from './components/PrivateRoute'
import Register from './components/Register'

export default function App() {

  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/"  element={ <Home /> } />
          {/* <Route path="/"  element={ <PrivateRoute><Home /></PrivateRoute> } /> */}
          <Route path="/login"  element={ <Login /> } />
          <Route path="/register"  element={ <Register /> } />
          <Route path="*" element={ <NotFound /> }/>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}