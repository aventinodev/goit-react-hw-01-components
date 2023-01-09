import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import getColorIcon from 'components/utils/colorIcon';
import { FaCircle } from 'react-icons/fa';

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className={css.item}>
      <span className={css.status}>
        <FaCircle
          style={{
            fill: getColorIcon(isOnline),
            height: '1.5rem',
            width: '1.5rem',
          }}
        />
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
