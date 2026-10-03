// src/components/sections/Hero/Hero.tsx
'use client';

import { Box, Container, Typography } from '@mui/material';
import HeroShowcase from './HeroShowcase';
import ArrowButton from '@/components/ui/ArrowButton';

export default function Hero() {
  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: '112px', lg: '168px' },
        pb: { xs: 6, lg: 10 },
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #DCEEFF 0%, #EAF4FF 35%, #F7FAFF 100%)',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ textAlign: 'center', maxWidth: 800, mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: 24, sm: 32, lg: 38 },
              fontWeight: 800,
              lineHeight: 1.4,
              color: 'text.primary',
              mb: 3,
            }}
          >
            اقامتگاه بوم‌گردی گیلمار جایی که طبیعت خانه است
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              mx: 'auto',
              fontSize: { xs: 12, sm: 14, md: 16 },
              lineHeight: 2,
              color: 'text.secondary',
              maxWidth: 790,
            }}
          >
            اقامتگاه بوم‌گردی گیلمار، بزرگ‌ترین مجموعه اکولوژ شمال کشور دارای امکانات رفاهی و تفریحی
            در فضایی منحصر به فرد با مجوز رسمی از اداره میراث فرهنگی، صنایع دستی و گردشگری گیلان
            فعالیت دارد.
          </Typography>

          <ArrowButton href="#rooms" sx={{ mt: 3 }}>
            مهمان گیلمار شو
          </ArrowButton>
        </Box>

        <Box sx={{ width: '100%', position: 'relative' }}>
          <HeroShowcase />
        </Box>
      </Container>
    </Box>
  );
}
