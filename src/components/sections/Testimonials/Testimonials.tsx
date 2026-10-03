// src/components/sections/Testimonials/Testimonials.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Avatar, Box, ButtonBase, Container, Typography, useMediaQuery } from '@mui/material';
import { keyframes } from '@mui/system';
import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';
import { MAP_SIZE, SATELLITES, TESTIMONIALS } from '@/constants/testimonials';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const AUTOPLAY_MS = 3000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const active = TESTIMONIALS[index];

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, reduceMotion]);

  return (
    <Box
      component="section"
      id="testimonials"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: 120,
        py: { xs: 8, lg: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container>
        <SectionHeader
          icon={<Icon name="chat-round-line" size={22} />}
          title="گیلمار از نگاه مهمانان"
          description="تجربه واقعی مهمانان، بهترین روایت از آرامش، طبیعت و حال خوب گیلمار است."
        />

        <Box
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          sx={{
            position: 'relative',
            mx: 'auto',
            mt: { xs: 0, lg: 6 },
            maxWidth: MAP_SIZE.width,
            aspectRatio: `${MAP_SIZE.width} / ${MAP_SIZE.height}`,
            pt: '42px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundImage: 'url(/images/testimonials/world-map.webp)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
          }}
        >
          {/* آواتارهای تزئینی */}
          {SATELLITES.map((s, i) => (
            <Avatar
              key={i}
              src={s.src}
              alt=""
              aria-hidden
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'absolute',
                width: `${(s.size / MAP_SIZE.width) * 100}%`,
                height: 'auto',
                aspectRatio: '1',
                // مرکز آواتار در x٪ از لبه‌ی چپ (در RTL: inline-end)؛ بدون transform
                insetInlineEnd: `calc(${s.x}% - ${((s.size / MAP_SIZE.width) * 100) / 2}%)`,
                top: `calc(${s.y}% - ${((s.size / MAP_SIZE.height) * 100) / 2}%)`,
                border: '3px solid #fff',
                boxShadow: '0 8px 20px rgba(20, 33, 43, 0.12)',
              }}
            />
          ))}

          {/* آواتار فعال */}
          <Avatar
            key={active.id}
            src={active.avatar}
            alt={active.name}
            sx={{
              width: 80,
              height: 80,
              border: '4px solid #fff',
              boxShadow: '0 12px 28px rgba(20, 33, 43, 0.16)',
              animation: reduceMotion ? 'none' : `${fadeUp} .45s ease`,
            }}
          />

          <Box
            sx={{
              mt: '20px',
              width: '100%',
              maxWidth: 499,
              px: { xs: 3, md: 5 },
              py: { xs: 3, md: 4 },
              bgcolor: 'common.white',
              borderRadius: '28px',
              border: '1px solid rgba(20, 33, 43, 0.05)',
              boxShadow: '0 24px 60px rgba(20, 33, 43, 0.1)',
              textAlign: 'center',
            }}
          >
            <Box
              key={active.id}
              aria-live="polite"
              sx={{ animation: reduceMotion ? 'none' : `${fadeUp} .45s ease` }}
            >
              <Icon name="double-quotation" size={28} />
              <Typography
                sx={{
                  mt: 2,
                  fontSize: { xs: 13, md: 14 },
                  lineHeight: 2.2,
                  color: 'text.secondary',
                }}
              >
                {active.text}
              </Typography>
              <Typography sx={{ mt: 2.5, fontSize: 14, fontWeight: 800, color: 'text.primary' }}>
                {active.name}
              </Typography>
              <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>{active.role}</Typography>
            </Box>
          </Box>

          {/* نقطه‌های صفحه‌بندی */}
          <Box role="tablist" aria-label="انتخاب نظر" sx={{ display: 'flex', gap: '10px', mt: 3 }}>
            {TESTIMONIALS.map((item, i) => (
              <ButtonBase
                key={item.id}
                role="tab"
                aria-selected={i === index}
                aria-label={`نظر ${i + 1}`}
                onClick={() => setIndex(i)}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: i === index ? 'primary.main' : '#D5DADF',
                  transition: 'background-color .25s ease, transform .25s ease',
                  '&:hover': { transform: 'scale(1.3)' },
                  '&:focus-visible': {
                    outline: '2px solid',
                    outlineColor: 'primary.main',
                    outlineOffset: 3,
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
