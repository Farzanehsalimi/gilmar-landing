// src/components/sections/Hero/HeroShowcase.tsx
import { Box, Paper, Typography, Avatar, AvatarGroup } from '@mui/material';
import Image from 'next/image';

export default function HeroShowcase() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 1250,
        mx: 'auto',
        mt: { xs: -4, sm: -6, md: -4 },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: {
            xs: '3/3',
            md: '21/9',
          },
          overflow: 'hidden',
          borderRadius: { xs: '16px', md: '32px' },
        }}
      >
        <Image
          src="/images/hero/hero-main.png"
          alt="نمای ساختمان اقامتگاه بوم‌گردی گیلمار"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </Box>

      {/* نقل قول سمت چپ */}
      <Paper
        elevation={0}
        sx={{
          position: 'absolute',
          bottom: { xs: 0, md: -20 },
          left: { xs: 16, md: -12, lg: -24, xl: -16 },
          zIndex: 10,
          p: 3,
          pr: 2,
          maxWidth: { md: 200, lg: 240, xl: 280 },
          width: '100%',
          bgcolor: 'transparent',
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'flex-center',
          alignItems: 'flex-center',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            fontSize: { md: 11, lg: 13, xl: 16 },
            fontWeight: 600,
            textAlign: 'center',
            direction: 'rtl',
            width: '100%',
            display: 'block',
            lineHeight: 1.8,
          }}
        >
          فرار از شلوغی شهر و تجربه‌ی اقامتی اصیل در دل طبیعت شمال
        </Typography>
      </Paper>

      {/* کارت آواتار و رزرو */}
      <Paper
        elevation={0}
        sx={{
          position: 'absolute',
          bottom: { md: 0 },
          right: { md: -8, xl: -2 },
          zIndex: 10,
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
          gap: 0.5,
          p: { md: 0.8, xl: 1.4 },
          pr: { md: 0.8, xl: 1 },
          pl: { md: 0.8, xl: 1 },
          borderRadius: '50px',
          bgcolor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(18px)',
          border: '1px solid rgba(255,255,255,0.6)',
          boxShadow: '0 20px 42px rgba(0,0,0,0.2)',
          minWidth: { md: 120, xl: 180 },
        }}
      >
        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 0.5,
            lineHeight: 1.8,
            fontWeight: 600,
            fontSize: { md: 12, xl: 14 },
            direction: 'rtl',
          }}
        >
          <span>۱۲۰+</span>
          <span>رزرو موفق</span>
        </Typography>

        <AvatarGroup
          max={3}
          sx={{
            '& .MuiAvatar-root': {
              width: { md: 16, lg: 24, xl: 28 },
              height: { md: 16, lg: 24, xl: 28 },
              fontSize: 16,
              border: '2px solid #fff',
            },
          }}
        >
          <Avatar alt="User 1" src="/images/avatars/avatar-1.png" />
          <Avatar alt="User 2" src="/images/avatars/avatar-2.png" />
          <Avatar alt="User 3" src="/images/avatars/avatar-3.png" />
        </AvatarGroup>
      </Paper>
    </Box>
  );
}
