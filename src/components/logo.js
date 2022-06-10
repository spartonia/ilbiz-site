/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
import logo from "assets/logo.svg";

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
      }}
    >
      <h1>Ilbiz Studio</h1>
      {/* <Image src={logo} sx={{ display: 'flex' }} alt="startup landing logo" /> */}
    </Link>
  );
}
