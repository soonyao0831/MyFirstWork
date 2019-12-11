import React from "react";
import ReactDOM from "react-dom";

import "/src/css/styles.css";

function HEADER() {
  return (
    <article>
      <br />
      <header>
        <figure>
          <img src="src/image/mainLogo.jpg" alt="a" width="304" height="228" />
        </figure>
      </header>
    </article>
  );
}
function NavigationBar() {
  return (
    <div class="navBar">
      <br />
      <nav>
        <ul class="nav justify-content-center">
          <li>
            <a href="https://cqkd7.csb.app/">Home</a>
          </li>
          <li>
            <a href="/css/">Portfolio</a>
          </li>
          <li>
            <a href="/js/">About</a>
          </li>
          <li>
            <a href="/jquery/">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
function App() {
  return (
    <div>
      <HEADER />
      <NavigationBar />
    </div>
  );
}

const rootElement = document.getElementById("container");
ReactDOM.render(<App />, rootElement);
