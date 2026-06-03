import { ButtonBase, Stack, Typography } from "@mui/material";

import { categoryGroups } from "../utils/constants";

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
    {categoryGroups.map((group) => (
      <Stack key={group.title} spacing={0.75} sx={{ mb: 1.75 }}>
        <Typography
          variant="overline"
          sx={{
            color: "#8F9AA7",
            fontSize: 11,
            fontWeight: 900,
            letterSpacing: 0,
            px: 1.5,
          }}
        >
          {group.title}
        </Typography>

        {group.items.map(({ icon, name }) => {
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
    ))}
  </Stack>
);

export default Sidebar;
