// src/components/layout/Navbar/Navbar.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { NAV_ITEMS } from '@/constants/navigation';

function Logo() {
  return (
    <NextLink href="/" aria-label="صفحه اصلی" style={{ display: 'flex', alignItems: 'center' }}>
      <Image
        src="/images/logo.svg"
        alt="اقامتگاه بوم‌گردی گیلمار"
        width={156}
        height={40}
        priority
      />
    </NextLink>
  );
}

export default function Navbar() {
  const [activeHref, setActiveHref] = useState<string>(NAV_ITEMS[0].href);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setActiveHref(href);
    setMobileOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{ top: { xs: 5, lg: 24 }, backgroundImage: 'none' }}
    >
      <Container>
        <Box
          component="nav"
          aria-label="منوی اصلی"
          dir="rtl"
          sx={{
            position: 'relative',
            height: { xs: 64, lg: 77 },
            px: { xs: 1.5, lg: 3 },
            bgcolor: 'common.white',
            borderRadius: '40px',
            border: '1px solid',
            borderColor: 'rgba(20, 33, 43, 0.08)',
            boxShadow: '0 8px 32px rgba(20, 33, 43, 0.08)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 6,
              borderRadius: '36px',
              border: '1px solid',
              borderColor: 'rgba(20, 33, 43, 0.05)',
              pointerEvents: 'none',
            },
          }}
        >
          {/* راست: لوگو */}
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              flexGrow: { xs: 1, lg: 0 },
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Logo />
          </Box>

          {/* وسط: لینک‌های دسکتاپ */}
          <Box
            component="ul"
            sx={{
              display: { xs: 'none', lg: 'flex' },
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              gap: { lg: 3, xl: 5 },
              m: 0,
              px: { lg: 4, xl: 6 },
              p: 0,
              listStyle: 'none',
              position: 'relative',
              zIndex: 1,
              minWidth: 0,
              height: '100%',
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === activeHref;
              return (
                <li key={item.href} style={{ display: 'flex', alignItems: 'center' }}>
                  <Link
                    href={item.href}
                    underline="none"
                    onClick={() => handleNavClick(item.href)}
                    aria-current={isActive ? 'page' : undefined}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      fontFamily: 'inherit',
                      fontSize: { lg: 14, xl: 15 },
                      lineHeight: 1,
                      fontWeight: 700,
                      color: isActive ? 'primary.main' : 'text.primary',
                      transition: 'color .2s ease',
                      whiteSpace: 'nowrap',
                      '&:hover': { color: 'primary.main' },
                      '&:focus-visible': {
                        outline: '2px solid',
                        outlineColor: 'primary.main',
                        outlineOffset: 4,
                        borderRadius: '8px',
                      },
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </Box>

          {/* چپ: دکمه ورود + منوی موبایل */}
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              flexShrink: 0,
              height: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Button
              variant="gradient"
              href="#login"
              startIcon={
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 1,
                  }}
                >
                  <Image src="/icons/user.svg" alt="" width={24} height={24} />
                </Box>
              }
              sx={{ display: { xs: 'none', lg: 'inline-flex' } }}
            >
              ورود یا ثبت‌نام
            </Button>
            <IconButton
              aria-label="باز کردن منو"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { lg: 'none' } }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>

      {/* منوی موبایل */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{ paper: { sx: { borderBottomLeftRadius: 24, borderBottomRightRadius: 24 } } }}
      >
        <Box sx={{ p: 2 }} dir="rtl">
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
              <Logo />
            </Box>
            <IconButton aria-label="بستن منو" onClick={() => setMobileOpen(false)}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>
          <Divider sx={{ my: 2 }} />
          <List disablePadding>
            {NAV_ITEMS.map((item) => (
              <ListItemButton
                key={item.href}
                component="a"
                href={item.href}
                selected={item.href === activeHref}
                onClick={() => handleNavClick(item.href)}
                sx={{ borderRadius: '12px', fontFamily: 'inherit' }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
          <Button variant="gradient" fullWidth href="#login" sx={{ mt: 2 }}>
            ورود یا ثبت‌نام
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
