import React from "react"
import { ContainerLayout } from "./Container.styles"

function Container(props) {
  return <ContainerLayout>{props.children}</ContainerLayout>
}

export default Container
