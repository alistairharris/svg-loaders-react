import React from 'react'
import image from './grid.svg'
import SVGInline from 'react-svg-inline'

export class Grid extends React.Component {
  render() {
    return(
      <SVGInline svg={image} {...this.props} />
    )
  }
}
