import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import SecondComponent from "./components/SecondComponent";
import {useState} from "react";
import ListPosts from "./components/ListPosts";
import ListNotes from "./components/ListNotes";

function App() {

  return (
    <div className="App">
      <ListNotes/>
    </div>
  );
}

export default App;
