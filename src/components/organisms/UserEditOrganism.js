// src\components\organisms\UserEditOrganism.js
import React from 'react';
import UserEditFormMolecule from '../molecules/UserEditFormMolecule';

const UserEditOrganism = ({ user, onUpdate }) => {
  return (
    <UserEditFormMolecule user={user} onUpdate={onUpdate} />
  );
};

export default UserEditOrganism;
