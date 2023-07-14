/* eslint-disable react/prop-types */
import { Container } from "./styles"

import { VscStarFull, VscStarEmpty } from "react-icons/vsc"

export function Rating({ grade, isBigSize }) {
  let star = []

  for (let i = 1; i <= 5; i++) {
    if (i <= grade) {
      star.push(<VscStarFull key={i} />)
    } else {
      star.push(<VscStarEmpty key={i} />)
    }
  }

  return <Container isBigSize={isBigSize}>{star}</Container>
}
