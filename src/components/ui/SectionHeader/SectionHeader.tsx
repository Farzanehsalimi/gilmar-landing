// src/components/ui/SectionHeader/SectionHeader.tsx
import type { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import SectionBadge from '@/components/ui/SectionBadge';

interface SectionHeaderProps {
  icon: ReactNode;
  title: string;
  description: string;
  align?: 'start' | 'center';
  children?: ReactNode; // مثلاً دکمه
}

export default function SectionHeader({
  icon,
  title,
  description,
  align = 'center',
  children,
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: isCenter ? 'center' : 'flex-start',
        textAlign: isCenter ? 'center' : 'start',
      }}
    >
      <SectionBadge icon={icon} />
      <Typography
        variant="h2"
        sx={{
          mt: 2,
          fontSize: { xs: 24, md: 26 }, // TODO(figma)
          fontWeight: 800,
          lineHeight: 1.5,
          color: 'text.primary',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          mt: 2,
          maxWidth: isCenter ? 760 : 'none',
          fontSize: { xs: 12, md: 14 }, // TODO(figma)
          fontWeight: 700,
          lineHeight: 2,
          color: 'text.secondary',
          textAlign: isCenter ? 'center' : 'justify',
        }}
      >
        {description}
      </Typography>
      {children}
    </Box>
  );
}
