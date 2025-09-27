export function baublesOnTree(baubles: number, branches: number): number[] | string {
  if (!branches) return 'Grandma, we will have to buy a Christmas tree first!'
  const tree = Array(branches).fill(0)
  for (let i = 0, balls = baubles; balls > 0; i++) {
    balls--
    tree[i % tree.length]++
  }
  return tree
}