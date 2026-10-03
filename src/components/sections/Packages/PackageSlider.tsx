// src/components/sections/Packages/PackageSlider.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Box, ButtonBase, Typography, useMediaQuery } from '@mui/material';
import { PACKAGE } from '@/constants/packages';

const SIZE = { width: 602, height: 815 };
const AUTOPLAY_MS = 5000;

export default function PackageSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % PACKAGE.slides.length), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, reduceMotion]);

  return (
    <Box
      role="group"
      aria-roledescription="اسلایدر"
      aria-label="تصاویر پکیج"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: SIZE.width,
        aspectRatio: `${SIZE.width} / ${SIZE.height}`,
        justifySelf: { lg: 'end' }, // در RTL یعنی سمت چپ
      }}
    >
      {/* لایه‌ی ماسک‌شده: فقط عکس‌ها */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          WebkitMaskImage: 'url(/images/packages/slider-mask.png)',
          maskImage: 'url(/images/packages/slider-mask.png)',
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      >
        {PACKAGE.slides.map((src, i) => (
          <Box
            key={src}
            aria-hidden={i !== index}
            sx={{
              position: 'absolute',
              inset: 0,
              opacity: i === index ? 1 : 0,
              transition: reduceMotion ? 'none' : 'opacity .7s ease',
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={i === 0}
              sizes={`(max-width: 1200px) 100vw, ${SIZE.width}px`}
              style={{ objectFit: 'cover' }}
            />
          </Box>
        ))}
      </Box>

      {/* متن داخل بریدگی بالا-چپ. موقعیت‌ها از ماسک: لبه‌ی راست متن در x≈۱۱۴ از ۶۰۲ */}
      <Typography
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute',
          top: '11.4%',
          insetInlineStart: '81%', // راست متن در ۱۱۴px از چپ
          width: '22%',
          fontSize: 'clamp(10px, 1.1vw, 13px)',
          fontWeight: 700,
          lineHeight: 2,
          color: 'text.primary',
          textAlign: 'start',
        }}
      >
        {PACKAGE.slideCaption}
      </Typography>

      {/* نوار پیجینیشن پایین-چپ */}
      <Box
        role="tablist"
        aria-label="انتخاب تصویر"
        sx={{ position: 'absolute', bottom: 24, insetInlineEnd: 21, display: 'flex', gap: '17px' }}
      >
        {PACKAGE.slides.map((src, i) => (
          <ButtonBase
            key={src}
            role="tab"
            aria-selected={i === index}
            aria-label={`تصویر ${i + 1}`}
            onClick={() => setIndex(i)}
            sx={{
              width: { xs: 40, md: 67 },
              height: 4,
              borderRadius: 999,
              bgcolor: i === index ? '#fff' : 'rgba(255,255,255,0.4)',
              transition: 'background-color .3s ease',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.8)' },
              '&:focus-visible': { outline: '2px solid #fff', outlineOffset: 3 },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
