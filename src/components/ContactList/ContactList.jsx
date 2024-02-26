import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { IoPerson } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { deleteContact } from '../../redux/operations';
import { selectFilter } from '../../redux/selectors';

export const ContactList = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();
  return (
    <ul className={css.contactBox}>
      {filter.map(val => (
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
