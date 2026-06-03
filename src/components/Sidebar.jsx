import { ButtonBase, Stack, Typography } from "@mui/material";

import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    component="nav"
    aria-label="Video categories"
    spacing={{ xs: 1, md: 0.75 }}
    sx={{
      flexDirection: { xs: "row", md: "column" },
      overflowX: { xs: "auto", md: "visible" },
      overflowY: "hidden",
      pb: { xs: 1, md: 0 },
      pr: { md: 1 },
      width: { xs: "100%", md: 230 },
    }}
  >
    {categories.map(({ icon, name }) => {
      const isSelected = name === selectedCategory;

      return (
        <ButtonBase
          className="category-btn"
          key={name}
          onClick={() => setSelectedCategory(name)}
          sx={{
            backgroundColor: isSelected ? "rgba(102, 252, 241, 0.16)" : "transparent",
            border: "1px solid",
            borderColor: isSelected ? "rgba(102, 252, 241, 0.42)" : "transparent",
            color: "white",
            justifyContent: "flex-start",
            minWidth: { xs: "max-content", md: "100%" },
          }}
        >
          <span className="category-icon">{icon}</span>
          <Typography component="span" fontSize={14} fontWeight={700} noWrap>
            {name}
          </Typography>
        </ButtonBase>
      );
    })}
  </Stack>
);

export default Sidebar;
