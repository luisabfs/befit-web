import React from 'react';
import PropTypes from "prop-types";
import { BaseButton } from './styles';

function Button({ text, outlined }) {
  return (
    <BaseButton outlined={outlined}>
      {text}
    </BaseButton>
  );
}

Button.propTypes = {
  outlined: PropTypes.bool,
}

Button.defaultProps = {
  outlined: false,
}

export default Button;
