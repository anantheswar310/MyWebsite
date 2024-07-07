import { ReactComponent as FacebookIcon } from "../lib/icons/Facebook.svg";
import { ReactComponent as TumblrIcon } from "../lib/icons/Tumblr.svg";
import { ReactComponent as TwitterIcon } from "../lib/icons/Twitter.svg";
import { ReactComponent as GithubIcon } from "../lib/icons/github.svg";
import { ReactComponent as LinkedInIcon } from "../lib/icons/linked.svg";
import { ReactComponent as CameraIcon } from "../lib/icons/camera.svg";

export const social = [
  {
    socialIcon: <GithubIcon className="h-7 w-7 md:h-10 md:w-10 fill-white hover:fill-accent2"></GithubIcon>,
    socialLink: "https://github.com/anantheswar310",
    socialTitle: "Github"
  },
  {
    socialIcon: <LinkedInIcon className="h-7 w-7 md:h-10 md:w-10 fill-white hover:fill-accent2"></LinkedInIcon>,
    socialLink: "https://www.linkedin.com/in/ananth-eswar/",
    socialTitle: "LinkedIn"
  },
  {
    socialIcon: <CameraIcon className="h-7 w-7 md:h-10 md:w-10 fill-white hover:fill-accent2"></CameraIcon>,
    socialLink: "https://alphaphotons.com/",
    socialTitle: "Alpha Photons"
  },
];
