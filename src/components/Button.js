// components/Button.js
import PropTypes from "prop-types";
export default function Button({ label }) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {label}
    </button>
  );
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
};
