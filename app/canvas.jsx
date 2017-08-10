import React from 'react'
import { message } from 'antd'

export default class CanvasDemo extends React.Component {
  componentDidMount() {
    const canvas = document.querySelector('#stockGraph')
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = 'rgb(200,0,0)'
      ctx.fillRect(10, 10, 55, 50)
      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
      ctx.fillRect(30, 30, 55, 50)
      // drawing code here
    } else {
      message('要不换个浏览器？')
    }
  }

  render() {
    console.log('jhhh')
    return (
      <canvas id='stockGraph' width='150' height='150'>
        current stock price: $3.15 +0.15
      </canvas>
    )
  }
}