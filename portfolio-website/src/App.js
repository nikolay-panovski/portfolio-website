import HeaderGraphic from 'components/HeaderGraphic';
import './App.css';
import ImageAndTextExample from './components/ImageAndTextExample';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header ">
          <HeaderGraphic />
        </header>
        <main>
          <ImageAndTextExample />
        </main>
      </div>

      {/* Icons by icons8.com */}
    </>
  );
}

export default App;
