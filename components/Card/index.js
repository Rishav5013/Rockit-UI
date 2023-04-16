import Image from "next/image";
import Text from "@/elements/Text";
import { getStrapiMedia } from "@/lib/helper";

const Card = ({
  logoPath,
  text,
  gradient,
  hireSection,
  num,
  bgColor,
  color,
}) => {
  return (
    <>
      {hireSection ? (
        <div
          className={`lg:block flex items-start justify-between lg:py-0 py-[20px]`}
        >
          <div
            className={`${bgColor} w-[54px] h-[54px] rounded-[14px] flex justify-center items-center`}
          >
            <Text color={color} size="lg">
              {num}
            </Text>
          </div>
          <div
            className={`${
              hireSection ? "lg:py-3 py-0" : "py-8"
            } lg:w-full w-3/4 `}
          >
            <Text
              centertext={hireSection ? false : true}
              size="lg"
              color="text-gray-100"
              lineHeight="10"
            >
              {text}
            </Text>
          </div>
        </div>
      ) : (
        <>
          <div className="relative items-center flex flex-col">
            <div
              className={`h-[66px] w-[66px] rounded-full opacity-20 ${gradient}`}
            ></div>
            <Image
              className="absolute top-[30px] left-[115px]"
              src={getStrapiMedia(logoPath)}
              alt="logo image"
              height={32}
              width={51}
            />
          </div>
          <div className={`${hireSection ? "py-3" : "py-8"}`}>
            <Text
              textCenter={hireSection ? false : true}
              size="lg"
              color="text-gray"
              lineHeight="10"
              fontWeight="font-semibold"
            >
              {text}
            </Text>
          </div>
        </>
      )}
    </>
  );
};

export default Card;
