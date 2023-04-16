import Card from "@/components/Card";
import Heading from "@/elements/Heading";
import { BenefitCards } from "./data";

const BenefitSection = ({ BenefitSectionData }) => {
  const title = BenefitSectionData.benefitCards.data[0].attributes.title;
  const data = BenefitSectionData.benefitCards.data[0].attributes.BenefitCard;

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center pt-[34px] lg:pb-[114px] pb-0 lg:px-[118px] px-10">
        <Heading priority="2" leading="15" color="text-black-100" textCenter>
          {title}
        </Heading>

        <div className="flex flex-wrap gap-12 justify-around lg:mt-[118px] mt-[81px]">
          {data.map(({ id, gradient, icon, text }) => {
            return (
              <div key={id} className="w-[324px]">
                <Card
                  gradient={gradient}
                  logoPath={icon.data.attributes.url}
                  text={text}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BenefitSection;
