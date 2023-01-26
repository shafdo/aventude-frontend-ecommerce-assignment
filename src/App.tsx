import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CheckoutPage from './components/pages/Checkout';
import Error404Page from './components/pages/Error404';
import HomePage from './components/pages/Home';
import LoginPage from './components/pages/Login';
import RegisterPage from './components/pages/Register';
import { Provider } from 'react-redux';
import { store } from './store';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/checkout" element={<CheckoutPage />}></Route>
            <Route path="*" element={<Error404Page />}></Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
