import Brands from './components/brands/brands';
import Header from './components/header/header'
import Arrivals from './components/new arrivals/arrivals';
import Promo from './components/promo/promo'


function App() {


  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
    </div>
  );
}

export default App;
