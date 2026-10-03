// src/components/sections/Blog/BlogCard.tsx
import { Link, Typography } from '@mui/material';
import ImageCard from '@/components/ui/ImageCard';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  href: string;
}

export default function BlogCard({ title, excerpt, image, href }: BlogCardProps) {
  return (
    <ImageCard
      image={image}
      aspectRatio="408 / 482"
      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 410px"
      overlayStrength={0.85}
    >
      <Typography component="h3" sx={{ fontSize: 17, fontWeight: 800, lineHeight: 1.7 }}>
        {/* ::after کل کارت را کلیک‌پذیر می‌کند و برای خوانندهٔ صفحه فقط یک لینک وجود دارد */}
        <Link
          href={href}
          underline="none"
          color="inherit"
          sx={{ '&::after': { content: '""', position: 'absolute', inset: 0 } }}
        >
          {title}
        </Link>
      </Typography>
      <Typography
        sx={{
          mt: 1,
          fontSize: 13,
          lineHeight: 2,
          opacity: 0.75,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {excerpt}
      </Typography>
    </ImageCard>
  );
}
