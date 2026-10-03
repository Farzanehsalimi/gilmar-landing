// src/components/ui/SectionBadge/SectionBadge.tsx
import type { ReactNode } from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

interface SectionBadgeProps {
  icon: ReactNode; // آیکون وسط، مثلاً <Image src="/icons/globe.svg" ... />
  width?: number;
  height?: number;
}

export default function SectionBadge({ icon, width = 88, height = 54 }: SectionBadgeProps) {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'relative',
        width,
        height,
        display: 'grid',
        placeItems: 'center',
        flexShrink: 0,
      }}
    >
      {/* هاله‌ی سبز کمرنگ داخل فریم - TODO(figma) */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background:
            'radial-gradient(closest-side, rgba(23,184,144,0.16), rgba(23,184,144,0.04) 100%)',
        }}
      />
      <Image src="images/decor/badge-frame.svg" alt="" fill sizes={`${width}px`} />
      <Box sx={{ position: 'relative', display: 'grid', placeItems: 'center' }}>{icon}</Box>
    </Box>
  );
}
