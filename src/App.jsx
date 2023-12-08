/* eslint-disable no-mixed-spaces-and-tabs */
import send from './send.jsx';

function App() {

  return (
    <>
      <div id="centered">
        <h1>Webhang</h1>
        <p id="name">Name</p>
		  <input id="jsusername1"></input>
		  <br></br>
		  <p id="aurl">Avatar URL</p>
		  <input id="jspfp1"></input>  
		  <br></br>
      <p id="urlxt">URL</p>
		  <input id="jsurl1"></input>
		  <br></br>
		  <p>Message</p>
		  <input id="jscontent1"></input>
		  <br></br>
		  <br></br>
		  <button onClick={setvar}>Send</button>
	</div>
      
      
    </>
  )
}
function setvar() {
  let content = document.getElementById("jscontent1").value;
  let username = document.getElementById("jsusername1").value;
  let profile = document.getElementById("jspfp1").value;
  let url = document.getElementById("jsurl1").value;
  send(username,profile,content,url)
}
export default App
