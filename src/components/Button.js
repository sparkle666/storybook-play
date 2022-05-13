import PropTypes from "prop-types"

function Button({ label, textColor = "white", backgroundColor = "red", size = "md", handleClick, onClick }) {
  let scale = 1
  if (size === "sm") scale = 0.75
  if (size === "lg") scale = 1.5
  const style = {
    backgroundColor,
    color: textColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    fontFamily: "Nunito Sans",
    cursor: "pointer",
    borderRadius: "3em"
  }
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  )
}

export default Button;

Button.proptypes = {
  label: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
  onClick: PropTypes.func
}
