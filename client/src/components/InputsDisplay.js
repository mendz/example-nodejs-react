import React from 'react';
import { getStar, getX } from '../utils/getEmojis';

const InputsDisplay = ({ name, url, isStar }) => (
  <p>
    <strong>Name:</strong>{` "${name}"`}
    <br />
    <strong>URL:</strong>{` "${url}"`}
    <br />
    <strong>Started:</strong>{` ${isStar ? getStar() : getX()}`}
  </p>
)

export default InputsDisplay;