

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat nostrum et dolor laudantium odio iste magni libero doloremque vel impedit corporis ad veritatis quam tempore, architecto ducimus culpa, nulla sint repudiandae? Molestiae deserunt possimus, tempore magni fuga eum illo natus, asperiores sunt suscipit eveniet sint harum culpa cumque maiores quidem?
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