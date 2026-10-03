// src/constants/packages.ts
export const PACKAGE = {
  title: 'پکیج رمانتیک دو نفره',
  summary: 'شامل: ۱ شب اقامت + صبحانه + تور جنگل‌نوردی + قایق‌سواری',
  price: 2300000,
  items: [
    { id: 'stay', label: '۱ شب اقامت', icon: '/images/values/tent-moon.webp' },
    { id: 'breakfast', label: 'صبحانه', icon: '/images/packages/coconut.webp' },
    { id: 'kayak', label: 'قایق‌سواری', icon: '/images/packages/kayak.webp' },
    { id: 'trek', label: 'تور جنگل‌نوردی', icon: '/images/packages/forest-tour.webp' },
  ],
  slides: [
    '/images/rooms/autumn-cabin.webp',
    '/images/rooms/wooden-cabin.webp',
    '/images/rooms/modern-cabin.webp',
    '/images/rooms/forest-cabin.webp',
  ],
  slideCaption: 'تجربه‌ی اقامتی اصیل در دل طبیعت شمال',
} as const;
