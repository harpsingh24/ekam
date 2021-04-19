import RouterList from './pages/ekam/routerList/RouterList';

import Header from './pages/ekam/header/Header';
import Footer from './pages/ekam/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <RouterList />
      </div>
      <Footer />
    </>
  );
}

export default App;
