'use client';

import dynamic from 'next/dynamic';

const ExcelWorkbook = dynamic(() => import('@/components/ExcelWorkbook'), {
  ssr: false,
});

export default function Home() {
  return <ExcelWorkbook />;
}
