export function setBackgroundColor(props) {
  switch (props.isOnline) {
    case true:
      return '#ff0000';
    case false:
      return '#00ff00';
    default:
      return '#ffffff';
  }
}
