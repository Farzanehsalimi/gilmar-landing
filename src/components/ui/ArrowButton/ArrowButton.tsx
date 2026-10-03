// src/components/ui/ArrowButton/ArrowButton.tsx
'use client';

import { Box, Button, type ButtonProps } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

interface ArrowButtonProps extends Omit<ButtonProps, 'variant' | 'endIcon'> {
  href?: string;
}

export default function ArrowButton({ children, sx, ...rest }: ArrowButtonProps) {
  return (
    <Button
      variant="gradient"
      endIcon={
        <Box
          component="span"
          sx={{
            display: 'grid',
            placeItems: 'center',
            width: { xs: 32, sm: 36, md: 40 },
            height: { xs: 32, sm: 36, md: 40 },
            borderRadius: '50%',
            bgcolor: 'common.white',
            color: 'primary.main',
            ml: { xs: 0.5, md: 1 },
            mr: -2,
          }}
        >
          <ArrowBackRoundedIcon sx={{ fontSize: 22 }} />
        </Box>
      }
      sx={[
        {
          px: { xs: 3, sm: 4 },
          minHeight: { xs: 40, sm: 48, md: 54 },
          fontSize: { xs: 14, md: 16 },
          boxShadow: '0 8px 24px rgba(0, 200, 150, 0.3)',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...rest}
    >
      {children}
    </Button>
  );
}
