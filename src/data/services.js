import ArchitectureIcon from "../lib/icons/algotrhim.png";
import AIIcon from "../lib/icons/AI.png";
import CloudIcon from "../lib/icons/virtual desktop.png";
import LeadershipIcon from "../lib/icons/archive.png";
import DevelopmentIcon from "../lib/icons/coding.png";

export const services = [
  {
    id: 1,
    bgColor: "bg-accent",
    titleColor: "text-white",
    descColor: "text-white",
    servIcon: <ArchitectureIcon className="h-[4.25rem] w-[4.25rem] fill-white"></ArchitectureIcon>,
    servTitle: "Software Architecture",
    servIconPath: ArchitectureIcon,
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
    //servIcon: <AIIcon className="h-[4.25rem] w-[4.25rem] fill-accent"></AIIcon>,
    servTitle: "AI / ML Project Development",
    servIconPath: AIIcon,
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
    //servIcon: <CloudIcon className="h-[4.25rem] w-[4.25rem] fill-accent"></CloudIcon>,
    servTitle: "Cloud Migration & Infrastructure Design",
    servIconPath: CloudIcon,
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
    //servIcon: <LeadershipIcon className="h-[4.25rem] w-[4.25rem] fill-accent"></LeadershipIcon>,
    servTitle: "Technical Leadership",
    servIconPath: LeadershipIcon,
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
    //servIcon: <DevelopmentIcon className="h-[4.25rem] w-[4.25rem] fill-accent"></DevelopmentIcon>,
    servTitle: "Fullstack Development",
    servIconPath: DevelopmentIcon,
    serviceItems: ['End to End project delivery',
      'Front end, Backend & Databases',
      'CI/ CD with Devops methodologies',
      'Deployment strategy execution',
      'Design patterns and best practices']
  }
];
