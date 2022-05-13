import React from "react"
import PropTypes from "prop-types"

const Input = ({type = "text", size = "md", placeholder, label}) => {
  let rem
  switch(size){
    case "sm":
      rem = 1
      break
    case "lg":
      rem = 1.5
        break
    default: 
      rem = 1.2
  }
  const style = {
    padding: "6px 6px",
    border: "none",
    borderRadius: "4px",
    border: "2px solid teal"
  }
  return(
    <>
    <label> {label} </label>
    <input 
    type = {type}
    size = {size}
    placeholder = {placeholder}
    style = {style}
    />
    </>
    )
}
export default Input;
Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  //backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  type: PropTypes.oneOf(["text", "number", "url", "email" ]),
}