import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const caruselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">We are changing the way people shop</h1>
        <p className="max-x-xl text-lg mt-8 leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eum repudiandae laborum autem provident, iure atque vel voluptates consectetur molestiae neque nihil sunt veniam voluptatem, recusandae qui dicta placeat. Soluta.0</p>
        <div className="mt-10">
          <Link to={'/cart'} className="btn btn-primary uppercase">Our Product</Link>
        </div>
      </div>
      <div className="hidden lg:flex h-112 w-120  carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
        {caruselImages.map((images) => {
          return (
            <div key={images} className="carousel-item">
              <img
                src={images}
                alt="this is a image"
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
