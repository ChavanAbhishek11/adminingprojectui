import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';

import React from 'react'

export const Edit = ({ handleClick, id }) => {
  return (
    <FontAwesomeIcon
      id={id}
      icon={faPenToSquare}

      onClick={handleClick} />
  )
}

export const Delete = ({ handleClick, id }) => {
  return (
    <FontAwesomeIcon
      id={id}
      icon={faTrashAlt}
      style={{ color: '#fd250d' }}
      onClick={handleClick}
    />
  )
}
export const Save = ({ handleClick, id }) => {
  return (
    <FontAwesomeIcon icon={faSave} />
  )
}


