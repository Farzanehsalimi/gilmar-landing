// src/components/sections/Services/ServicesSlider.tsx
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Box, ButtonBase, Typography } from '@mui/material';
import Icon from '@/components/ui/Icon';
import IconBox from '@/components/ui/IconBox';
import { SERVICES } from '@/constants/services';

// TODO(figma): اعداد از روی اسکرین‌شات و ابعاد اکسپورت ۲x تخمین زده شده
const CARD = { width: 289, height: 346, activeScale: 1.135, slot: 328, gap: 9 };

export default function ServicesSlider() {
  const listRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [canScroll, setCanScroll] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    setCanScroll(el.scrollWidth > el.clientWidth + 2);
    // در RTL مقدار scrollLeft منفی است
    setAtEnd(Math.abs(el.scrollLeft) + el.clientWidth >= el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener('resize', updateEdges);
    return () => window.removeEventListener('resize', updateEdges);
  }, [updateEdges]);

  const handleNext = () => {
    const el = listRef.current;
    if (!el) return;
    if (atEnd) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: -(CARD.slot + CARD.gap), behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ position: 'relative', minWidth: 0 }}>
      {canScroll && (
        <ButtonBase
          onClick={handleNext}
          aria-label={atEnd ? 'بازگشت به ابتدا' : 'مورد بعدی'}
          sx={{
            position: 'absolute',
            zIndex: 2,
            top: '50%',
            mt: '-20px',
            insetInlineStart: 0,
            borderRadius: '50%',
            transition: 'transform .2s ease',
            '&:hover': { transform: 'scale(1.08)' },
            '&:focus-visible': {
              outline: '2px solid',
              outlineColor: 'primary.dark',
              outlineOffset: 3,
            },
          }}
        >
          <IconBox size={40} sx={{ border: '3px solid #fff' }}>
            <Icon
              name="arrow-left"
              size={18}
              color="common.white"
              sx={{ transform: 'rotate(180deg)' }}
            />
          </IconBox>
        </ButtonBase>
      )}

      <Box
        component="ul"
        ref={listRef}
        onScroll={updateEdges}
        sx={{
          display: 'flex',
          gap: `${CARD.gap}px`,
          m: 0,
          padding: '48px 0', // فضا برای اسکیل کارت فعال و سایه
          listStyle: 'none',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {SERVICES.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <Box
              component="li"
              key={item.id}
              tabIndex={0}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              sx={{
                flex: `0 0 ${CARD.slot}px`,
                display: 'grid',
                placeItems: 'center',
                scrollSnapAlign: 'start',
                outline: 'none',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: CARD.width,
                  height: CARD.height,
                  borderRadius: '28px',
                  overflow: 'hidden',
                  transform: isActive ? `scale(${CARD.activeScale})` : 'scale(1)',
                  // boxShadow: isActive
                  //   ? '0 24px 48px rgba(20, 33, 43, 0.18)'
                  //   : '0 12px 28px rgba(20, 33, 43, 0.1)',
                  transition: 'transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s ease',
                }}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes={`${CARD.width}px`}
                  style={{ objectFit: 'cover' }}
                />
                <Box
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.6) 100%)',
                  }}
                />
                <Typography
                  sx={{
                    position: 'absolute',
                    insetInline: 20,
                    bottom: 18,
                    fontSize: 16, // TODO(figma)
                    fontWeight: 800,
                    color: 'common.white',
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
