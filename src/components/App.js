import React, {useState} from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";


function App() {
  const [contacts, SetContacts] = useState([]);
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      {/* <ContactCard /> */}
      <ContactList  contacts={contacts}/> 
    </div>
  
  );
}

export default App;
