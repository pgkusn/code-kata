export function bald(x: string): [string, string] {
  const comments = ['Clean!', 'Unicorn!', 'Homer!', 'Careless!', 'Careless!', 'Careless!', 'Hobo!']
  const total = x.match(/\//g)?.length ?? 0
  return ['-'.repeat(x.length), comments[total >= comments.length ? comments.length - 1 : total]]
}