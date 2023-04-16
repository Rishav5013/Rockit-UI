import Link from "next/link";

const ListItem = ({ text, href, linkType }) => {
  return (
    <Link
      href={href}
      className={`font-bold text-black-100 hover:text-secondary flex items-center cursor-pointer p-2 ${
        linkType === true ? "font-semibold text-gray-600 " : null
      }`}
    >
      {text}
    </Link>
  );
};

export default ListItem;
