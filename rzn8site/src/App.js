import React from 'react';
import './App.css';
import './assets/css/resonate.css'

function App() {
  return (
    <div className="row">
       
        <div className='col' id='publishing'>
          <a href='#'><h1>Publishing Services</h1></a>
        </div>
        <div className='col' id='print'>

<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">
  Launch static backdrop modal
</button>


<div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Hello
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
        <a href='#'><h1>Printing Services</h1></a>
        </div>
      {/* <header className="App-header">
        <h1>RZN8 Print and Publishing</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      
      
      </header> */}
    </div>
  );
}

export default App;
