import * as React from "react"

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 80 80" {...props}>
      <path d="M25.2 79.2l37.3-37.3c.5-.5.8-1.1.8-1.8s-.3-1.3-.8-1.8L25.2.8C24.6.3 24 0 23.3 0s-1.3.3-1.8.8l-4 4c-.5.6-.8 1.2-.8 1.9s.3 1.3.8 1.8L49 40 17.5 71.5c-.5.5-.8 1.1-.8 1.8s.3 1.3.8 1.8l4 4c.5.5 1.1.8 1.8.8.7.1 1.3-.2 1.9-.7z" />
    </svg>
  )
}

export default SvgComponent
