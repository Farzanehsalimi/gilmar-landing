// src/components/sections/About/About.tsx
import Image from 'next/image';
import { Box, Container } from '@mui/material';
import ArrowButton from '@/components/ui/ArrowButton';
import SectionHeader from '@/components/ui/SectionHeader';
import AboutCollage from './AboutCollage';
import Icon from '@/components/ui/Icon';

export default function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: 120,
        py: { xs: 8, lg: 12 },
        bgcolor: 'background.default',
      }}
    >
      {/* خطوط شبکه‌ای پشت متن (سمت راست در RTL = insetInlineStart) */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: 40, // TODO(figma)
          insetInlineStart: 0,
          display: { xs: 'none', lg: 'block' },
          pointerEvents: 'none',
        }}
      >
        <Icon name="globe" size={22} />
      </Box>

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            // در RTL ستون اول سمت راسته: اول متن، بعد کلاژ
            gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 622px) minmax(0, 665px)' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: { xs: 6, lg: 4 },
          }}
        >
          <SectionHeader
            align="start"
            icon={<Image src="/icons/globe.svg" alt="" width={22} height={22} />}
            title="گیلمار؛ آرامش ناب در آغوش طبیعت گیلان"
            description="گیلمار با فضایی آرام، سرسبز و چشم‌اندازی زیبا از دریاچه‌ها، میزبان لحظاتی دلنشین و به‌یادماندنی برای شماست. طبیعت بکر تالابی، حضور پرندگان بومی و مهاجر، نزدیکی به جاذبه‌های گردشگری گیلان، مسیر دسترسی مناسب و انواع تفریحات و گشت‌های گیلان‌گردی، این اقامتگاه را به مقصدی متفاوت برای سفر تبدیل کرده است."
          >
            <ArrowButton href="#rooms" sx={{ mt: 4 }}>
              اقامت در گیلمار
            </ArrowButton>
          </SectionHeader>

          <AboutCollage />
        </Box>
      </Container>
    </Box>
  );
}
