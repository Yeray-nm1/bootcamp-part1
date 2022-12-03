import './App.css';
import Mensaje from './Mensaje.js'


const Description = () => {
  return <p>Esta es la app del curso fullstack</p>
}

function App() {
  return (
    <div className="App">
      <Mensaje color='red' msg='Estamos trabajando' />
      <Mensaje color='green' msg='En un curso' />
      <Mensaje color='blue' msg='De react' />
      <Description />
    </div>
  );
}

export default App;
