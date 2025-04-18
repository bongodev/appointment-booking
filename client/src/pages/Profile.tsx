import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCurrentUser, useProfileUpdate, useUserUpdate } from '@/hooks';
import { profileFormSchema, ProfileFormType } from '@/schema';

import { Paper, Typography, Box, TextField, Button } from '@/ui';

export default function Profile() {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<ProfileFormType>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      address: {
        street: '',
        city: '',
        country: '',
        zipCode: '',
      },
    },
  });
  const { currentUser } = useCurrentUser();
  const { updateUser, isPending: isUserUpdatePending } = useUserUpdate();
  const { updateProfile, isPending: isUserProfileUpdatePending } =
    useProfileUpdate();
  const isFormSubmitting = isUserProfileUpdatePending || isUserUpdatePending;
  console.log(currentUser);
  useEffect(() => {
    if (currentUser) {
      reset({
        name: currentUser.name || '',
        email: currentUser.email || '',
        mobile: currentUser.mobile || '',
        address: {
          city: currentUser.profile.address?.city || '',
          country: currentUser.profile.address?.country || '',
          zipCode: currentUser.profile.address?.zipCode || '',
        },
      });
    }
  }, [currentUser, reset]);

  function onSubmit(formdata: ProfileFormType) {
    updateProfile({
      city: formdata.address?.city || '',
      country: formdata.address?.country || '',
      zipCode: formdata.address?.zipCode || '',
      userId: currentUser.profile.id,
    });
    updateUser({
      name: formdata.name,
      email: formdata.email,
      mobile: formdata.mobile,
      userId: currentUser.id,
    });
  }
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography
        component="h1"
        variant="h4"
        gutterBottom
        style={{ fontWeight: 'bold' }}
      >
        My Profile
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        color="textSecondary"
        style={{ fontSize: '1.1rem' }}
      >
        View your profile and update your profile information
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ mt: 3 }}
      >
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
              id="email"
              label="Email Address"
              autoComplete="email"
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
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
              label="Mobile Number"
              placeholder="+8801234567"
              autoComplete="tel"
              error={Boolean(errors.mobile)}
              helperText={errors.mobile?.message}
            />
          )}
        />
        <Box
          component="div"
          sx={{
            display: 'flex',
            gap: 2,
          }}
        >
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
          <Controller
            name="address.country"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                required
                fullWidth
                id="country"
                label="Country"
                autoComplete="country"
                autoFocus
                error={Boolean(errors.address?.country)}
                helperText={errors.address?.country?.message}
              />
            )}
          />
          <Controller
            name="address.zipCode"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                required
                fullWidth
                id="zipcode"
                label="Zip Code"
                autoComplete="zipcode"
                autoFocus
                error={Boolean(errors.address?.country)}
                helperText={errors.address?.country?.message}
              />
            )}
          />
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, py: 1.5 }}
          disabled={!isDirty}
        >
          {isFormSubmitting ? 'Updating changes' : 'Update changes'}
        </Button>
      </Box>
    </Paper>
  );
}
