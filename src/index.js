import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ReactMicroList extends Component {
  renderItem = (item) => this.props.render(item)
  render () {
    const { data, render, ...rest } = this.props
    return (<div {...rest}>
      {data.map(this.renderItem)}
    </div>)
  }
}

ReactList.propTypes = {
  render: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
}

export default ReactMicroList
