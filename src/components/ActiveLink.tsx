import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  text: string;
  href: string;
};

const style = {
  color: "#0070f3",
  textDecoration: "underline",
};

const ActiveLink = ({ text, href }: Props): JSX.Element => {
  const { asPath } = useRouter();

  return (
    <Link href={href} style={asPath == href ? style : undefined}>
      {text}
    </Link>
  );
};

export default ActiveLink;
