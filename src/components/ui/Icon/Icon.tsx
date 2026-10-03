// src/components/ui/Icon/Icon.tsx
import Image from 'next/image';
import { Box } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';

export const ICON_NAMES = [
  'arrow-left',
  'bolt',
  'box-minimalistic',
  'chat-round-line',
  'clapperboard-play',
  'double-quotation',
  'globe',
  'linkedin',
  'magic-stick-filled',
  'minus',
  'plate',
  'play-icon',
  'plus',
  'question-circle',
  'star-badge',
  'subtract',
  'telegram',
  'user',
  'x',
  'youtube',
] as const;

export type IconName = (typeof ICON_NAMES)[number];

interface IconProps {
  name: IconName;
  size?: number;
  /** اگر بدهی، آیکون تک‌رنگ می‌شود (مثلاً 'primary.main' یا 'common.white') */
  color?: string;
  sx?: SxProps<Theme>;
}

export default function Icon({ name, size = 24, color, sx }: IconProps) {
  const src = `/icons/${name}.svg`;

  if (!color) {
    return (
      <Image src={src} alt="" width={size} height={size} aria-hidden style={{ flexShrink: 0 }} />
    );
  }

  return (
    <Box
      component="span"
      aria-hidden
      sx={[
        {
          display: 'inline-block',
          flexShrink: 0,
          width: size,
          height: size,
          bgcolor: color,
          WebkitMaskImage: `url(${src})`,
          maskImage: `url(${src})`,
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center',
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}
