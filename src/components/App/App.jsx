import './App.css';
import reactLogo from './assets/react.svg'
import ContactForm from '../ContactForm/ContactForm';
import { SearchBox } from '../SearchBox/SearchBox';
import { ContactList } from '../ContactList/ContactList';
import { fetchContacts } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const {items,loading,error} = useSelector(state=>state.contactsReducer.contacts);
// console.log(loading);
  useEffect(()=>{
    
  
    dispatch(fetchContacts());
  },[dispatch])
  
  return (
    <div>
       <img src={reactLogo} className="logo react" alt="React logo" />

      <h1>Phonebook</h1>
      
      <ContactForm />
      <SearchBox />
      {loading&&<p>LOADING.....</p>}
      {error!==null&&<p>{error}</p>}
      {items.length>0&& <ContactList />}
      
    </div>
  );
}

export default App;
