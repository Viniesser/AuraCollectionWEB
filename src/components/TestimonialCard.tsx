interface ITestimonialCardProps {
  profileImage: string;
  testimony: string;
  stars: number;
  name: string;
  role: string;
}

export default function TestimonialCard({
  profileImage,
  testimony,
  stars,
  name,
  role,
}: ITestimonialCardProps) {
  return (
    <div className="carousel-card">
      <img src={profileImage} alt={`Foto de ${name}`} />
      <span className="testimony">
        <p>{testimony}</p>
      </span>
      <span className="rating">
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} style={{ color: "#C9A84C", fontSize: "1.2rem" }}>★</span>
        ))}
        {Array.from({ length: 5 - stars }).map((_, i) => (
          <span key={i} style={{ color: "#ccc", fontSize: "1.2rem" }}>★</span>
        ))}
      </span>
      <span className="names">
        <p>{name}</p>
        <p>{role}</p>
      </span>
    </div>
  );
}
