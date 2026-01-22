const API = 'https://dummyjson.com/products?limit=100'

export async function fetchProducts() {
  const res = await fetch(API)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const data = await res.json()
  const items = Array.isArray(data?.products) ? data.products : []
  // Map DummyJSON shape to current UI shape
  return items.map(p => ({
    id: p.id,
    name: p.title,
    price: p.price,
    category: p.category,
    image: p.thumbnail,
    description: p.description,
  }))
}
