import BrowserIcon from "../assets/features/browser.svg?react";
import CellPhoneIcon from "../assets/features/cell-phone.svg?react";
import CommentIcon from "../assets/features/comment.svg?react";
import EyeScannerIcon from "../assets/features/eye-scanner.svg?react";
import TelemarketerIcon from "../assets/features/telemarketer.svg?react";
import PenIcon from "../assets/features/pen.svg?react";
import App from "../assets/features/App.png";

export const aboutCards = [
  {
    title: "Craetive Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
  },
  {
    title: "Easy to Use",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
  },
  {
    title: "Best User Experience",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
  },
];

export const featuresCards = [
  {
    id: 1,
    type: "card",
    icon: CommentIcon,
    title: "Full free chat",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    span: "col-span-4 md:row-start-1 md:col-span-12",
  },
  {
    id: 2,
    type: "card",
    icon: BrowserIcon,
    title: "Unlimited Feautures",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    span: "col-span-4 md:row-start-2 md:justify-items-end md:text-right",
  },
  {
    id: 3,
    type: "card",
    icon: PenIcon,
    title: "Awesome UI design",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    span: "col-span-4 md:row-start-3 md:justify-items-end md:text-right",
  },
  {
    id: "app-image",
    type: "image",
    src: App,
    alt: "app-feautes",
    span: "col-span-4 place-self-center md:col-start-5 md-row-start-2 md:row-span-2",
  },
  {
    id: 4,
    type: "card",
    icon: CellPhoneIcon,
    title: "ISO & android version",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    span: "col-span-4 md:justify-items-start md:text-left",
  },
  {
    id: 5,
    type: "card",
    icon: EyeScannerIcon,
    title: "Retina ready graohics",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    span: "col-span-4 md:justify-items-start md:text-left",
  },
  {
    id: 6,
    type: "card",
    icon: TelemarketerIcon,
    title: "24/7 support by real people",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    span: "col-span-4 md:col-span-12",
  },
];
