import { useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import logo from "../logo.png";
import { SearchBar } from "./";
import { categoryGroups } from "../utils/constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
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
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: "100%" }}>
        <IconButton
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(true)}
          sx={{ color: "#66FCF1", display: { xs: "inline-flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Link className="brand-link" to="/" aria-label="MMTube home">
          <Box component="img" src={logo} alt="" sx={{ height: 25, width: 150 }} />
        </Link>

        <Box sx={{ display: { xs: "block", md: "none" }, width: 40 }} />
      </Stack>

      <SearchBar />

      <Drawer
        anchor="left"
        open={isMenuOpen}
        onClose={closeMenu}
        PaperProps={{
          sx: {
            backgroundColor: "#0B0C10",
            borderRight: "1px solid rgba(102, 252, 241, 0.18)",
            color: "white",
            width: 300,
          },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ p: 2 }}>
          <Link className="brand-link" to="/" aria-label="MMTube home" onClick={closeMenu}>
            <Box component="img" src={logo} alt="" sx={{ height: 25, width: 150 }} />
          </Link>
          <IconButton aria-label="Close menu" onClick={closeMenu} sx={{ color: "#66FCF1" }}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

        <List component="nav" aria-label="Mobile navigation" sx={{ px: 1.5, py: 2 }}>
          <ListItemButton component={Link} to="/" onClick={closeMenu} sx={{ borderRadius: 2, mb: 0.5 }}>
            <ListItemIcon sx={{ color: "#66FCF1", minWidth: 40 }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" primaryTypographyProps={{ fontWeight: 800 }} />
          </ListItemButton>

          {categoryGroups.map((group) => (
            <Box key={group.title} sx={{ mt: 2 }}>
              <Typography variant="overline" sx={{ color: "#8F9AA7", display: "block", px: 2 }}>
                {group.title}
              </Typography>

              {group.items.map(({ icon, name }) => (
                <ListItemButton
                  component={Link}
                  key={name}
                  to={`/search/${encodeURIComponent(name)}`}
                  onClick={closeMenu}
                  sx={{ borderRadius: 2, mb: 0.5 }}
                >
                  <ListItemIcon sx={{ color: "#66FCF1", minWidth: 40 }}>{icon}</ListItemIcon>
                  <ListItemText primary={name} primaryTypographyProps={{ fontWeight: 700 }} />
                </ListItemButton>
              ))}
            </Box>
          ))}
        </List>
      </Drawer>
    </Stack>
  );
};

export default Navbar;
