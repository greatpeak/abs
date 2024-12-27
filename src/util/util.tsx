import {
  PieChartIcon,
  UserCogIcon,
  LineChartIcon,
  LibraryIcon,
  HistoryIcon,
} from "lucide-react";
// import Facebook from "@/assets/svg/facebook.svg";
// import Linkedin from "@/assets/svg/linkedin.svg";
// import AbsLogoFooter from "@/assets/svg/footer_abs.svg";
// import Twitter from "@/assets/svg/footer_twitter.svg";
interface Link {
  name: string;
  icon: JSX.Element;
  url: string;
}
const BASE_URL = "https://www.abstechconnect.com";
interface LinksProp {
  title: string;
  links: Link[];
}

type Icon = {
  name: string;
  url: string;
};

export const pages: LinksProp[] = [
  {
    title: "Administration",
    links: [
      {
        name: "Dashboard",
        icon: <PieChartIcon size={20} />,
        url: "/entrepreneur",
      },

      {
        name: "Revenue",
        icon: <LineChartIcon size={20} />,
        url: "/entrepreneur/revenue",
      },

      {
        name: "Profile",
        icon: <UserCogIcon size={20} />,
        url: "/entrepreneur/profile",
      },

      {
        name: "Library",
        icon: <LibraryIcon size={20} />,
        url: "/entrepreneur/my-library",
      },

      {
        name: "Transactions",
        icon: <HistoryIcon size={20} />,
        url: "/entrepreneur/transactions",
      },
    ],
  },
];

export const HeaderPages = [
  { name: "Blog", url: "/" },
  { name: "Chat AI", url: "/chat-ai" },
  { name: "Library", url: "/library" },
  { name: "Entrepreneur", url: "/public-entrepreneur" },
  { name: "Partnership", url: "/partnership" },
  { name: "Advertise", url: "/advertise" },
  { name: "Contact Us", url: "/contact-us" },
  { name: "About Us", url: "/about-us" },
  { name: "Scholarship", url: "/scholarship" },
];

export const IconsFooter: Icon[] = [
  { name: "ABS", url: "https://example.com/x", },
  { name: "Twitter",  url: "https://example.com/x" },
  { name: "Facebook",  url: "https://facebook.com" },
  { name: "Linkedin",  url: "https://linkedin.com" },
];

export const FooterLinks = {
  Company: [
    { name: "Privacy Policy", url: `${BASE_URL}/privacy-policy` },
    { name: "Cookie Policy", url: `${BASE_URL}/cookie-policy` },
    { name: "Terms and Conditions", url: `${BASE_URL}/terms-conditions` },
    { name: "FAQ", url: `${BASE_URL}/faq` },
  ],
  Feature: [
    { name: "Entrepreneurship", url: `${BASE_URL}/entrepreneurship` },
    { name: "Chat AI", url: `${BASE_URL}/chat-ai` },
    { name: "Library", url: `${BASE_URL}/library` },
    { name: "Campus News", url: `${BASE_URL}/campus-news` },
  ],
  Product: [
    { name: "Help Center", url: `${BASE_URL}/help-center` },
    { name: "Make Enquiries", url: `${BASE_URL}/make-enquiries` },
  ],
};
