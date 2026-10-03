// src/components/sections/Packages/Packages.tsx
import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import ArrowButton from '@/components/ui/ArrowButton';
import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';
import { PACKAGE } from '@/constants/packages';
import { formatToman } from '@/utils/format';
import PackageSlider from './PackageSlider';

export default function Packages() {
  return (
    <Box
      component="section"
      id="packages"
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
          top: 40,
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
            gridTemplateColumns: { xs: 'minmax(0, 1fr)', lg: 'minmax(0, 630px) minmax(0, 602px)' },
            justifyContent: 'space-between',
            alignItems: 'center',
            rowGap: 6,
          }}
        >
          <SectionHeader
            align="start"
            icon={<Icon name="box-minimalistic" size={22} />}
            title="پکیج‌های ویژه اقامت در گیلمار"
            description="پکیج‌های ویژه ما ترکیبی از اقامت آرام، غذاهای محلی و تفریحات هیجان‌انگیز در دل طبیعت است."
          >
            <Box sx={{ mt: { xs: 4, lg: 6 }, width: '100%' }}>
              <Typography component="h3" sx={{ fontSize: 18, fontWeight: 800 }}>
                {PACKAGE.title}
              </Typography>
              <Typography sx={{ mt: 1, fontSize: 13, color: 'text.secondary' }}>
                {PACKAGE.summary}
              </Typography>

              <Box
                component="ul"
                sx={{
                  mt: 3,
                  p: 0,
                  listStyle: 'none',
                  display: 'grid',
                  gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
                  gap: { xs: 2, lg: '43px' }, // TODO(figma)
                }}
              >
                {PACKAGE.items.map((item) => (
                  <Box
                    component="li"
                    key={item.id}
                    sx={{
                      aspectRatio: '126 / 124',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 1.5,
                      bgcolor: 'common.white',
                      borderRadius: '20px',
                      boxShadow: '0 12px 32px rgba(20, 33, 43, 0.08)',
                      transition: 'transform .25s ease, box-shadow .25s ease',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 18px 40px rgba(20, 33, 43, 0.12)',
                      },
                    }}
                  >
                    <Image src={item.icon} alt="" width={46} height={46} />
                    <Typography sx={{ fontSize: 13, fontWeight: 700 }}>{item.label}</Typography>
                  </Box>
                ))}
              </Box>

              <Box
                sx={{
                  mt: 4,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 2,
                }}
              >
                <Typography sx={{ fontSize: 16, fontWeight: 800, color: 'primary.main' }}>
                  قیمت: {formatToman(PACKAGE.price)}
                </Typography>
                <ArrowButton href="#contact">همین حالا رزرو کن</ArrowButton>
              </Box>
            </Box>
          </SectionHeader>

          <PackageSlider />
        </Box>
      </Container>
    </Box>
  );
}
