import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import "./components/assets/css/style.bundle.css"
import "./components/assets/plugins/global/plugins.bundle.css"
import HomeScreen from './components/home/HomeScren';
import LoginScreen from './components/user/LoginSceen';
import RegisterScreen from './components/user/RegisterScreen';
import ResetPassword from './components/user/ResetPassword';
import ForgetPassword from './components/user/ForgetPassword'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />}>
          </Route>
          <Route path="/login" element={<LoginScreen />}>
          </Route>
          <Route path="/register" element={<RegisterScreen />}>
          </Route>
          <Route path="/forgetPassword" element={<ForgetPassword />}>
          </Route>
          <Route path="/passwordReset" element={<ResetPassword />}>
          </Route>
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
