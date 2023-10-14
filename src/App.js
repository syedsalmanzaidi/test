import { BrowserRouter , Routes , Route} from 'react-router-dom';


import { useState } from 'react';
import './App.css';
import About from './components/About';
import  Navbar  from "./components/Navbar";
import  Textform  from "./components/Textform";
import  Alert  from "./components/Alert";

import PropsTypes from 'prop-types'

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null)

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}



const changemode=()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743'
    showAlert("Dark mode have been Enabled","Success")
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("Light mode have been Enabled","Success")
  }
  
}

// Theme color
// const [theme, setTheme] = useState('light');
// const themechange=()=>{
//   if(theme==='light'){
//     setTheme('dark')
//     document.body.style.backgroundColor='red'
//   }
//   else{
//     setTheme('light')
//     document.body.style.backgroundColor='white'
//   }
// }
//theme color closede

  return (
    <>
      <BrowserRouter>
  <Navbar title="TextUtiles " mode={mode}  changemode={changemode} about="About us" />
  <Alert alert={alert}/>
    <Routes>
    <Route exact path='/' element={<Textform heading="Enter the text to analysis" showAlert={showAlert} mode={mode}/>} > </Route>
    <Route  path='/home' element={<Textform heading="Enter the text to analysis" showAlert={showAlert} mode={mode}/>} > </Route>
      <Route path='/about' element={  <About/>}></Route>
      
      

    
    </Routes>
  </BrowserRouter>
     
   
    
   
  </>


  );
}

export default App;

Navbar.PropsTypes={title: PropsTypes.string,
                  about: PropsTypes.string}
                  