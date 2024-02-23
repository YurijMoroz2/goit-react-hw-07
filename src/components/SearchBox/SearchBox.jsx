import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';

export const SearchBox = () => {
  const dispatch = useDispatch();

  const filterId = useId();
  const handleChange = evt => {
    dispatch(filterContact(evt.target.value));
  };
  return (
    <div className={css.searchBox}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input type="text" name="userfilter" id={filterId} onChange={handleChange} />
      {/* <p>{filter}</p> */}
    </div>
  );
};
