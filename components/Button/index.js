import Link from "next/link";

const StyledButton = ({ type, size, link, ...props }) => {
  return (
    <div
      className={`${
        type == "secondary"
          ? `border  border-primary bg-black hover:bg-secondary font-bold text-white text-center`
          : type == "tertiary"
          ? " bg-secondary text-white  hover:bg-tertiary text-center font-bold"
          : "bg-primary text-white  hover:bg-secondary text-center"
      } ${
        size == "sm"
          ? "py-2 px-4 text-sm rounded-sm"
          : size == "md"
          ? "px-8 py-2 text-md rounded-md"
          : size == "lg"
          ? "lg:px-10 lg:py-5 px-7 py-4 lg:text-lg text-[16px] rounded-lg"
          : size == "xl"
          ? "lg:px-14 px-3 lg:pt-4 lg:pb-5 lg:text-3xl text-[14px] lg:py-0 py-0.5 rounded-xl"
          : "py-1 px-4 text-xs rounded-xs"
      }
      `}
    >
      {props.children}
    </div>
  );
};

function Button({ type, size, link, children }) {
  return link ? (
    <Link href={`${link}`} prefetch={false}>
      <button>
        <StyledButton type={type} size={size}>
          {children}
        </StyledButton>
      </button>
    </Link>
  ) : (
    <button>
      <StyledButton type={type} size={size}>
        {children}
      </StyledButton>
    </button>
  );
}
export default Button;
