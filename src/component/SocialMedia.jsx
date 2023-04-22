import { BsTwitter } from "react-icons/bs";
//import { FaFacebookF } from "react-icons/fa"
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="">
      <div>
        <a href="https://github.com/stanleynzegwu">
          <FaGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/nzegwu-stanley/">
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://twitter.com/STANN_NZ">
          <BsTwitter />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
