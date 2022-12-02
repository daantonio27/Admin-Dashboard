// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";
import img4 from "../imgs/img4.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Commandes",
  },
  {
    icon: UilUsersAlt,
    heading: "Clients",
  },
  {
    icon: UilPackage,
    heading: 'Produits'
  },
  {
    icon: UilChart,
    heading: 'Analyse'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Ventes",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "55 000",
    png: UilUsdSquare,
    series: [
      {
        name: "Ventes",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenu",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "24 250",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Dépenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4 270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Dépenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "a commandé Apple smart watch 2500mh batterie.",
    time: "Il y a 25 secondes",
  },
  {
    img: img2,
    name: "Da Antonio",
    noti: "a reçu Samsung gadget pour charger la batterie.",
    time: "Il y a 30 secondes",
  },
  {
    img: img3,
    name: "Sarah Karren",
    noti: "a commandé Apple smart watch, samsung Gear 2500mh batterie.",
    time: "Il y a 2 heures",
  },
];
