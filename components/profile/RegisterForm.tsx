import * as React from "react";
import { Button } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";
import UserAPI from "../../lib/api/user";
import Router from "next/router";
import ListErrors from "../common/ListErrors";

const theme = createTheme();

const Register = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState([]);

  const handleUsernameChange = React.useCallback(
    (e) => setUsername(e.target.value),
    []
  );

  const handleEmailChange = React.useCallback(
    (e) => setEmail(e.target.value),
    []
  );

  const handlePasswordChange = React.useCallback(
    (e) => setPassword(e.target.value),
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await UserAPI.register(email, username, password);
      
      if (data?.error) {
        setErrors(data.error);
      }

      if (data?.user) {
        window.localStorage.setItem("user", JSON.stringify(data.user));
        Router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <ListErrors errors={errors} />
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
              <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={handleUsernameChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="login" variant="body2">
                  {"Already has an account? Sign In!"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
