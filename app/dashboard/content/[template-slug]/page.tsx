'use client'
import React, { useContext, useState, useEffect } from 'react'
import FormSection from '../_component/FormSection'
import OutputSection from '../_component/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModel'
import { db } from '@/utils/db'
import { AiOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useParams } from 'next/navigation'

interface PageParams {
  'template-slug': string;
}

export default function Page() {
  const { 'template-slug': templateSlug } = useParams();
  const selectedtemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === templateSlug
  );

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');
  const { user, isLoaded, isSignedIn } = useUser(); // Added isSignedIn to check if the user is signed in
  const { totalUsage, setTotalUsage, maxCredits } = useContext(TotalUsageContext);

  useEffect(() => {
    if (!isLoaded) {
      console.log('User data is still loading');
    }
    if (!isSignedIn) {
      console.error('User is not signed in');
    }
  }, [isLoaded, isSignedIn]);

  const GenerateAIContent = async (formData: any) => {
    if (totalUsage >= maxCredits) {
      alert('Free usage limit reached. Please upgrade to continue.');
      return;
    }

    setLoading(true);
    try {
      const selectedPrompt = selectedtemplate?.aiPrompt;
      const finalPrompt = JSON.stringify(formData) + ', ' + selectedPrompt;

      const result = await chatSession.sendMessage(finalPrompt);
      const responseText = await result?.response.text(); // ✅ FIXED LINE
      console.log("Generated AI Text:", responseText); // ✅ Added for debugging
      setAiOutput(responseText);
      await SaveInDb(JSON.stringify(formData), selectedtemplate?.slug, responseText);
    } catch (error) {
      console.error('Error generating content:', error);
    } finally {
      setLoading(false);
    }
  };

  const SaveInDb = async (formData: string, slug: string | undefined, aiResp: string) => {
    if (!slug) {
      console.error('Template slug is undefined');
      return;
    }

    if (!isLoaded || !user || !user.primaryEmailAddress?.emailAddress) {
      console.error('User email is undefined or user data is not loaded');
      return;
    }

    const createdBy = user.primaryEmailAddress.emailAddress;

    try {
      const result = await db.insert(AiOutput).values({
        formData: formData,
        templateSlug: slug,
        aiResponse: aiResp,
        createdBy: createdBy,
        createdAt: new Date().toISOString(),
      });
      console.log(result);
    } catch (error) {
      console.error('Error saving to database:', error);
    }
  };

  useEffect(() => {
    if (!templateSlug) {
      console.error('Template slug is missing');
    }
  }, [templateSlug]);

  return (
    <div className='p-10'>
      <Link href='/dashboard'>
        <Button>
          <ArrowLeft className='mr-2' />Back
        </Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-5'>
        <FormSection
          selectedTemplate={selectedtemplate}
          userFormInput={GenerateAIContent}
          loading={loading}
        />
        <div className='col-span-2'>
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}
