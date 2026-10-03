// src/components/sections/Rooms/RoomCard.tsx
import { Typography } from '@mui/material';
import ImageCard from '@/components/ui/ImageCard';
import { formatToman } from '@/utils/format';

interface RoomCardProps {
  title: string;
  pricePerNight: number;
  image: string;
}

export default function RoomCard({ title, pricePerNight, image }: RoomCardProps) {
  return (
    <ImageCard
      image={image}
      aspectRatio="302 / 301" // TODO(figma)
      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 302px"
    >
      <Typography component="h3" sx={{ fontSize: 18, fontWeight: 800, lineHeight: 1.6 }}>
        {title}
      </Typography>
      <Typography sx={{ mt: 0.5, fontSize: 12, fontWeight: 400, opacity: 0.85 }}>
        هر شب اقامت از {formatToman(pricePerNight)}
      </Typography>
    </ImageCard>
  );
}
