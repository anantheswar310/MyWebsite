import { skills } from "../../data/skills";
import { SectionTitleIcon } from "../SectionTitles";

const Skills = (props) => {
  return (
    <div className="skillsWrap relative w-full">
      <SectionTitleIcon title="Certifications"></SectionTitleIcon>
      <div className="skillsList grid grid-cols-1 sm:grid-cols-1 relative w-full">
        {skills.map(
          (item, index) =>
            index < 6 && (
              // <div className={item.skillBox} key={index}>
              <div className="flex justify-center mb-2 gap-1" key={index}>  
                <span className="bg-white rounded-[10px] h-[3.375rem] w-[4.375rem] inline-flex items-center justify-center">
                  {item.skillIcon}
                </span>
                <div className="skillInfo flex items-center justify-between w-full ">
                  <h3 className="text-accent2 text-[1.2rem] font-Poppins ">
                    {item.skillTitle}
                  </h3>
                  {/* <span className="bg-white text-accent rounded-[10px] font-Poppins font-semibold text-[.9375rem] py-[3.75px] px-3">
                    {item.skillPercent}
                  </span> */}
                </div>
                {/* <div className="w-full bg-white h-[7px] mt-4 rounded-[2px]">
                  <div
                    className="bg-accent h-[7px] rounded-[2px]"
                    style={{ width: `${item.skillPercent}` }}
                  ></div>
                </div> */}
                {/* Skill Box */}
              </div>
            )
        )}
        {/* Skills List */}
      </div>
      {/* Skills Wrap */}
    </div>
  );
};

export default Skills;
