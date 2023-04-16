import Heading from "@/elements/Heading";
import Cards from "@/components/Card";
import { HireCards } from "./data";

const HireSection = ({ HireSectionData }) => {
  return (
    <div
      className="outerContainer relative 
    before:content-[url('/images/HireInner.svg')]
    before:absolute before:right-0 before:top-[-52px] before:z-10 before:hidden before:lg:block
    after:content-[url('/images/HireOuter.svg')] 
    after:absolute after:right-0 after:top-[-130px] after:hidden after:lg:block"
    >
      <div className="flex flex-col items-center container mx-auto">
        <div className="lg:mb-12 lg:w-7/12 text-center">
          <Heading priority="2" leading="15" color="text-black">
            {HireSectionData.title}
          </Heading>
        </div>

        <div className="flex lg:flex-row flex-col flex-wrap px-12 lg:pl-20">
          {HireSectionData.HireCard.map(({ id, num, color, bgColor, text }) => {
            return (
              <div key={id} className="lg:w-[324px] lg:m-8 m-4">
                <Cards
                  text={text}
                  num={num}
                  hireSection={true}
                  color={color}
                  bgColor={bgColor}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HireSection;
