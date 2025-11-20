import Header from './header/header'
import Footer from './footer/footer'
import Main from './main/main'
import './App.css'
import State from './statesAndEvents/state'
import Tab from './events/event' 


function App() {

  return (
    <>
    
   <Header message="this is a message "/>
   <Main sameed="My name is sameed" 
   fatherName="this is muhammad father and his father name is muhammad akbar"/>
    <State/>
    <Tab/>
   <Footer text=" this is our latest data"/>
  
   
    </>
  )
}

export default App
