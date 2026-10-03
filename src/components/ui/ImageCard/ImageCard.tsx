// src/components/ui/ImageCard/ImageCard.tsx
import type { ReactNode } from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

interface ImageCardProps {
  image: string;
  aspectRatio: string;
  sizes: string;
  children: ReactNode; // محتوای متنی پایین کارت
  /** اگر بدهی کل کارت لینک می‌شود (لینک روی عنوان با ::after کل کارت را می‌پوشاند) */
  overlayStrength?: number;
}

export default function ImageCard({
  image,
  aspectRatio,
  sizes,
  children,
  overlayStrength = 0.72,
}: ImageCardProps) {
  return (
    <Box
      component="article"
      sx={{
        position: 'relative',
        aspectRatio,
        borderRadius: '28px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(20, 33, 43, 0.12)',
        transition: 'transform .35s ease, box-shadow .35s ease',
        '& img': { transition: 'transform .6s cubic-bezier(.2,.8,.2,1)' },
        '&:hover, &:focus-within': {
          transform: 'translateY(-4px)',
          boxShadow: '0 28px 52px rgba(20, 33, 43, 0.18)',
        },
        '&:hover img, &:focus-within img': { transform: 'scale(1.06)' },
      }}
    >
      <Image src={image} alt="" fill sizes={sizes} style={{ objectFit: 'cover' }} />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,${overlayStrength}) 100%)`,
        }}
      />
      <Box sx={{ position: 'absolute', insetInline: 20, bottom: 20, color: 'common.white' }}>
        {children}
      </Box>
    </Box>
  );
}
