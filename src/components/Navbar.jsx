import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import "../logo.png";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack className="navbar" direction={ {xs: "column", sm: "column", md: "row"} } alignItems="center" p={2} sx={{ position:  "sticky", background: '#0B0C10', borderBott: "1px solid #3d3d3d", top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src="logo.png" alt="logo" height={25} id="logo" />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;