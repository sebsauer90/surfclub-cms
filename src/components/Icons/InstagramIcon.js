import * as React from "react"

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 80 80" {...props}>
      <path d="M79.8 23.5c-.2-4.3-.9-7.2-1.9-9.7-1-2.7-2.6-5.1-4.6-7.1-2-2-4.4-3.6-7.1-4.6-2.5-1-5.5-1.7-9.7-1.9C52.2 0 50.9 0 40 0S27.8 0 23.5.2c-4.3.2-7.2.9-9.7 1.9-2.7 1-5.1 2.6-7.1 4.6-2 2-3.6 4.4-4.6 7.1-1 2.5-1.7 5.5-1.9 9.7C.1 27.7 0 29.1 0 40s0 12.2.2 16.5c.2 4.3.9 7.2 1.9 9.7 1 2.7 2.6 5.1 4.6 7.1 2 2 4.4 3.6 7.1 4.6 2.5 1 5.5 1.7 9.7 1.9 4.3.1 5.6.2 16.5.2s12.2 0 16.5-.2c4.3-.2 7.2-.9 9.7-1.9 5.4-2.1 9.6-6.3 11.7-11.7 1-2.5 1.7-5.5 1.9-9.7.2-4.3.2-5.7.2-16.5s0-12.3-.2-16.5zm-7.2 32.6c-.2 3.9-.8 6-1.4 7.4-1.3 3.5-4.1 6.3-7.6 7.6-1.4.5-3.5 1.2-7.4 1.4-4.2.2-5.5.2-16.2.2s-12 0-16.2-.2c-3.9-.2-6-.8-7.4-1.4-1.7-.6-3.3-1.7-4.6-3-1.3-1.3-2.3-2.9-3-4.6-.5-1.4-1.2-3.5-1.4-7.4-.1-4.2-.1-5.4-.1-16.1s0-12 .2-16.2c.2-3.9.8-6 1.4-7.4.6-1.7 1.7-3.3 3-4.6 1.3-1.3 2.9-2.3 4.6-3 1.4-.5 3.5-1.2 7.4-1.4 4.2-.2 5.5-.2 16.2-.2s12 0 16.2.2c3.9.2 6 .8 7.4 1.4 1.7.6 3.3 1.7 4.6 3 1.3 1.3 2.3 2.9 3 4.6.5 1.4 1.2 3.5 1.4 7.4.2 4.2.2 5.5.2 16.2s-.1 11.9-.3 16.1z" />
      <path d="M40 19.4c-11.3 0-20.6 9.2-20.6 20.6S28.7 60.5 40 60.5s20.6-9.2 20.6-20.6S51.4 19.4 40 19.4zm0 33.9c-7.4 0-13.3-6-13.3-13.3s6-13.3 13.3-13.3c7.4 0 13.3 6 13.3 13.3S47.4 53.3 40 53.3zM66.2 18.6c0 2.6-2.1 4.8-4.8 4.8-2.6 0-4.8-2.1-4.8-4.8 0-2.7 2.1-4.8 4.8-4.8 2.6 0 4.8 2.2 4.8 4.8z" />
    </svg>
  )
}

export default SvgComponent
