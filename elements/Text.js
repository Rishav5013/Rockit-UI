const TextStyle = ({
  size,
  color,
  lineHeight,
  fontWeight,
  textCenter,
  ...props
}) => {
  const StyledText = "div";
  return (
    <div>
      <StyledText
        className={` ${textCenter ? "text-center" : null}  ${color} ${
          size == "sm"
            ? "lg:font-medium lg:text-2xl font-semibold text-[12px]"
            : size == "xs"
            ? "font-semibold lg:text-[14px] text-[10px]"
            : size == "md"
            ? "text-md"
            : size == "lg"
            ? "font-semibold lg:text-lg text-[12px]"
            : size == "2xl"
            ? "lg:text-2xl text-[14px] font-medium "
            : size == "xl"
            ? "font-semibold lg:text-xl text-[12px]"
            : size == "3xl"
            ? "lg:text-3xl text-[14px] font-semibold"
            : "font-bold lg:text-[16px] lg:font-bold text-[16px]"
        } 
       ${
         lineHeight == "10"
           ? "lg:leading-10 leading-6"
           : lineHeight == "10.5"
           ? "lg:leading-11 leading-6"
           : lineHeight == "11"
           ? "lg:leading-11 leading-[26px]"
           : lineHeight == "12"
           ? "lg:leading-12 leading-[26px]"
           : lineHeight == "13"
           ? "leading-13"
           : lineHeight == "14"
           ? "leading-10"
           : lineHeight == "15"
           ? "leading-15"
           : "leading-16"
       } 
       `}
      >
        {props.children}
      </StyledText>
    </div>
  );
};

const Text = ({
  size,
  color,
  lineHeight,
  fontWeight,
  textCenter,
  ...props
}) => {
  return (
    <TextStyle
      size={size}
      color={color}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      textCenter={textCenter}
    >
      {props.children}
    </TextStyle>
  );
};

export default Text;
