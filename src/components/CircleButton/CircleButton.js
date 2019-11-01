import React from "react"
import { Button } from "./CircleButton.styles"

function CircleButton(props) {
  return <Button onClick={props.onClick}>{props.children}</Button>
}

export default CircleButton
