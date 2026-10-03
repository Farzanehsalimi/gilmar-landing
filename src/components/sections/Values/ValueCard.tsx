// src/components/sections/Values/ValueCard.tsx
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
  cardRotate: number;
  iconRotate: number;
}

export default function ValueCard({
  title,
  description,
  icon,
  cardRotate,
  iconRotate,
}: ValueCardProps) {
  return (
    <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 290, mx: 'auto' }}>
      {/* ارتفاع ثابت تا چرخش کارت چیدمان را به‌هم نزند */}
      <Box sx={{ height: 150, display: 'grid', placeItems: 'center', mb: 3 }}>
        <Box
          sx={{
            width: 120, // TODO(figma)
            height: 120,
            display: 'grid',
            placeItems: 'center',
            bgcolor: 'common.white',
            borderRadius: '32px',
            boxShadow: '0 24px 40px rgba(20, 33, 43, 0.08)',
            transform: `rotate(${cardRotate}deg)`,
          }}
        >
          <Image
            src={icon}
            alt=""
            width={96}
            height={96}
            style={{ transform: `rotate(${iconRotate - cardRotate}deg)` }}
          />
        </Box>
      </Box>

      <Typography
        variant="h3"
        sx={{ fontSize: { xs: 17, md: 20 }, fontWeight: 800, color: 'text.primary' }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          mt: 1.5,
          fontSize: { xs: 14, md: 16 },
          fontWeight: 600,
          lineHeight: 2.1,
          color: 'text.secondary',
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
