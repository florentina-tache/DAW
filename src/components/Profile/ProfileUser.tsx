import React from 'react';

import Profile from './Profile';

const ProfileUser = () => {
  const USER = {
    id: 'u1',
    name: 'Catina Dobrescu',
    image:
      'https://yt3.ggpht.com/ytc/AKedOLSia4lcZzDalcjxzw_uUJ-MKNIkbbGUChMLb4AmFA=s900-c-k-c0x00ffffff-no-rj',
  };

  return <Profile id={USER.id} name={USER.name} image={USER.image} />;
};

export default ProfileUser;
