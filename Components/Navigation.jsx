import React from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  const handleOn = () => {
    navigate("/product");
    setTimeout(() => {
      alert("This is product Page");
    }, 2000);
  };
  return (
    <Card sx={{ bgcolor: "lightblue" }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Link to="/">
              <Button color="warning" variant="contained" fullWidth>
                Home
              </Button>
            </Link>
          </Grid>

          <Grid item xs={2}>
            {/* <Link to="product"> */}
            <Button
              onClick={handleOn}
              color="warning"
              variant="contained"
              fullWidth
            >
              Product
            </Button>
            {/* </Link> */}
          </Grid>

          <Grid item xs={2}>
            <Link to="contact">
              <Button variant="contained" fullWidth color="warning">
                Contact
              </Button>
            </Link>
          </Grid>

          <Grid item xs={2}>
            <Link to="login">
              <Button variant="contained" fullWidth color="warning">
                Login
              </Button>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
