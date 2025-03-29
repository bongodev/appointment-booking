import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Link,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { type SignupFormData, signupSchema } from '@/schema';
import { useSignUp } from '@/api/queries';

export const SignupPage = () => {
  const navigate = useNavigate();
  const signupMutation = useSignUp();
  const [showPassword, setShowPassword] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      password: '',
    },
  });

  const onSubmit = async (data: SignupFormData) => {
    await signupMutation.mutateAsync(data);
    navigate('/login');
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth='sm'>
      <Paper elevation={3} sx={{ mt: 8, p: 4 }}>
        <Typography component='h1' variant='h4' align='center' gutterBottom>
          Create Account
        </Typography>

        <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 3 }}>
          <Controller
            name='name'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin='normal'
                required
                fullWidth
                id='name'
                label='Full Name'
                autoComplete='name'
                autoFocus
                error={Boolean(errors.name)}
                helperText={errors.name?.message}
              />
            )}
          />

          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                autoComplete='email'
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
              />
            )}
          />

          <Controller
            name='mobile'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin='normal'
                required
                fullWidth
                id='mobile'
                label='Mobile Number'
                placeholder='+8801234567'
                autoComplete='tel'
                error={Boolean(errors.mobile)}
                helperText={errors.mobile?.message}
              />
            )}
          />

          <Controller
            name='password'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin='normal'
                required
                fullWidth
                id='password'
                label='Password'
                type={showPassword ? 'text' : 'password'}
                autoComplete='new-password'
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        edge='end'
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          <FormHelperText>
            Password must be at least 8 characters with uppercase, lowercase, number and special
            character
          </FormHelperText>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2, py: 1.5 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
          </Button>
        </Box>
        <Typography variant='body2' align='center'>
          Already have an account?{' '}
          <Link href='/login' variant='body2'>
            Log In
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};
