import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#181616" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Create Avatar AI
          </Typography>
          <Link href="/login" passHref>
            <Button variant="text">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
