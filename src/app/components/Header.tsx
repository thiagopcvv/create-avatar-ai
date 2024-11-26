import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import { useAuthStore } from "../store/useAuthStore";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../actions/auth";

const Header = () => {
  const { user, setUser } = useAuthStore();

  function handleLogout() {
    logout();
    setUser(undefined);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#181616" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Create Avatar AI
          </Typography>
          {user ? (
            <Link href="/dashboard" passHref>
              <IconButton color="primary" onClick={handleLogout}>
                <LogoutIcon />{" "}
              </IconButton>
            </Link>
          ) : (
            <>
              <Link href="/login" passHref>
                <Button variant="text">Login</Button>
              </Link>
              <Link href="/singUp" passHref>
                <Button variant="text">Register</Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
