import { Lamp } from './lamp'

describe('The Lamp: Revisited', () => {
  it('應該能建立指定顏色的燈泡，且初始狀態為關閉', () => {
    const lamp = new Lamp('red')
    expect(lamp.on).toBe(false)
    expect(lamp.color).toBe('red')
  })

  it('應該能透過 toggleSwitch 切換燈的狀態', () => {
    const lamp = new Lamp('blue')
    expect(lamp.on).toBe(false)

    lamp.toggleSwitch()
    expect(lamp.on).toBe(true)

    lamp.toggleSwitch()
    expect(lamp.on).toBe(false)
  })

  it('當燈開啟時，state 方法應該回傳 "The lamp is on."', () => {
    const lamp = new Lamp('green')
    lamp.toggleSwitch()
    expect(lamp.state()).toBe('The lamp is on.')
  })

  it('當燈關閉時，state 方法應該回傳 "The lamp is off."', () => {
    const lamp = new Lamp('yellow')
    expect(lamp.state()).toBe('The lamp is off.')
  })

  it('應該能多次切換燈的狀態', () => {
    const lamp = new Lamp('purple')

    lamp.toggleSwitch()
    expect(lamp.state()).toBe('The lamp is on.')

    lamp.toggleSwitch()
    expect(lamp.state()).toBe('The lamp is off.')

    lamp.toggleSwitch()
    expect(lamp.state()).toBe('The lamp is on.')
  })
})
