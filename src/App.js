import React from 'react';

// Components
import './App.css';
import Header from './Components/Header/Header'
import Search from './Components/Search/Search'


class App extends React.Component {

  render() {
    return (
      <div className="mainWrap">
        <Header/>
        <div className="container-fluid">
          <div className="row">
            <Search/>
          </div>
        </div>
      </div>
      
    );
  }
  
}

export default App;
