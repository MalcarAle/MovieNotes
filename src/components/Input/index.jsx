/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Container } from "./styles"

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon siz={20} />}
      <input {...rest} />
    </Container>
  )
}
