import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar.jsx";
import Contacts from "./Components/Contacts.jsx";
import Posts from "./Components/Posts.jsx";
import Post from "./Components/Post.jsx";
import UserProfile from "./Components/UserProfile.jsx";

function App() {
  return (
    <div>
 
  <NavBar/>
  <UserProfile/>
  <Contacts/>
  <Posts/>
  
  
  </div>
)
}

export default App;
