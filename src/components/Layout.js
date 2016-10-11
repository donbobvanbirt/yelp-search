import React, { Component } from 'react'

import { Link } from 'react-router'
import classNames from 'classnames'

export default class Layout extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Yelp Search!!</h1>

        <div className='center'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
