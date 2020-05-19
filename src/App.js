import React from 'react';
import CompA from './components/compA'
import CompB from './components/compB'
import store from './react-redux/store'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CompA />
        <CompB />
      </div>
    </Provider>
  );
}

export default App;
