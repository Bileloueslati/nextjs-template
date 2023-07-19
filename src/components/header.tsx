import { Stack, Typography } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <Stack component="header" sx={{bgcolor: "red", p: 3, mb: 3}}>
      <Typography>Im a header</Typography>
    </Stack>
  );
}
