// src/constants/footer.ts
export const FOOTER_LINKS = [
  { label: 'سوئیت‌ها و اقامت', href: '#rooms' },
  { label: 'راهنمای مهمان‌ها', href: '#guide' },
  { label: 'درباره گیلمار', href: '#about' },
  { label: 'مجله گیلمار', href: '#blog' },
] as const;

// TODO: شماره‌ها را از Figma کپی کن (اسکرین‌شات برای خوندن دقیق کوچک بود)
export const CONTACT = {
  phones: ['01334775400', '01334775411'],
  email: 'Info@Gilmar-Gilan.Com',
  address: 'گیلان، جاده رشت به فومن، روستای ملاسرا، خیابان کوزه‌گران، اقامتگاه گیلمار',
} as const;

// ترتیب DOM: اولی سمت راست قرار می‌گیرد
export const SOCIALS = [
  { name: 'linkedin', label: 'لینکدین', href: '#' },
  { name: 'telegram', label: 'تلگرام', href: '#' },
  { name: 'youtube', label: 'یوتیوب', href: '#' },
  { name: 'x', label: 'ایکس', href: '#' },
] as const;
