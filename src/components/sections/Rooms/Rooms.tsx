// src/components/sections/Rooms/Rooms.tsx
import Image from 'next/image';
import { Box, Container } from '@mui/material';
import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';
import { ROOMS } from '@/constants/rooms';
import RoomCard from './RoomCard';

export default function Rooms() {
  return (
    <Box
      component="section"
      id="rooms"
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
          insetInlineEnd: 0,
          display: { xs: 'none', lg: 'block' },
          pointerEvents: 'none',
        }}
      >
        <Image src="images/decor/grid-lines.svg" alt="" width={670} height={394} />
      </Box>

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader
          icon={<Icon name="star-badge" size={22} />}
          title="انواع اتاق‌های اقامتگاه گیلمار"
          description="اتاق‌های گیلمار با فضایی دنج و امکانات مناسب، برای اقامتی آرام در دل طبیعت آماده شده‌اند."
        />

        <Box
          sx={{
            mt: { xs: 5, lg: 7 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: 3,
          }}
        >
          {ROOMS.map((room) => (
            <RoomCard key={room.id} {...room} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
