export function generateUsers(count = 500, startId = 1) {
  const users = new Array(count).fill(null).map((_, i) => {
    const id = startId + i
    const name = `User ${id}`
    const email = `user${id}@example.com`
    const avatar = `https://i.pravatar.cc/150?img=${(i + 1) % 70 + 1}`
    const isOnline = Math.random() > 0.5
    return { id, name, email, avatar, isOnline }
  })
  return users
}
