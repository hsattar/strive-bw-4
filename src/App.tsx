import { createTheme, ThemeProvider } from '@mui/material'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Register from './components/Register'
import ValidateUser from './components/ValidateUser'

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
          <Route path="/login"  element={ <Login /> } />
          <Route path="/register"  element={ <Register /> } />
          <Route path="/validate-user"  element={ <ValidateUser /> } />
          <Route path="*" element={ <NotFound /> }/>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}