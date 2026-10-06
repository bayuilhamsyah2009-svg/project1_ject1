import './App.css';
import Button1 from './componen/button1';
import Lebelnama from './componen/lebelnama';
import Lebelalamat from './componen/lebelalamat';
function App() {
  return (
    <div className="App">
     <h1>Profile</h1>
     <Lebelnama nama="handogol "/>
     <Lebelalamat alamat="jalan santo"/>
     <Button1/>
    </div>
  
  );
}

export default App;
