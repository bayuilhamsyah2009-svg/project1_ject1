import './App.css';
import Lebelnama from './componen/lebelnama';
import Lebelalamat from './componen/lebelalamat';

function App() {
  return (
    <div className="App">
     <h1>Profile</h1>
     <Lebelnama nama="handogol "/>
     <Lebelalamat alamat="jalan santo"/>
    </div>
  );
}

export default App;
