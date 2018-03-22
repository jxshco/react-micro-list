import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ReactMicroList extends Component {
  render () {
    const { data, render, noResults, loading, loadingComponent, ...rest } = this.props
    if (loading) {
      return loadingComponent
    }
    return data.length ? <div {...rest}>
      {data.map(this.props.render)}
    </div> : noResults ? noResults : null
  }
}

ReactMicroList.propTypes = {
  render: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  noResults: PropTypes.node
}

export default ReactMicroList
