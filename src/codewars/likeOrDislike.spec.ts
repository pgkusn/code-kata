import { likeOrDislike } from './likeOrDislike'

describe('Likes Vs Dislikes', () => {
  it('應返回最終按鈕狀態', () => {
    expect(likeOrDislike(['Dislike'])).toBe('Dislike')
    expect(likeOrDislike(['Like', 'Like'])).toBe('Nothing')
    expect(likeOrDislike(['Dislike', 'Like'])).toBe('Like')
    expect(likeOrDislike(['Like', 'Dislike', 'Dislike'])).toBe('Nothing')
    expect(likeOrDislike(['Dislike', 'Dislike'])).toBe('Nothing')
    expect(likeOrDislike(['Like', 'Like', 'Like'])).toBe('Like')
    expect(likeOrDislike(['Like', 'Dislike'])).toBe('Dislike')
    expect(likeOrDislike(['Dislike', 'Like', 'Dislike'])).toBe('Dislike')
    expect(
      likeOrDislike(['Like', 'Like', 'Dislike', 'Like', 'Like', 'Like', 'Like', 'Dislike'])
    ).toBe('Dislike')
    expect(likeOrDislike([])).toBe('Nothing')
  })
})
