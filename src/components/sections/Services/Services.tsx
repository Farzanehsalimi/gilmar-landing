// src/components/sections/Services/Services.tsx
import Image from 'next/image';
import { Box } from '@mui/material';
import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';
import ServicesSlider from './ServicesSlider';

export default function Services() {
  return (
    <Box
      component="section"
      id="services"
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

      {/* Container ندارد: اسلایدر باید تا لبه‌ی صفحه ادامه پیدا کند.
          padding شروع معادل Container است: max(32px, (100% - 1280px) / 2) */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', lg: 'minmax(0, 480px) minmax(0, 1fr)' },
          alignItems: 'center',
          columnGap: { lg: 6 },
          rowGap: 4,
          paddingInlineStart: {
            xs: '16px',
            md: '32px',
            lg: 'max(32px, calc((100% - 1280px) / 2))',
          },
          paddingInlineEnd: { xs: '16px', md: '32px', lg: 0 },
        }}
      >
        <SectionHeader
          align="start"
          icon={<Icon name="magic-stick-filled" size={22} />}
          title="خدمات رفاهی گیلمار برای اقامتی دلنشین"
          description="در گیلمار آرامش طبیعت را در کنار خدمات رفاهی کامل تجربه می‌کنید؛ فضایی دنج و صمیمی که برای ساخت لحظاتی آرام، خوش و به‌یادماندنی آماده شده است."
        />
        <ServicesSlider />
      </Box>
    </Box>
  );
}
