// import React, { useState } from 'react';
// import Input from '../atoms/Input';
// import Button from '../atoms/Button';

// const LoginForm: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Handle login logic here
//   };

//   return (
//     <div>
//       <Input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <Input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <Button text="Login" onClick={handleLogin} />
//     </div>
//   );
// };

// export default LoginForm;

import {useState} from 'react';
import FormInput from '../molecules/FormInput';
import Button from '../atoms/Button';
import PropTypes from 'prop-types';

function LoginForm({onLogin}) {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  const handleLogin = () => {
    if (email && password) {
      onLogin (email, password);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 text-center">Talenesia Account Login</h1>
      <form onSubmit={handleLogin}>
        <FormInput
          label="Email"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail (e.target.value)}
        />
        <FormInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={e => setPassword (e.target.value)}
        />
        <Button
          label="Login"
          type="submit"
          className="w-[648px] h-[50px] rounded-3xl text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-teal-600 border-2 border-blue-950 text-white hover:text-slate-100 hover:bg-teal-550 active:bg-teal-800 active:text-teal-100 focus-visible:outline-teal-600"
        />
      </form>
    </div>
  );
}
LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
