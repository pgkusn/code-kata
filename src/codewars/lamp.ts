class Lamp {
  color: string
  on = false

  constructor(color: string) {
    this.color = color
  }

  toggleSwitch() {
    this.on = !this.on
  }

  state() {
    return this.on ? 'The lamp is on.' : 'The lamp is off.'
  }
}

export { Lamp }
