import { ReactComponent as JavaScriptIcon } from "../lib/icons/JavaScript.svg";
import { ReactComponent as HtmlIcon } from "../lib/icons/Html.svg";
import { ReactComponent as PhotoshopIcon } from "../lib/icons/Photoshop.svg";
import { ReactComponent as WordPressIcon } from "../lib/icons/WordPress.svg";
import { ReactComponent as MicrosoftIcon } from "../lib/icons/microsoft.svg";
import { ReactComponent as GoogleIcon } from "../lib/icons/google.svg";

export const skills = [
  {
    skillBox: "pb-10 sm:pt-5 sm:pb-10 sm:pr-10 border-r-0 sm:border-r-[1px] border-b-[1px] border-[#9bb1cf]",
    skillIcon: <GoogleIcon className="h-10 w-10"></GoogleIcon>,
    skillTitle: "Develop GenAI Apps with Gemini and Streamlit",
    skillDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skillPercent: "62%",
  },
  {
    skillBox: "pb-10 pt-10 sm:pt-5 sm:pb-10 sm:pl-10 border-b-[1px] border-[#9bb1cf]",
    skillIcon: <GoogleIcon className="h-10 w-10"></GoogleIcon>,
    skillTitle: "Gemini Multimodality and Multimodal RAG",
    skillDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skillPercent: "94%",
  },
  {
    skillBox: "pb-10 pt-10 sm:pb-5 sm:pt-10 sm:pr-10 border-r-0 sm:border-r-[1px] sm:border-b-0 border-b-[1px] border-[#9bb1cf]",
    skillIcon: <MicrosoftIcon className="h-10 w-10"></MicrosoftIcon>,
    skillTitle: "Azure Data Scientist Associate",
    skillDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skillPercent: "72%",
  },
  {
    skillBox: "pt-10 sm:pb-5 sm:pt-10 sm:pl-10",
    skillIcon: <MicrosoftIcon className="h-10 w-10"></MicrosoftIcon>,
    skillTitle: "Azure Solutions Architect Expert",
    skillDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skillPercent: "80%",
  },
  {
    skillBox: "pt-10 sm:pb-5 sm:pt-10 sm:pl-10",
    skillIcon: <MicrosoftIcon className="h-10 w-10"></MicrosoftIcon>,
    skillTitle: "Azure Developer Associate",
    skillDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skillPercent: "80%",
  },
  {
    skillBox: "pt-10 sm:pb-5 sm:pt-10 sm:pl-10",
    skillIcon: <MicrosoftIcon className="h-10 w-10"></MicrosoftIcon>,
    skillTitle: "Azure Data Fundamentals",
    skillDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    skillPercent: "80%",
  },
];
