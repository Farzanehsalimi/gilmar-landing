// src/components/sections/Faq/FaqAccordion.tsx
'use client';

import { useState, type SyntheticEvent } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import Icon from '@/components/ui/Icon';
import IconBox from '@/components/ui/IconBox';
import { FAQS } from '@/constants/faq';

export default function FaqAccordion() {
  // فقط یک آیتم باز است؛ اولی پیش‌فرض
  const [expanded, setExpanded] = useState<string | false>(FAQS[0].id);

  const handleChange = (id: string) => (_: SyntheticEvent, isOpen: boolean) =>
    setExpanded(isOpen ? id : false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {FAQS.map((item) => {
        const open = expanded === item.id;
        return (
          <Accordion
            key={item.id}
            expanded={open}
            onChange={handleChange(item.id)}
            disableGutters
            square // radius پیش‌فرض first/last-of-type حذف شود
            elevation={0}
            slotProps={{ heading: { component: 'h3' }, transition: { timeout: 300 } }}
            sx={{
              borderRadius: '34px', // TODO(figma)
              overflow: 'hidden',
              bgcolor: 'rgba(255, 255, 255, 0.72)',
              border: '1px solid rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
              boxShadow: open
                ? '0 18px 40px rgba(20, 33, 43, 0.1)'
                : '0 6px 20px rgba(20, 33, 43, 0.05)',
              transition: 'box-shadow .3s ease',
              '&::before': { display: 'none' }, // خط جداکننده‌ی پیش‌فرض MUI
            }}
          >
            <AccordionSummary
              id={`faq-${item.id}-header`}
              aria-controls={`faq-${item.id}-content`}
              // آیکون + / − : دایره‌ی سبز مشترک پروژه
              expandIcon={
                <IconBox size={40}>
                  <span style={{ color: 'white', fontSize: 20 }}>{open ? '−' : '+'}</span>
                </IconBox>
              }
              sx={{
                minHeight: 69,
                px: '28px',
                '&.Mui-expanded': { minHeight: 69 },
                '& .MuiAccordionSummary-content': { m: 0, py: 2 },
                '& .MuiAccordionSummary-content.Mui-expanded': { m: 0 },
                // MUI به‌صورت پیش‌فرض آیکون را ۱۸۰° می‌چرخاند؛ ما آیکون را عوض می‌کنیم
                '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': { transform: 'none' },
                '&.Mui-focusVisible': {
                  bgcolor: 'transparent',
                  outline: '2px solid',
                  outlineColor: 'primary.main',
                  outlineOffset: -2,
                  borderRadius: '34px',
                },
              }}
            >
              <Typography
                sx={{ fontSize: { xs: 14, md: 15 }, fontWeight: 800, color: 'text.primary' }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ px: '28px', pt: 0, pb: 3.5 }}>
              <Typography sx={{ fontSize: 14, lineHeight: 2.3, color: 'text.secondary' }}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
