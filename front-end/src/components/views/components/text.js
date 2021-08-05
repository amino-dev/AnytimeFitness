import React, { Component } from 'react'
import { init } from 'ityped'
import "./css/text.css"

export default class Text extends Component {
  componentDidMount(){
    const text = document.querySelector('#text')
    init(text, { showCursor: false, strings: ['Votre coach sportif'] })
  }
  render(){
    return <div id="text" className="mb-5 text-center"></div>
  }
}