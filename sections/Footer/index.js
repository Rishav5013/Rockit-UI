import LeftFooter from "./LeftFooter";
import RightFooter from "./RightFooter";
import Text from "@/elements/Text";

const Footer = ({ FooterSectionData1 }) => {
  return (
    <div className="bg-primary">
      <div className="outerContainer">
        <div className="flex flex-col lg:flex-row  mx-auto bg-primary p-10 lg:p-0">
          <LeftFooter />
          <div className="border border-gray-500 lg:mt-[70px] lg:mb-[90px]"></div>
          <RightFooter FooterSectionData1={FooterSectionData1} />
        </div>

        <div className="lg:pt-5 lg:pb-6 lg:pl-14 text-center lg:text-left p-4">
          <Text
            size="xl"
            color="text-gray-500"
            lineHeight="10"
            fontWeight="font-semibold"
          >
            Copyright © 2021 rockIT - All Rights Reserved.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Footer;
