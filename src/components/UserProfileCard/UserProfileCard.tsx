import React from 'react';
import type { UserProfileCardProps } from '../../types';

 
export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail,
  showRole,
  onEdit
}) => {
  return (
    <div className={"user-profile"}>
      <div className=" flex flex-col justify-between items-center row-start-2">
        <h1>{user.name}</h1>
        <p>{showEmail? user.email: null}</p>
        <p>{showRole? user.role: null}</p>
        <button className='bg-blue-300 border-blue-500 text-blue-700'onClick = {() => {onEdit?.(user.id)}}>Edit Profile</button>
      </div>
    </div>
  );
};