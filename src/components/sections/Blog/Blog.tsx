// src/components/sections/Blog/Blog.tsx
import Image from 'next/image';
import { Box, Container } from '@mui/material';
import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';
import { BLOG_POSTS } from '@/constants/blog';
import BlogCard from './BlogCard';

export default function Blog() {
  return (
    <Box
      component="section"
      id="blog"
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
          icon={<Icon name="plate" size={22} />}
          title="مجله و مقالات گیلمار؛ روایت سفر، طبیعت و آرامش"
          description="در مجله گیلمار، خواندنی‌هایی درباره سفر، طبیعت، فرهنگ محلی و تجربه اقامتی دلنشین را دنبال کنید."
        />

        <Box
          sx={{
            mt: { xs: 5, lg: 7 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
