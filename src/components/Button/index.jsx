/* eslint-disable react/prop-types */
import { Container } from "./styles"

export function Button({ title, loading = false, ...rest }) {
  return (
    <Container type="button" disable={loading} {...rest}>
      {loading ? "Loading..." : title}
    </Container>
  )
}
