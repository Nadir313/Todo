import ToList from './components/ToList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='bg-info border border-2 fw-bolder text-dark m-2 p-2 w-100'>To Do List Using React</div>
        <ToList />
        {/* <Test /> */}
      </header>
    </div>
  );
}

export default App;
