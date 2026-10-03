// src/components/sections/Values/Values.tsx
import Image from 'next/image';
import { Box, Container } from '@mui/material';
import SectionHeader from '@/components/ui/SectionHeader';
import { VALUES } from '@/constants/values';
import ValueCard from './ValueCard';

/** لایه‌های دکوراتیو پشت محتوا. موقعیت‌ها را از Figma دقیق کن. */
function DecorLayers() {
  return (
    <Box
      aria-hidden
      sx={{
        display: { xs: 'none', md: 'block' },
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      {/* ۱) شبکه‌ی خطی سمت چپ (در RTL: insetInlineEnd) */}
      <Box sx={{ position: 'absolute', top: 150, insetInlineEnd: 0 }}>
        <Image src="images/decor/grid-lines.svg" alt="" width={670} height={394} />
      </Box>

      {/* ۲) confetti */}
      <Box sx={{ position: 'absolute', top: 230, insetInline: 0, mx: 'auto', width: 1024 }}>
        <Image src="images/decor/confetti.svg" alt="" width={1024} height={230} />
      </Box>

      {/* ۳) خط‌چین بین کارت‌ها. insetInline:0 + mx:auto به‌جای left:50%، تا پلاگین RTL قاطی نکند */}
      <Box sx={{ position: 'absolute', top: 300, insetInline: 0, mx: 'auto', width: 839 }}>
        <Image src="images/decor/dash-line.svg" alt="" width={839} height={136} />
      </Box>
    </Box>
  );
}

export default function Values() {
  return (
    <Box
      component="section"
      id="guide"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: 120,
        py: { xs: 8, lg: 12 },
        bgcolor: 'background.default', // ۴) لایه‌ی رنگ زمینه
      }}
    >
      <DecorLayers />

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader
          icon={<Image src="/icons/bolt.svg" alt="" width={22} height={22} />}
          title="همراهی برای حفظ آرامش و طبیعت گیلمار"
          description="برای حفظ آرامش، نظم و تجربه‌ای دلنشین برای همه مهمانان، لطفاً قوانین اقامتگاه گیلمار را پیش از رزرو مطالعه و رعایت فرمایید."
        />

        <Box
          sx={{
            mt: { xs: 6, lg: 8 },
            mx: 'auto',
            maxWidth: 1160,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
            gap: { xs: 6, md: 3 },
          }}
        >
          {VALUES.map((item) => (
            <ValueCard key={item.id} {...item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
