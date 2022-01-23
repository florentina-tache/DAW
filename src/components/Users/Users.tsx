import React from 'react';

import UsersList from './UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Catina Dobrescu',
      image:
        'https://yt3.ggpht.com/ytc/AKedOLSia4lcZzDalcjxzw_uUJ-MKNIkbbGUChMLb4AmFA=s900-c-k-c0x00ffffff-no-rj',
    },
    {
      id: 'u2',
      name: 'Oana Popescu',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Gigi_Hadid._2015.jpg/800px-Gigi_Hadid._2015.jpg',
    },
    {
      id: 'u3',
      name: 'Andrei Grigore',
      image:
        'http://storage0.dms.mpinteractiv.ro/media/1/1481/21454/18106910/1/rs-1024x759-170718132117-1024-ryan-reynolds-cm-71817.jpg',
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
