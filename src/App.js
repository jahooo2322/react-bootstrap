import React from 'react';
import Headers from './components/Headers'
import Article from './components/Article'
import Footer from './components/Footer'
import { Button } from 'reactstrap';

//<Button color="danger">Danger!</Button>

function App() {
  return (
    <div className="App">
  

<Headers/>
<Article/>
<Footer/>
  

    </div>
  );
}

export default App;
