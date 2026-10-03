// src/components/sections/About/AboutCollage.tsx
import type { ReactNode } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import IconBox from '@/components/ui/IconBox';

interface CollageChipProps {
  label: string;
  icon: ReactNode;
  sx?: SxProps<Theme>;
}

function CollageChip({ label, icon, sx }: CollageChipProps) {
  return (
    <Box
      sx={[
        {
          position: 'absolute',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 1, md: 1.5 },
          height: { xs: 44, md: 71 }, // TODO(figma)
          pr: { xs: 0.75, md: 1.5 },
          pl: { xs: 2, md: 3 },
          bgcolor: 'common.white',
          borderRadius: '999px',
          boxShadow: '0 16px 40px rgba(20, 33, 43, 0.12)',
          whiteSpace: 'nowrap',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <IconBox size={48}>{icon}</IconBox>
      <Typography sx={{ fontSize: { xs: 12, md: 16 }, fontWeight: 700, color: 'text.primary' }}>
        {label}
      </Typography>
    </Box>
  );
}

export default function AboutCollage() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 665,
        aspectRatio: '665 / 745',
        mx: 'auto',
      }}
    >
      {/* کل کلاژ یک عکس است (PNG ۲x → WebP) */}
      <Image
        src="/images/about/collage.webp"
        alt="نمایی از اقامتگاه بوم‌گردی گیلمار"
        fill
        sizes="(max-width: 1200px) 100vw, 665px"
        style={{ objectFit: 'contain' }}
      />

      {/* موقعیت‌ها درصدی‌اند تا با عکس مقیاس شوند.
          TODO(figma): offset چیپ را نسبت به فریم کلاژ اندازه بگیر و بر ۶۶۵ (افقی) یا ۷۴۵ (عمودی) تقسیم کن.
          insetInlineEnd در RTL یعنی فاصله از چپ. */}
      {/* <CollageChip
        label="اقامتگاه بوم‌گردی گیلمار"
        icon={<img src="/icons/chip-lodge.svg" alt="" width={24} height={24} />}
        sx={{ top: '23%', insetInlineEnd: '0%' }}
      />
      <CollageChip
        label="تجربه اقامت اصیل شمال"
        icon={<img src="/icons/chip-star.svg" alt="" width={24} height={24} />}
        sx={{ top: '61%', insetInlineEnd: '35%' }}
      /> */}
    </Box>
  );
}
