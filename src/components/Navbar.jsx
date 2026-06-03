import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../logo.png";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    component="header"
    className="navbar"
    direction={{ xs: "column", md: "row" }}
    alignItems="center"
    gap={2}
    sx={{
      position: "sticky",
      top: 0,
      zIndex: 10,
      px: { xs: 2, md: 3 },
      py: 1.5,
      backgroundColor: "rgba(11, 12, 16, 0.92)",
      borderBottom: "1px solid rgba(102, 252, 241, 0.14)",
      backdropFilter: "blur(18px)",
      justifyContent: "space-between",
    }}
  >
    <Link className="brand-link" to="/" aria-label="MMTube home">
      <Box component="img" src={logo} alt="" sx={{ height: 25, width: 150 }} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
