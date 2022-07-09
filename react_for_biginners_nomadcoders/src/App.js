import {useState, useEffect} from "react"

function Hello() {
  //방법1
  useEffect(() => {
    console.log("created :)")
    return () => console.log("destoryed :(") 
    // cleanup function : component가 destroy될 때 뭔가 할 수 있도록 해주는 것. 
  }, [])

  //방법2
  useEffect(function () {
    console.log("hi")
    return function () {
      console.log("bye")
    }
  }, [])
  return <h1>Hello</h1>
}
function App() {
  const [counter, setValue] = useState(0)
  const [keyword, setKeyword] = useState("")
  const [showing, setShowing] = useState(false)
  const onClickShow = () => setShowing((prev) => !prev)

  const onClick = () => setValue((prev) => prev + 1)
  const onChange = (event) => setKeyword(event.target.value)
  console.log("I run all the time")

  useEffect(() => {
    console.log("I run only once")
  }, [])
  useEffect(() => {
    console.log("I run when 'keyword' changes")
    if(keyword !== "" && keyword.length > 5) {
      alert(keyword)
      console.log("SEARCH FOR", keyword)
    }
  }, [keyword])
  useEffect(() => {
    console.log("I run when 'counter' changes")
  }, [counter])
  useEffect(() => {
    console.log("I run when 'keyword&counter' changes")
  }, [keyword, counter])
  
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me!</button>

      <div>
        {showing ? <Hello /> : null}
        <button onClick={onClickShow}>{showing ? "Hide" : "Show"}</button>
      </div>
      
    </div>
  );
}
export default App;
