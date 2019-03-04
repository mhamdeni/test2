import React, { Component } from "react";
import $ from 'jquery';
import "./App.css";
import interactiveImageJS from "../interactive-image"

class App extends Component {
  componentDidMount() {
    var items = [
      {
        type: "text",
        title: "Fur",
        description: "The fur of clouded leopards is...",
        position: {
          left: 100,
          top: 50
        }
      }
    ];
    var options = {
      debug: true // debug messages are visible in console
  };

    window.interactiveImageJS.fn.interactiveImage(items,options)
   
  
  
    const script = document.createElement("script");
    script.setAttribute("src", "node_modules/interactiveimagejs/dist/interactive-image.js");

    document.body.appendChild(script);
  }
  render() {
    
    return (
      <div id="my-interactive-image"></div>
      // $(document).ready(function() {
      //   $(".interactive-image").interactiveImage(items);
      // });
      // <div className="parent">
      // <div class="iactiveImg" data-ii="3544"></div>
      // </div>
    );
  }
}

export default App;
