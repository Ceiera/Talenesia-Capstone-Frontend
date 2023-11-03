import Input from '../atoms/Input';
import PropTypes from 'prop-types';

function FormInput({ label, type, placeholder, value, onChange }) {
  return (
    <div className="mb-2">
      <label className="block">{label}</label>
      <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

export default FormInput;

