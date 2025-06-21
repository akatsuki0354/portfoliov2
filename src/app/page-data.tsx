import { HomeIcon, Linkedin, Rocket, Contact2, User, Github } from "lucide-react";
export const DATA = {
  navbar: [
    { href: "#Home", icon: HomeIcon, label: "Home" },
    { href: "#About", icon: User, label: "About" },
    { href: "#Project", icon: Rocket, label: "Project" },
    { href: "#Contact", icon: Contact2, label: "Contact" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/akatsuki0354/",
        icon: Github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/franco-gregorio-1ba17a277/",
        icon: Linkedin,
      },
    },
  },
};