import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { IoPerson } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { deleteContact } from '../../redux/operations';
// import { deleteContact } from '../../redux/contactsSlice';

export const ContactList = () => {
  const addContact = useSelector(state => state.contactsReducer.contacts.items);
  // const filter = useSelector(state => state.filtersReducer.filters.name);
// console.log(addContact);
  // const filteredContacts = addContact.filter(user =>
  //   user.name.toLowerCase().includes(filter.toLowerCase())
  // );

  const dispatch = useDispatch();
  return (
    <ul className={css.contactBox}>
      {addContact.map(val => (
        <li key={val.id} className={css.contactBoxItem}>
          <div className={css.contactBoxContact}>
            <div>
              <p className={css.contactBoxName}>
                <IoPerson /> {val.name}
              </p>
              <p className={css.contactBoxNumber}>
                <BsFillTelephoneFill /> {val.phone}
              </p>
            </div>
            <button
              type="button"
              className={css.contactBoxButton}
              onClick={() => dispatch(deleteContact(val.id))}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
