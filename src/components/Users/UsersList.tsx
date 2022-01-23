import React from 'react';

import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';
import './UsersList.css';

interface Props {
  items: Array<object>;
}

const UsersList = ({ items }: Props) => {
  if (items.length === 0) {
    return (
      <div className='center'>
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className='users-list'>
      {items.map((user: any) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
        />
      ))}
    </ul>
  );
};

export default UsersList;
