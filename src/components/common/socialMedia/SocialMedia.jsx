import {
  faBehance,
  faDribbble,
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faFacebookF, link: "https://www.facebook.com/share/15p8QKiMmn/" },
  // { icon: faDribbble, link: "#!" },
  {
    icon: faInstagram,
    link: "https://www.instagram.com/mn3j27a?igsh=N2x5eWRvbGNlY2xj",
  },
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/muhammad-nadeem-ashraf-60758b1a7",
  },
  // { icon: faBehance, link: "#!" },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <button
      key={index}
      onClick={() => window.open(item.link, "_blank", "noopener,noreferrer")}
      className="text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md"
    >
      <FontAwesomeIcon
        icon={item.icon}
        className="text-xl w-4.5 aspect-square"
      />
    </button>
  ));
};

export default SocialMedia;
