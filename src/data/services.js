import { ReactComponent as UiCreativeDesignIcon } from "../lib/icons/Curve.svg";
import { ReactComponent as DesktopApplicationIcon } from "../lib/icons/InformationService.svg";
import { ReactComponent as WebDevelopmentIcon } from "../lib/icons/Monitor.svg";
import { ReactComponent as WireframingServiceIcon } from "../lib/icons/WebProgramming.svg";
import { ReactComponent as StrategyIcon } from "../lib/icons/Strategy.svg";
import { ReactComponent as TranslationIcon } from "../lib/icons/Translation.svg";

export const services = [
  {
    id: 1,
    bgColor: "bg-accent",
    titleColor: "text-white",
    descColor: "text-white",
    servIcon: <UiCreativeDesignIcon className="h-[4.25rem] w-[4.25rem] fill-white"></UiCreativeDesignIcon>,
    servTitle: "Software Architecture",
    servDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore.",
    serviceItems: ['Translating requirements into Technical solutions', 
      'Design scalable and maintainable Architectures',
      'Requirements and Design Review workshops',
      'Define and Ensure NFRs are met',
      'Supporting business teams with RFP, RFQ, proposals']
  },
  {
    id: 2,
    bgColor: "bg-[#f0e1d4]",
    titleColor: "text-accent2",
    descColor: "text-desc2",
    servIcon: <WebDevelopmentIcon className="h-[4.25rem] w-[4.25rem] fill-accent"></WebDevelopmentIcon>,
    servTitle: "AI / ML Project Development",
    servDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore.",
    serviceItems: ['Custom Model Training',
      'End-to-End ML Ops',
      'LLM based Apps',
      'Production grade RAG implementation',
      'AI agents in action']
  },
  {
    id: 3,
    bgColor: "bg-[#d4e4f0]",
    titleColor: "text-accent2",
    descColor: "text-desc2",
    servIcon: <WireframingServiceIcon className="h-[4.25rem] w-[4.25rem] fill-accent"></WireframingServiceIcon>,
    servTitle: "Cloud Migration & Infrastructure Design",
    servDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore.",
    serviceItems: ['Designing landing zone components',
      'Defining end-to-end solution components',
      'Cost estimation and optimization',
      'Ensuring security and WAF compliance',
      'Governance and Cross-cutting concerns']
  },
  {
    id: 4,
    bgColor: "bg-gray",
    titleColor: "text-accent2",
    descColor: "text-desc2",
    servIcon: <DesktopApplicationIcon className="h-[4.25rem] w-[4.25rem] fill-accent"></DesktopApplicationIcon>,
    servTitle: "Technical Leadership",
    servDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore.",
    serviceItems: ['End-to-end technical ownership of projects',
      'Leading development teams to success',
      'Mentoring juniors and code reviews',
      'Conducting trainings and workshops',
      'Major incident point of contact']
  },
  {
    id: 5,
    bgColor: "bg-[#f0fbfe]",
    titleColor: "text-accent2",
    descColor: "text-desc2",
    servIcon: <StrategyIcon className="h-[4.25rem] w-[4.25rem] fill-accent"></StrategyIcon>,
    servTitle: "Fullstack Development",
    servDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore.",
    serviceItems: ['End to End project delivery',
      'Front end, Backend & Databases',
      'CI/ CD with Devops methodologies',
      'Deployment strategy execution',
      'Design patterns and best practices']
  }
];
