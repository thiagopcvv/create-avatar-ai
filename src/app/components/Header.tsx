import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: "#1d1a1a"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Create Avatar AI
          </Typography>
          <Link href="/" passHref>
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="/dashboard" passHref>
            <Button color="inherit">Dashboard</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
