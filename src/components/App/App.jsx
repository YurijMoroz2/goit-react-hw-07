import './App.css';
import reactLogo from './assets/react.svg'
import ContactForm from '../ContactForm/ContactForm';
import { SearchBox } from '../SearchBox/SearchBox';
import { ContactList } from '../ContactList/ContactList';

function App() {
  return (
    <div>
       <img src={reactLogo} className="logo react" alt="React logo" />

      <h1>Phonebook</h1>
      
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
