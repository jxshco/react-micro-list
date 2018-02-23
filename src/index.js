import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ReactMicroList extends Component {
  render () {
    const { data, render, noResults } = this.props
    return (data.length ? <div>
      {data.map(this.props.render)}
    </div> : noResults)
  }
}

ReactMicroList.propTypes = {
  render: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  noResults: PropTypes.node
}

export default ReactMicroList
