

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          "You Deserve A Beautiful Smile"
        </p>
        <p>
        Dentistry plays a crucial role in maintaining oral health, preventing diseases, and enhancing smiles. It relieves pain, treats conditions like cavities and gum disease, and improves overall well-being. By boosting confidence and promoting hygiene, dentistry contributes significantly to quality of life and the prevention of systemic health issues.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  )
}

export default Hero