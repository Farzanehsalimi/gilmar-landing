// src/utils/format.ts
/** ۱۳۰۰۰۰۰ → «۱۳۰۰۰۰۰» (ارقام فارسی، بدون جداکننده مطابق طراحی) */
export const formatToman = (value: number) =>
  `${value.toLocaleString('fa-IR', { useGrouping: false })} تومان`;
