import React from "react";
import ListItem from "@/elements/ListItems";
import Heading from "@/elements/Heading";
import Text from "@/elements/Text";

const RightFooter = ({ FooterSectionData1 }) => {
  const data1 = FooterSectionData1.data[0].attributes;
  const data2 = FooterSectionData1.data[1].attributes;
  return (
    <>
      <div className="flex lg:flex-row flex-col lg:w-1/2 lg:pl-[60px] pt-10  ">
        <div className="lg:py-20 lg:px-12">
          <div className="pb-10 lg:pb-0">
            <Text color="text-gray-200" lineHeight="14" fontWeight="font-bold">
              {data1.title}
            </Text>
          </div>

          <div className="lg:pt-6 lg:pl-2">
            {data1.List.map(({ id, text, link, linkType }) => {
              return (
                <ListItem
                  href={link}
                  key={id}
                  text={text}
                  linkType={linkType}
                />
              );
            })}
          </div>
        </div>

        <div className="lg:p-20 pt-10">
          <Text color="text-gray-200" lineHeight="14" fontWeight="font-bold">
            {data2.title}
          </Text>

          <div className="lg:p-6 pt-6">
            {data2.List.map(({ id, text, link, linkType }) => {
              return (
                <ListItem
                  href={link}
                  key={id}
                  text={text}
                  linkType={linkType}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RightFooter;
