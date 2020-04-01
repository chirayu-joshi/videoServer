import React from 'react';
import { Redirect } from 'react-router-dom';

const signOut = props => {
  if (localStorage.getItem('userTokenTime')) {
    localStorage.removeItem('userTokenTime');
  }
  return <Redirect to="/signIn" />;
}

export default signOut;
