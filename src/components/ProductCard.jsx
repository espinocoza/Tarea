export default function ProductCard({ name, price, category, image, description }) {
  return (
    <article className="product-card">
      <div className="image-wrap">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p className="category">{category}</p>
        <p className="price">
          ${Number(price).toFixed(2)}
        </p>
        {description && (
          <p className="description">{description}</p>
        )}
      </div>
    </article>
  )
}
