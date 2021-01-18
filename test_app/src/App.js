import logo from './logo.svg';
import './App.css';

function Graham() {
  return (
    <div>
      <h1 align="center">My name is Graham!</h1>
      <h1 align="center">(That's not me...it's Bruce Lee.)</h1>
    </div>
  )
}

function App() {
  const Url = 'https://jsonplaceholder.typicode.com/posts/4';

        var tester3 = {}

        fetch(Url)
            .then(response => response.json())
            .then(data => {
                
                var z = document.getElementById("testerPic") 
                z.src = "https://cdn.britannica.com/s:250x250,c:crop/18/66018-050-AA222E0F/Bruce-Lee-scene-Enter-the-Dragon-1973.jpg"

                var y = document.getElementById("tester2")
                y.innerHTML = data.title
                
                tester3.title = data.title

                var x = document.getElementById("tester")
                x.innerHTML = data.body
            }).catch(error => {
                console.log(error)
                
            });

        function myFunction() {
            alert(tester3.title)
        }

        function changeTitle() {
            tester3.title = "Karate Kid"
        }

        function postBack() {
            fetch('https://jsonplaceholder.typicode.com/posts', 
            {method: "POST", 
            body: JSON.stringify(tester3)})
        }
  return (
    <div className="App">
      <img id="testerPic" src=""/>
      <h1 id="tester2"></h1>
      <p id="tester"></p>
      <button onClick={myFunction}>Click me</button>
      <button onClick={changeTitle}>Click me too</button>
      <button onClick={postBack}>Click me to post</button>

    </div>
  );
}

export {App, Graham};
