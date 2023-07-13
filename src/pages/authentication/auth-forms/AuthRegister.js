/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// material-ui
import {
  Box,
  Button,
  FormControl,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from '@mui/material';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { makePostReq } from 'uni_team/hooks/makeRequest';
import { validateEmail } from 'uni_team/helpers/validation/validators';

// ============================|| FIREBASE - REGISTER ||============================ //

const AuthRegister = () => {
  const [level, setLevel] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [details, setDetails] = useState({});

  const navigate = useNavigate();
  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    let areTwoPassCorrect = details.password === details.confirmPassword ? true : false;
    if (areTwoPassCorrect) {
      if (validateEmail(details.email)) {
        const res = await makePostReq('POST', null, 'users/signup', details);
        navigate('/login');
      } else {
        toast.error('Please validate your email', {
          position: toast.POSITION.TOP_CENTER
        });
      }
    } else {
      toast.error('Please check your details', {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('');
  }, []);

  return (
    <>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="firstname-signup">Name*</InputLabel>
              <OutlinedInput
                id="firstname-login"
                type="firstname"
                value={details.firstname}
                name="firstname"
                onChange={onChangeHandler}
                placeholder="John"
                fullWidth
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="corpName-signup">CorpName*</InputLabel>
              <OutlinedInput
                fullWidth
                id="corpName-signup"
                type="text"
                value={details?.corpName}
                name="corpName"
                onChange={onChangeHandler}
                placeholder="Doe"
                inputProps={{}}
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email-signup">Email Address*</InputLabel>
              <OutlinedInput
                fullWidth
                id="email-login"
                type="email"
                value={details.email}
                name="email"
                onChange={onChangeHandler}
                placeholder="demo@company.com"
                inputProps={{}}
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor="password-signup">Password</InputLabel>
              <OutlinedInput
                fullWidth
                id="password-signup"
                type={showPassword ? 'text' : 'password'}
                value={details.password}
                name="password"
                onChange={onChangeHandler}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="******"
              />
            </Stack>
            <Stack spacing={1}>
              <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
              <OutlinedInput
                fullWidth
                id="confirmPassword-signup"
                type={showPassword ? 'text' : 'password'}
                value={details?.confirmPassword}
                name="confirmPassword"
                onChange={onChangeHandler}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                    </IconButton>
                  </InputAdornment>
                }
                placeholder="******"
              />
            </Stack>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" fontSize="0.75rem">
                    {level?.label}
                  </Typography>
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">
              By Signing up, you agree to our &nbsp;
              <Link variant="subtitle2" component={RouterLink} to="#">
                Terms of Service
              </Link>
              &nbsp; and &nbsp;
              <Link variant="subtitle2" component={RouterLink} to="#">
                Privacy Policy
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <AnimateButton>
              <Button disableElevation onClick={submit} fullWidth size="large" type="submit" variant="contained" color="primary">
                Create Account
              </Button>
            </AnimateButton>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default AuthRegister;
