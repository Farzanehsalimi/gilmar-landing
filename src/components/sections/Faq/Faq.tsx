// src/components/sections/Faq/Faq.tsx
import Image from 'next/image';
import { Box, Container } from '@mui/material';
import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';
import FaqAccordion from './FaqAccordion';

export default function Faq() {
  return (
    <Box
      component="section"
      id="faq"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: 120,
        py: { xs: 8, lg: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: 0,
          insetInlineStart: 0,
          display: { xs: 'none', lg: 'block' },
          pointerEvents: 'none',
        }}
      >
        <Image src="images/decor/grid-lines.svg" alt="" width={670} height={394} />
      </Box>

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'minmax(0, 1fr)', lg: 'minmax(0, 560px) minmax(0, 623px)' },
            justifyContent: 'space-between',
            alignItems: 'start',
            rowGap: 6,
          }}
        >
          {/* ستون اول در RTL سمت راست است */}
          <Box>
            <SectionHeader
              align="start"
              icon={<Icon name="question-circle" size={22} />}
              title="سوالات متداول مهمانان گیلمار"
              description="پاسخ رایج‌ترین سوالات درباره رزرو، اقامت و امکانات گیلمار را اینجا پیدا کنید تا با خیال راحت سفر خود را برنامه‌ریزی کنید."
            />

            <Box
              sx={{
                position: 'relative',
                mt: 6,
                display: { xs: 'none', md: 'grid' },
                placeItems: 'center',
              }}
            >
              {/* هاله‌ی نرم پشت تصویر - TODO(figma) */}
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  width: 520,
                  height: 520,
                  borderRadius: '50%',
                  background:
                    'radial-gradient(closest-side, rgba(255,255,255,0.9), rgba(214,228,255,0.35) 60%, transparent)',
                }}
              />
              <Image
                src="/images/faq/binoculars.webp"
                alt=""
                width={360} // TODO(figma)
                height={362}
                style={{ position: 'relative', height: 'auto' }}
              />
            </Box>
          </Box>

          <FaqAccordion />
        </Box>
      </Container>
    </Box>
  );
}
