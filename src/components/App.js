import React, {useState, useEffect} from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";


function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, SetContacts] = useState([]);

  const addContactHandler = (contact) => {
  SetContacts([...contacts, contact])
  }

  useEffect(()=>{
    const retrieveContacts =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts) SetContacts(retrieveContacts);

  }, []);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));

  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler = {addContactHandler} />
      {/* <ContactCard /> */}
      <ContactList  contacts={contacts}/> 
    </div>
  
  );
}

export default App;
