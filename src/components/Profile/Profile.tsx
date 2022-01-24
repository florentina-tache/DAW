import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './Profile.css';

interface Props {
  id: string;
  image: string;
  name: string;
}

const Profile = ({ id, image, name }: Props) => {
  return (
    <li className='profile-item'>
      <div className='profile-item__image'>
        <Avatar image={image} alt={name} width={300} height={200} />
      </div>
      <div className='profile-item__info'>
        <h2>{name}</h2>
      </div>
    </li>
  );
};

export default Profile;
