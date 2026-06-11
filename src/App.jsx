import './App.css'
import H1 from './Components/h1'
import Input from './Components/Input'
import Paragraph from './Components/Paragraph'

function App() {
  let num = 4
  let arr = ["Demetre", "Ani", "Mariami"]
  let str = "Hello"
  let obj = {
        name: "Elene",
        age: 16
  }
function NewFunc(){
  return "this is a function"
}
  return (
    <>
    <H1 />
    <Input />
    <Paragraph />
    <h4>{num}</h4>
    <h4>{arr}</h4>
    <h4>{str}</h4>
    <h5>{obj.name}</h5>
    <h5>{obj.age}</h5>
    <h5>{NewFunc()}</h5>
    

    </>
  )
}

//კომპონენტი საშუალებას გვაძლევს კოდი დავყოთ დამოუკიდებელ ნაწილებად და შემდეგ ეს ნაწილები მრავალჯერ გამოვიყენოთ


export default App
