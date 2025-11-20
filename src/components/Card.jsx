import "../styles/components/card.css";

const Card = ({ title, description, image, viewProject, viewCode }) => (
  <div className="card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>

    <div className="card-btn-group">
      <a href={viewProject} target="_blank" rel="noreferrer" className="card-btn">
        View Project
      </a>
      <a href={viewCode} target="_blank" rel="noreferrer" className="card-btn">
        View Code
      </a>
    </div>
  </div>
);

export default Card;
