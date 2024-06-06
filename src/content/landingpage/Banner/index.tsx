import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Container>
      <Grid
        container
        sx={{
          mt: 10,
        }}
      >
        <Grid
          item
          xs={6}
          sx={{
            m: "auto",
          }}
        >
          <Stack spacing={1.5}>
            <Typography
              sx={{
                color: "#3BBBA7",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              TRỞ THÀNH AUTOMATION TESTER
            </Typography>
            <Typography
              sx={{
                fontSize: 50,
                lineHeight: 1.3,
              }}
            >
              Học kiểm thử tự động <br /> nhanh nhất tại <br />{" "}
              <b>Automation Test Pro!</b>
            </Typography>
            <Typography
              sx={{
                fontSize: 17,
                lineHeight: 2,
                maxWidth: "80%",
                color: "gray",
              }}
            >
              Học online qua các bài giảng ở nhiều dạng khác nhau về kiểm thử tự
              động cho những sinh viên/ bạn mới vào nghề/ bạn muốn nâng cao kĩ
              năng.
            </Typography>
            <Box
              sx={{
                maxWidth: "20%",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  width: "150px",
                  color: "white",
                  borderRadius: 0,
                  padding: 1,
                  marginTop: 3,
                }}
              >
                ĐĂNG KÝ
              </Button>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack
            direction={"row"}
            spacing={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://automationtestpro.com/wp-content/uploads/2022/02/HR0835.jpg"
              alt="banner1"
              style={{
                width: 284,
                height: 282,
              }}
            />
            <img
              src="https://automationtestpro.com/wp-content/uploads/2022/02/HTR084.jpg"
              alt="banner2"
              style={{
                width: 280,
                height: 450,
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
