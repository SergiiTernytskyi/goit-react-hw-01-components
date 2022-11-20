export function setBackgroundColor(props) {
  switch (props.isOnline) {
    case true:
      return '#f00';
    case false:
      return '#0f0';
    default:
      return '#000';
  }
}
