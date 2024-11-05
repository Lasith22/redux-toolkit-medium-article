import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../components/features/user';

const Login = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(
            login({
              name: 'Sahan Kalpana',
              age: 40,
              email: 'sahan@gamil.com',
            }),
          );
        }}
      >
        Login
      </button>
    </>
  );
};

export default Login;
