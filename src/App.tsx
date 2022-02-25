import { createTheme, ThemeProvider } from '@mui/material'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import PrivateRoute from './components/PrivateRoute'
import Register from './components/Register'
import { useSelector } from 'react-redux'
import FacebookLogin from './components/FacebookLogin'

export default function App() {

  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  const userTheme = useSelector((state: IReduxStore) => state.user.theme)

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={ userTheme === 'light' ? 'light-theme' : '' }> 
        <Routes>
          <Route path="/"  element={ <PrivateRoute><Home /></PrivateRoute> } />
          <Route path="/login"  element={ <Login /> } />
            <Route path="/register" element={<Register />} />
            <Route path="/facebook" element={<FacebookLogin />} />
            {/* <Route path="/facebook" element={<h1>facebook</h1>} /> */}
            <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      </Router>
    </ThemeProvider>
  )
}