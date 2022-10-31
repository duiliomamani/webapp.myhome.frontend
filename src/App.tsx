/* Imports */

/* Css */
import './App.scss';

import Footer from './pages/public/layout/footer';
import Header from './pages/public/layout/header';
import Home from './pages/public/layout/home';

const App = () => {
  return (
    <div className="page-top">
      <Header />
      <main key="main" className="bg-light">
        <Home/>
      </main>
      <Footer />
    </div >

  );
};

export default App;
