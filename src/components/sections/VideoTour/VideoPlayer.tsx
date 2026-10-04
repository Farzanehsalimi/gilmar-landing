// src/components/sections/VideoTour/VideoPlayer.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Box, ButtonBase, Dialog, IconButton } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Icon from '@/components/ui/Icon';

const MAP = { width: 914, height: 690 };

export default function VideoPlayer() {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        position: 'relative',
        gridArea: { xs: 'auto', lg: '1 / 1' },
        justifySelf: 'end', // در RTL یعنی سمت چپ
        width: `min(100%, ${MAP.width}px)`,
        aspectRatio: `${MAP.width} / ${MAP.height}`,
      }}
    >
      <Image
        src="/images/video/forest-map.webp"
        alt="جنگل اطراف اقامتگاه گیلمار"
        fill
        sizes={`(max-width: 1200px) 100vw, ${MAP.width}px`}
        style={{ objectFit: 'contain' }}
      />

      {/* دکمه‌ی پلی: مرکز در ۲۸٪ از چپ کادر و وسط ارتفاع */}
      <ButtonBase
        onClick={() => setOpen(true)}
        aria-label="پخش تور ویدیویی"
        sx={{
          position: 'absolute',
          top: { xs: 'calc(55% - 50px)', md: 'calc(50% - 60px)' },
          insetInlineEnd: { xs: 'calc(34.2% - 60px)', md: 'calc(28.2% - 60px)' },
          width: { xs: 80, md: 120 },
          height: { xs: 80, md: 120 },
          borderRadius: '50%',
          bgcolor: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(6px)',
          transition: 'transform .25s ease',
          '&:hover': { transform: 'scale(1.06)' },
          '&:focus-visible': { outline: '3px solid #fff', outlineOffset: 3 },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            placeItems: 'center',
            width: { xs: 50, md: 70 },
            height: { xs: 50, md: 70 },
            borderRadius: '50%',
            bgcolor: 'common.white',
          }}
        >
          <Icon
            name="play-icon"
            size={28}
            color="primary.main"
            sx={{ width: { xs: 18, md: 28 }, height: { xs: 18, md: 28 } }}
          />
        </Box>
      </ButtonBase>

      {/* قطب‌نما: مرکز در ۸۱٪ از چپ، کمی پایین‌تر از لبه‌ی کادر */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          bottom: { xs: -27, md: -60 },
          insetInlineEnd: 'calc(81% - 44px)',
          width: { xs: '50px', md: '150px' },
          height: { xs: '50px', md: '150px' },
          pointerEvents: 'none',
        }}
      >
        <Image
          src="/images/video/compass.webp"
          alt=""
          fill
          sizes="(max-width: 900px) 50px, 200px"
        />
      </Box>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="md"
        slotProps={{
          paper: {
            sx: { position: 'relative', bgcolor: '#000', borderRadius: '24px', overflow: 'hidden' },
          },
        }}
      >
        <IconButton
          aria-label="بستن ویدیو"
          onClick={() => setOpen(false)}
          sx={{ position: 'absolute', top: 8, insetInlineEnd: 8, zIndex: 1, color: 'common.white' }}
        >
          <CloseRoundedIcon />
        </IconButton>
        {/* TODO: فایل ویدیو را در public/videos بگذار */}
        <Box
          component="video"
          src="/videos/gilmar-tour.mp4"
          controls
          autoPlay
          playsInline
          sx={{ display: 'block', width: '100%' }}
        />
      </Dialog>
    </Box>
  );
}
