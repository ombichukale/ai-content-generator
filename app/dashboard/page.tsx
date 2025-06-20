"use client"
import React, { useState } from 'react';
import SearchSection from './_components/SearchSection';
import TemplateListSection from './_components/TemplateListSection';
import { TotalUsageProvider } from '@/app/(context)/TotalUsageContext';

export default function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>('');

  return (
    <TotalUsageProvider>
      <div>
        <SearchSection
          onSearchInput={(value: string) => setUserSearchInput(value)}
        />
        <TemplateListSection userSearchInput={userSearchInput} />
      </div>
    </TotalUsageProvider>
  );
}