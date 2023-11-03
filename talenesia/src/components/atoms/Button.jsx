// TypeScript

// import React from 'react';

// interface ButtonProps {
//   text: string;
//   onClick: () => void;
// }

// const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
//   <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded">
//     {text}
//   </button>
// );

// export default Button;
import PropTypes from 'prop-types';

function Button({ label, onClick }) {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;

