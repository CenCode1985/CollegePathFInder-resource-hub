function ResourceCard({
  title,
  category,
  description,
  action,
  link,
}) {
  return (
    <article className="resource-card">
      <p className="card-category">{category}</p>

      <h3>{title}</h3>

      <p>{description}</p>

      <strong>{action}</strong>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="resource-link"
      >
        Visit Resource
      </a>
    </article>
  );
}

export default ResourceCard;