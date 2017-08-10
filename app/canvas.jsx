import React from 'react'
import { message } from 'antd'

export default class CanvasDemo extends React.Component {
  componentDidMount() {
    const canvas = document.querySelector('#stockGraph')
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d')
      ctx.beginPath()
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true)
      ctx.moveTo(110, 75)
      ctx.arc(75, 75, 35, 0, Math.PI, false)
      ctx.moveTo(65, 65)
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true)
      ctx.moveTo(95, 65)
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true)
      ctx.stroke()


      // ctx.beginPath()
      // ctx.arc(75, 75, 50, 0, Math.PI * 2, true) // 绘制
      // ctx.moveTo(110, 75)
      // ctx.arc(75, 75, 35, 0, Math.PI, false) // 口(顺时针)
      // ctx.moveTo(65, 65)
      // ctx.arc(60, 65, 5, 0, Math.PI * 2, true) // 左眼
      // ctx.moveTo(95, 65)
      // ctx.arc(90, 65, 5, 0, Math.PI * 2, true) // 右眼
      // ctx.stroke()

      // ctx.beginPath()
      // ctx.moveTo(75, 50)
      // ctx.lineTo(100, 75)
      // ctx.stroke(100, 25)
      // ctx.fill()

      // ctx.fillRect(25, 25, 100, 100)
      // ctx.clearRect(45, 45, 60, 60)
      // ctx.strokeRect(50, 50, 50, 50)

      // ctx.fillStyle = 'rgb(200,0,0)'
      // ctx.fillRect(10, 10, 55, 50)
      // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
      // ctx.fillRect(30, 30, 55, 50)
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