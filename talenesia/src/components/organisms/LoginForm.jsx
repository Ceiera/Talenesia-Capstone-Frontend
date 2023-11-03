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


import { useState } from 'react';
import FormInput from '../molecules/FormInput';
import Button from '../atoms/Button';
import PropTypes from 'prop-types';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      onLogin(email, password);
    }
  };

  return (
    <div>
      <FormInput label="Email" type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <FormInput label="Password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button label="Login" onClick={handleLogin} />
    </div>
  );
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;



