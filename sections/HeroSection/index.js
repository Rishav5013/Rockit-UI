import Heading from "@/elements/Heading";
import Text from "@/elements/Text";
import Button from "@/components/Button";

const HeroSection = ({ HeroSectionData }) => {
  return (
    <div
      className="outerContainer relative
    before:content-[url('/images/leftvector1.svg')] 
    before:absolute before:left-0 before:top-44 before:hidden before:lg:block
    after:content-[url('/images/rightvector.svg')] 
    after:absolute after:right-0 after:top-[370px] after:hidden after:lg:block"
    >
      <div
        className="flex flex-col items-center lg:p-40 p-6 container mx-auto relative 
    before:content-[url('/images/cloud.svg')] 
    before:absolute before:left-[127px] before:hidden before:lg:block
    after:content-[url('/images/rocket.svg')] 
    after:absolute after:right-16 after:top-[350px] after:hidden after:lg:block"
      >
        <div
          className="relative mb-12
      before:content-[url('/images/thought.svg')] 
      before:absolute before:left-52 before:bottom-40 before:hidden before:lg:block
      "
        >
          <Heading color="text-black" priority={1} leading="15">
            {HeroSectionData.title}
          </Heading>
        </div>

        <div className="lg:w-3/4">
          <Text
            color="text-gray"
            fontWeight="font-semibold"
            lineHeight="12"
            size="3xl"
            textCenter
          >
            {HeroSectionData.desc}
          </Text>
        </div>

        <div className="lg:pt-24 pt-[50px]">
          <Button
            type="tertiary"
            size="lg"
            href="https://sass-lang.com/documentation/syntax#scss"
          >
            Hire Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
