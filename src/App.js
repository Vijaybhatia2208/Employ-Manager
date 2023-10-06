import Dashboard from './components';

function App({ store }) {
  return (
    <div className="App">
      <Dashboard store={store} />
    </div>
  );
}

export default App;