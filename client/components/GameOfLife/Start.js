import React from 'react'
import Radium from 'radium'

const styles = {
  button: {
    marginRight: '20px',
    cursor: 'pointer',
  }
}

let Start = ({start}) => {
  return (
    <button
      style={styles.button}
      className="btn btn-primary"
      onClick={start}>Start
    </button>
  )
}

Start.propTypes = {
  start: React.PropTypes.func.isRequired,
}

export default Start = Radium(Start)
