import * as R from 'ramda'

export function catalog(s: string, article: string): string {
  const formatString = (target: string) => (str: string) => {
    const regex = /<prod><name>(.+)<\/name><prx>(.+)<\/prx><qty>(.+)<\/qty><\/prod>/g

    const [, productName = ''] = regex.exec(str) || []
    if (!productName.includes(target)) return ''

    return str.replace(regex, '$1 > prx: $$$2 qty: $3')
  }

  const result = R.pipe(
    R.split('\n\n'),
    R.map(formatString(article)),
    R.filter(Boolean),
    R.join('\n')
  )(s)
  return result ? result : 'Nothing'
}