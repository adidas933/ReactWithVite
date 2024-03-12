import { Header } from "./Components/Header/Header"
import { Content } from "./Components/Content/Content"
import { Footer } from "./Components/Footer/Footer"
import './App.css'

function App() {

  return (
    <div className="app">
      <div>Hello from App</div>
      <Header text='Hello from Header'/>
      <Content number={111}/>
      <Footer text='Hello from Footer'/>
    </div>
  )
}

export default App;