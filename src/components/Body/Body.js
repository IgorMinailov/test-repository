import React from "react"
import { Container } from "./Body.styles"

function Body(props) {
  return <Container isOpen={props.isOpen}>{props.children}</Container>
}

export default Body
