// src/constants/values.ts
export const VALUES = [
  {
    id: 'equipment',
    title: 'مراقبت از وسایل اقامتگاه',
    description:
      'مهمانان عزیز مسئول نگهداری از تجهیزات و وسایل داخل اقامتگاه در طول مدت اقامت هستند.',
    icon: '/images/values/tent-moon.webp',
    cardRotate: 15, // TODO(figma): زاویه‌ی واقعی کارت
    iconRotate: 0, // زاویه‌ی آیکون نسبت به صفحه
  },
  {
    id: 'peace',
    title: 'حفظ آرامش اقامتگاه',
    description:
      'برای حفظ فضای آرام و دلنشین گیلمار، لطفاً از ایجاد سروصدای زیاد به‌ویژه در ساعات شب خودداری کنید.',
    icon: '/images/values/binoculars.webp',
    cardRotate: 15,
    iconRotate: 0,
  },
  {
    id: 'nature',
    title: 'حفظ طبیعت و محیط زیست',
    description:
      'گیلمار در دل طبیعت قرار دارد؛ لطفاً در حفظ محیط‌زیست، فضای سبز و منابع طبیعی همراه ما باشید.',
    icon: '/images/values/van-map.webp',
    cardRotate: -15, // در فایل SVG ون ۱۵- درجه چرخیده بود
    iconRotate: -15,
  },
] as const;
