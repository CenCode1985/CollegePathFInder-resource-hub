function ResourceCard({ title, category, description, action }) {
  return (
    <article className="resource-card">
      <p className="card-category">{category}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <strong>{action}</strong>
    </article>
  );
}

export default ResourceCard;
