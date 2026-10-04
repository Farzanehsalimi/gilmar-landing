// src/components/layout/Footer/Footer.tsx
import Image from 'next/image';
import { Box, Container, Link, Typography } from '@mui/material';
import Icon from '@/components/ui/Icon';
import IconBox from '@/components/ui/IconBox';
import { CONTACT, FOOTER_LINKS, SOCIALS } from '@/constants/footer';

const cardSx = {
  bgcolor: 'rgba(255, 255, 255, 0.72)',
  border: '1px solid rgba(255, 255, 255, 0.95)',
  boxShadow: '0 10px 40px rgba(20, 33, 43, 0.06)',
  backdropFilter: 'blur(8px)',
} as const;

const textSx = { fontSize: 14, lineHeight: '32px', color: 'text.secondary' } as const;
const titleSx = {
  fontSize: 16,
  fontWeight: 800,
  lineHeight: '32px',
  color: 'text.primary',
} as const;

export default function Footer() {
  return (
    <Box
      component="footer"
      id="contact"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: 120,
        pt: { xs: 4, lg: 8 },
        pb: 3,
        // TODO(figma): گرادیانت پس‌زمینه‌ی پایین صفحه
        background:
          'radial-gradient(60% 70% at 100% 100%, rgba(200, 214, 255, 0.55), transparent), #F7FAFF',
      }}
    >
      <Container>
        {/* کارت اصلی */}
        <Box
          sx={{
            ...cardSx,
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '36px',
            minHeight: { lg: 282 },
          }}
        >
          {/* نقشه: bake شده با ماسک قاره‌ها، ۳۶۴×۲۷۵ در طرح */}
          <Box
            aria-hidden
            sx={{
              position: { xs: 'relative', lg: 'absolute' },
              top: { lg: 4 },
              bottom: { lg: 4 },
              insetInlineEnd: { lg: 4 }, // در RTL یعنی سمت چپ
              aspectRatio: '728 / 550',
              width: { xs: '100%', lg: 'auto' },
              maxWidth: { xs: 420, lg: 'none' },
              mx: { xs: 'auto', lg: 0 },
              mt: { xs: 1, lg: 0 },
            }}
          >
            <Image
              src="/images/footer/footer-map.webp"
              alt=""
              fill
              sizes="(max-width: 1200px) 420px, 364px"
            />
          </Box>

          {/* ستون‌ها: ۳۱۵ / ۱۲۳ / ۳۶۸ */}
          <Box
            sx={{
              position: 'relative',
              display: 'grid',
              gridTemplateColumns: {
                xs: 'minmax(0, 1fr)',
                md: 'repeat(2, minmax(0, 1fr))',
                lg: '315px 123px 368px',
              },
              columnGap: { md: '70px' },
              rowGap: 10,
              justifyContent: 'start',
              px: { xs: 3, lg: '30px' },
              py: { xs: 3, lg: '56px' },
            }}
          >
            {/* ستون ۱ (راست): لوگو و توضیح */}
            <Box>
              <Image
                src="/images/logo.svg"
                alt="اقامتگاه بوم‌گردی گیلمار"
                width={156}
                height={40}
              />
              <Typography sx={{ ...textSx, mt: 1.5, textAlign: 'justify' }}>
                اقامتگاه بوم‌گردی گیلمار، بزرگ‌ترین مجموعه اکولوژ شمال کشور با امکانات رفاهی و
                تفریحی متنوع، در فضایی منحصربه‌فرد و با مجوز رسمی میراث فرهنگی گیلان فعالیت می‌کند.
              </Typography>
            </Box>

            {/* ستون ۲: لینک‌ها */}
            <Box component="nav" aria-label="کاوش در گیلمار">
              <Typography component="h2" sx={titleSx}>
                کاوش در گیلمار
              </Typography>
              <Box
                component="ul"
                sx={{
                  m: 0,
                  mt: 1.5,
                  p: 0,
                  listStyle: 'disc',
                  paddingInlineStart: '18px',
                  '& li::marker': { color: 'text.secondary' },
                }}
              >
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      underline="none"
                      sx={{
                        ...textSx,
                        transition: 'color .2s ease',
                        '&:hover': { color: 'primary.main' },
                        '&:focus-visible': {
                          outline: '2px solid',
                          outlineColor: 'primary.main',
                          outlineOffset: 2,
                          borderRadius: '4px',
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </Box>
            </Box>

            {/* ستون ۳: تماس */}
            <Box component="address" sx={{ fontStyle: 'normal' }}>
              <Typography component="h2" sx={titleSx}>
                راه‌های ارتباط با گیلمار
              </Typography>
              <Typography sx={{ ...textSx, mt: 1.5 }}>
                تلفن پشتیبانی:{' '}
                {CONTACT.phones.map((phone, i) => (
                  <span key={phone}>
                    {i > 0 && ' - '}
                    <Link href={`tel:${phone}`} underline="hover" color="inherit">
                      <bdi dir="ltr">{phone}</bdi>
                    </Link>
                  </span>
                ))}
              </Typography>
              <Typography sx={textSx}>
                ایمیل:{' '}
                <Link href={`mailto:${CONTACT.email}`} underline="hover" color="inherit">
                  <bdi dir="ltr">{CONTACT.email}</bdi>
                </Link>
              </Typography>
              <Typography sx={textSx}>موقعیت گیلمار: {CONTACT.address}</Typography>
            </Box>
          </Box>
        </Box>

        {/* نوار کپی‌رایت و شبکه‌های اجتماعی */}
        <Box
          sx={{
            ...cardSx,
            mt: '12px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            px: '25px',
            py: { xs: 2, lg: 0 },
            minHeight: { lg: 68 },
            borderRadius: { xs: '28px', lg: '999px' },
          }}
        >
          <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>
            © تمامی حقوق برای اقامتگاه بوم‌گردی گیلمار محفوظ است.
          </Typography>

          <Box component="ul" sx={{ display: 'flex', gap: '12px', m: 0, p: 0, listStyle: 'none' }}>
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <Link
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'block',
                    borderRadius: '50%',
                    transition: 'transform .2s ease, filter .2s ease',
                    '&:hover': { transform: 'translateY(-2px)', filter: 'brightness(1.05)' },
                    '&:focus-visible': {
                      outline: '2px solid',
                      outlineColor: 'primary.dark',
                      outlineOffset: 3,
                    },
                  }}
                >
                  <IconBox size={40}>
                    <Icon name={s.name} size={18} color="common.white" />
                  </IconBox>
                </Link>
              </li>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
