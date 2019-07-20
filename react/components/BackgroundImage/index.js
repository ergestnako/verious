import React from "react"

function getStyle({ style, source }) {
  return Object.assign({}, style, {
    backgroundImage: `url('${source}')`,
  })
}

export default ({ children, style, source }) => (
  <div className="vs-background-image" style={getStyle({ style, source })}>
    {children}
  </div>
)
