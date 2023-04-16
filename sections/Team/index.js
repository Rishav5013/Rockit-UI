import Image from "next/image";
import Heading from "@/elements/Heading";
import Text from "@/elements/Text";
import Imagewrapper from "@/elements/ImageWrapper";

const Team = ({ TeamSectionData }) => {
  return (
    <div className="container mx-auto flex flex-col items-center lg:px-20 px-[20px] lg:pt-[50px] pt-[18px]">
      <div className="p-3 text-center">
        <Heading color="text-black" priority={2} leading="15">
          {TeamSectionData.title}
        </Heading>
      </div>

      <div className="lg:mt-8 lg:pl-[55px]">
        <Text
          textCenter
          color="text-gray"
          fontWeight="font-medium"
          lineHeight="11"
          size="2xl"
        >
         {TeamSectionData.desc} 
        </Text>
      </div>

      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-1/2 lg:pt-44 order-last lg:text-left lg:order-first text-center">
          <Text
            color="text-gray"
            fontWeight="font-medium"
            lineHeight="11"
            size="sm"
          >
            {TeamSectionData.desc2}
          </Text>
        </div>

        <div className="lg:right-[66px] lg:top-1/3">
          <Imagewrapper src="/images/meeting.svg" alt="logo_image" />
        </div>
      </div>
    </div>
  );
};

export default Team;
