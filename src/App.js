import logo from './image/logo-light.png';
import {useState} from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  const [search, setSearchTxt] = useState('');
  const handleTxtUpdate = (e) => {
     setSearchTxt(e.target.value);    
    };

  return (
    <div className="App">
      <nav className="container">
        <div className=" row">
          <div className="col-12">
          <Header/>
          </div> 
        </div>
      </nav>
      <main className="App-main m-auto col-md-7 col-sm-12">
        {search ? <h1 className="mb-4 display-3 w-50 text-success">{search}</h1> : <img src={logo} className="App-logo mb-4 w-50 " alt="logo"/> }
        <div className="search-box mb-4 w-100 px-3 position-relative">
          <input type="text" className="form-control  ps-5 rounded-pill position-relative" onChange = {handleTxtUpdate} />
              <svg className="a position-absolute " fill="#9aa0a6" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>             
            
            <a href="#">

              <svg class="goxjub" className="b position-absolute" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc04" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
            
            </a>
        </div>
        
        <div className="btns mb-4 d-flex justify-content-center w-75 col-sm-12">
          <button type="button" className=" btn btn-light fw-light text-black me-2 border-gray">Google Search</button>  
          <button type="button" className=" btn btn-light fw-light text-black ms-2 ">I'm Feeling Lucky</button>  
        </div>
        <div className="language pb-5 px-3">
          <span className="pe-3 ">Google offered in:</span>
          <a href="#" className="text-decoration-none">Hausa</a>
          <a href="#" className="text-decoration-none">Igbo</a>
          <a href="#" className="text-decoration-none">Èdè Yorùbá</a>
          <a href="#" className="text-decoration-none">Nigerian Pidgin</a>
        </div>
      </main>
      <footer class=" footer">
              <Footer/>
      </footer>
    </div>
  );
}

export default App;
