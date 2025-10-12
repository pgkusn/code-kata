import _ from 'lodash/fp.js'

export function ipToNum(ip: string): number {
  return _.pipe(
    _.split('.'),
    _.map(
      _.pipe(
        Number,
        x => x.toString(2),
        x => x.padStart(8, '0')
      )
    ),
    _.join(''),
    _.parseInt(2)
  )(ip)
}

export function numToIp(x: number): string {
  return _.pipe(
    x => x.toString(2),
    x => x.padStart(32, '0'),
    _.split(''),
    _.chunk(8),
    _.map(_.pipe(_.join(''), _.parseInt(2))),
    _.join('.')
  )(x)
}
