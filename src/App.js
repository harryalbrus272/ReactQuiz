import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';



function App() {
  return (
    <div className="App">
      {/* <Header />
      <QuestionMover questions= { questions }/>
      <Footer /> */}
      <Welcome />
    </div>
  );
}

export default App;
