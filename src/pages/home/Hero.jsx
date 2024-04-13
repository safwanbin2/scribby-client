import hero from "../../assets/hero.json";
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <div className="min-h-screen w-full ">
      <div className="h-full w-11/12 mx-auto grid grid-cols-2 justify-center items-center">
        <div className="bg-primary">
          <Lottie loop={true} animationData={hero} />
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          itaque iste assumenda nostrum ea, labore amet vero iusto. Ea,
          exercitationem. Natus id, ex tempore odio voluptates, possimus ut quas
          ducimus illo harum dolorum. Vitae fugit atque incidunt, nostrum quo
          suscipit sint omnis quas soluta. Mollitia veniam tempore minus, eius
          vitae quisquam ipsam at pariatur quae laboriosam sapiente perferendis
          eligendi impedit eum fuga consectetur eos maiores molestias illo ipsum
          minima. Qui distinctio molestiae a reiciendis doloremque. Unde, ipsum
          repellendus sapiente vel reiciendis ex veritatis numquam ducimus,
          adipisci cupiditate enim distinctio, autem quia dolorej quod id
          laborum possimus itaque ut nisi corrupti!
        </div>
      </div>
    </div>
  );
};

export default Hero;
