// src/components/ui/IconBox/IconBox.tsx
import type { ReactNode } from 'react';
import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';

interface IconBoxProps {
  children: ReactNode;
  size?: number;
  shape?: 'circle' | 'rounded';
  sx?: SxProps<Theme>;
}

export default function IconBox({ children, size = 48, shape = 'circle', sx }: IconBoxProps) {
  return (
    <Box
      aria-hidden
      sx={[
        {
          display: 'grid',
          placeItems: 'center',
          flexShrink: 0,
          width: size,
          height: size,
          borderRadius: shape === 'circle' ? '50%' : `${Math.round(size * 0.3)}px`,
          color: 'common.white',
          // TODO(figma): گرادیانت واقعی باکس
          background: 'linear-gradient(135deg, #2ED3A5 0%, #12B28C 100%)',
          boxShadow: '0 6px 16px rgba(23, 184, 144, 0.28)',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Box>
  );
}
