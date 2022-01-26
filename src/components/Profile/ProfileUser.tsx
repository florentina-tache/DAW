import React from 'react';
// import { useParams } from 'react-router-dom';

import Profile from './Profile';

const ProfileUser = () => {
  //   const userId = useParams().userId;
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const responseData = await sendRequest(
  //         'http://localhost:5000/api/users/${userId}'
  //       );

  //       setLoadedUsers(responseData.users);
  //     } catch (err) {}
  //   };
  //   fetchUsers();
  // }, [sendRequest]);

  const USER = {
    id: 'u1',
    name: 'Catina Dobrescu',
    image:
      'https://yt3.ggpht.com/ytc/AKedOLSia4lcZzDalcjxzw_uUJ-MKNIkbbGUChMLb4AmFA=s900-c-k-c0x00ffffff-no-rj',
  };

  return <Profile id={USER.id} name={USER.name} image={USER.image} />;
};

export default ProfileUser;
