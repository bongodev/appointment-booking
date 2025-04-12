import { useCurrentUser } from '@/hooks';
import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import isEqual from 'lodash.isequal';
import { userProfileSchema, UserProfileType } from '@/schema/profile';
import { zodResolver } from '@hookform/resolvers/zod';

export default function Profile() {
  const { data } = useCurrentUser();
  const {
    control,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProfileType>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      address: {
        country: '',
        city: '',
      },
    },
  });
  const [initialValues, setInitialValues] = useState<UserProfileType>();
  const watchValues = watch();
  const hasChanged = isEqual(initialValues, watchValues);
  
  function onHandleSubmit(formdata: UserProfileType) {
    console.log(formdata);
  }

  useEffect(() => {
    if (data) {
      const defaults = {
        name: data.name || '',
        email: data.email || '',
        mobile: data.mobile || '',
        address: {
          country: data.country || '',
          city: data.city || '',
        },
      };
      reset(defaults);
      setInitialValues(defaults);
    }
  }, [data, reset]);

  return (
    <Container sx={{ p: 4, width: '70%' }}>
      <Box
        component="div"
        sx={{
          display: 'flex',

          justifyContent: 'space-between',
        }}
      >
        <Box component="div">
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',

              mb: 1, // margin bottom
              letterSpacing: 1.2,
              fontSize: '1.5rem',
            }}
          >
            My Profile
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: 'text.secondary',
              mb: 3,
              fontSize: {
                xs: '0.85rem',
                sm: '0.95rem',
              },
            }}
          >
            View and change your profile information here
          </Typography>
        </Box>
        <Avatar
          sx={{
            width: 80,
            height: 80,
            mb: 2,
            bgcolor: 'primary.main', // optional: gives it some background color
          }}
        />
      </Box>

      <Box component="form" onSubmit={handleSubmit(onHandleSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              autoComplete="name"
              autoFocus
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Email"
              autoComplete="email"
              autoFocus
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          name="address.city"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              required
              fullWidth
              id="city"
              label="City"
              autoComplete="city"
              autoFocus
              error={Boolean(errors.address?.city)}
              helperText={errors.address?.city?.message}
            />
          )}
        />
        <Box component="div" sx={{ display: 'flex', gap: 2 }}>
          <Controller
            name="address.country"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                required
                fullWidth
                id="address.country"
                label="Country"
                autoComplete="country"
                autoFocus
                error={Boolean(errors.address?.country)}
                helperText={errors.address?.country?.message}
              />
            )}
          />
          <Controller
            name="mobile"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                required
                fullWidth
                id="mobile"
                label="Mobile"
                autoComplete="mobile"
                autoFocus
                error={Boolean(errors.mobile)}
                helperText={errors.mobile?.message}
              />
            )}
          />
        </Box>
        <Button
          type="submit"
          disabled={hasChanged}
          variant="contained"
          sx={{ width: '100%', my: 2 }}
        >
          Update Changes
        </Button>
      </Box>
    </Container>
  );
}
