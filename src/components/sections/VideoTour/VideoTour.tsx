// // src/components/sections/VideoTour/VideoTour.tsx
// import Image from 'next/image';
// import { Box, Container } from '@mui/material';
// import ArrowButton from '@/components/ui/ArrowButton';
// import Icon from '@/components/ui/Icon';
// import SectionHeader from '@/components/ui/SectionHeader';
// import VideoPlayer from './VideoPlayer';

// export default function VideoTour() {
//   return (
//     <Box
//       component="section"
//       id="video"
//       sx={{
//         position: 'relative',
//         overflow: 'hidden',
//         scrollMarginTop: 120,
//         py: { xs: 8, lg: 12 },
//         bgcolor: 'background.default',
//       }}
//     >
//       <Box
//         aria-hidden
//         sx={{
//           position: 'absolute',
//           top: 40,
//           insetInlineStart: 0,
//           display: { xs: 'none', lg: 'block' },
//           pointerEvents: 'none',
//         }}
//       >
//         <Image src="images/decor/grid-lines.svg" alt="" width={670} height={394} />
//       </Box>

//       <Container sx={{ position: 'relative', zIndex: 1 }}>
//         <Box sx={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', rowGap: 6 }}>
//           {/* متن روی ناحیه‌ی خالی نقشه می‌افتد (هر دو child در یک سلول grid) */}
//           <Box
//             sx={{
//               position: 'relative',
//               zIndex: 2,
//               gridArea: { xs: 'auto', lg: '1 / 1' },
//               justifySelf: 'start', // در RTL یعنی سمت راست
//               alignSelf: 'center',
//               width: '100%',
//               maxWidth: { lg: 507 },
//             }}
//           >
//             <SectionHeader
//               align="start"
//               icon={<Icon name="clapperboard-play" size={22} />}
//               title="تور ویدیویی اقامتگاه گیلمار"
//               description="در این تور ویدیویی، گوشه‌ای از آرامش، طبیعت بکر و فضای گرم اقامتگاه گیلمار را از نزدیک تماشا کنید و پیش از سفر حال‌وهوای دلنشین آن را تجربه کنید."
//             >
//               <ArrowButton href="#rooms" sx={{ mt: 4 }}>
//                 اقامت در گیلمار
//               </ArrowButton>
//             </SectionHeader>
//           </Box>

//           <VideoPlayer />
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// src/components/sections/VideoTour/VideoTour.tsx
import Image from 'next/image';
import { Box, Container } from '@mui/material';
import ArrowButton from '@/components/ui/ArrowButton';
import Icon from '@/components/ui/Icon';
import SectionHeader from '@/components/ui/SectionHeader';
import VideoPlayer from './VideoPlayer';

export default function VideoTour() {
  return (
    <Box
      component="section"
      id="video"
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
            // *** در xl دو ستونه می‌شود، در بقیه سایزها یک ستونه ***
            gridTemplateColumns: {
              xs: 'minmax(0, 1fr)',
              xl: 'minmax(0, 1fr) minmax(0, 1fr)',
            },
            // *** فاصله بین ستون‌ها فقط در xl ***
            columnGap: { xl: 4 },
            rowGap: 6,
            // *** تراز عمودی در xl ***
            alignItems: { xl: 'center' },
          }}
        >
          {/* متن */}
          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              // *** فقط در xl در ستون اول قرار می‌گیرد ***
              gridColumn: { xs: 'auto', xl: '1 / 2' },
              // *** فقط در xl در ردیف اول قرار می‌گیرد ***
              gridRow: { xs: 'auto', xl: '1 / 2' },
              justifySelf: 'start', // در RTL یعنی سمت راست
              alignSelf: 'center',
              width: '100%',
              maxWidth: { xl: 507 },
            }}
          >
            <SectionHeader
              align="start"
              icon={<Icon name="clapperboard-play" size={22} />}
              title="تور ویدیویی اقامتگاه گیلمار"
              description="در این تور ویدیویی، گوشه‌ای از آرامش، طبیعت بکر و فضای گرم اقامتگاه گیلمار را از نزدیک تماشا کنید و پیش از سفر حال‌وهوای دلنشین آن را تجربه کنید."
            >
              <ArrowButton href="#rooms" sx={{ mt: 4 }}>
                اقامت در گیلمار
              </ArrowButton>
            </SectionHeader>
          </Box>

          {/* ویدیو */}
          <Box
            sx={{
              // *** فقط در xl در ستون دوم قرار می‌گیرد ***
              gridColumn: { xs: 'auto', xl: '2 / 3' },
              // *** فقط در xl در ردیف اول قرار می‌گیرد ***
              gridRow: { xs: 'auto', xl: '1 / 2' },
            }}
          >
            <VideoPlayer />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
