import Header from './view/components/global/header';
import  Register  from './view/pages/auth/register';
import Login from './view/pages/auth/login';
import Auth from './view/pages/auth';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Register />
      <Login /> */}
      <Auth />

    </div>
  );
}

export default App;
