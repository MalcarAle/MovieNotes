/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FiPlus, FiX } from "react-icons/fi"

import { Container } from "./styles"

export function MovieItem({ isNew, value, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button type="button" className={isNew ? "button-add" : "button-delete"}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
