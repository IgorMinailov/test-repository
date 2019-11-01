import React from "react"

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  path
}) => (
  <svg
    width={width}
    style={style}
    height={width}
  >
    <path fill={fill} d={path} />
  </svg>
)

export default SVG
