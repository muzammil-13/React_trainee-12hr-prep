import React from 'react';

const UserInfo=({name,age})=>{
  return(
    <div>
      <h1>User info:</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserInfo;