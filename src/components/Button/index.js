import React from 'react';

import { ButtonRegister } from './styles';

function Button(props) {
  return(
      <ButtonRegister>{props.value}</ButtonRegister>
  );
}

export default Button;