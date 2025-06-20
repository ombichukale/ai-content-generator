'use client'
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader2Icon, Sparkles } from 'lucide-react'

interface PROPS {
    selectedTemplate?: TEMPLATE,
    userFormInput: any,
    loading: boolean,
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
    const [formData, setFormData] = useState<any>();

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        userFormInput(formData);
    }

    return (
        <div className='max-w-2xl mx-auto'>
            <div className='p-8 shadow-lg border rounded-xl bg-white relative overflow-hidden'>
                {/* Decorative gradient blur */}
                <div className='absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/10 via-purple-100/5 to-transparent blur-3xl -z-10' />

                {/* Header Section */}
                <div className='flex items-start gap-6 mb-8'>
                    <div className='relative group'>
                        <div className='absolute inset-0 bg-primary/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 -z-10' />
                        {/* @ts-ignore */}
                        <Image
                                src={selectedTemplate?.icon ?? ''}
                                alt='icon'
                                width={70}
                                height={70}
                                className='p-3 bg-white rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300'
                            />
                    </div>
                    <div className='flex-1'>
                        <h2 className='font-bold text-2xl mb-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent'>
                            {selectedTemplate?.name}
                        </h2>
                        <p className='text-gray-600 leading-relaxed'>
                            {selectedTemplate?.desc}
                        </p>
                    </div>
                </div>

                {/* Form Section */}
                <form onSubmit={onSubmit} className='space-y-6'>
                    {selectedTemplate?.form?.map((item, index) => (
                        <div key={index} className='relative group'>
                            <label className='block mb-2 font-medium text-gray-700'>
                                {item.label}
                                {item.required && <span className='text-red-500 ml-1'>*</span>}
                            </label>
                            {item.field === 'input' ? (
                                <Input
                                    name={item.name}
                                    required={item?.required}
                                    onChange={handleInputChange}
                                    className='w-full border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300'
                                    placeholder={`Enter ${item.label.toLowerCase()}`}
                                />
                            ) : item.field === 'textarea' ? (
                                <Textarea
                                    name={item.name}
                                    required={item?.required}
                                    onChange={handleInputChange}
                                    className='w-full border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 min-h-[100px] resize-y'
                                    placeholder={`Enter ${item.label.toLowerCase()}`}
                                />
                            ) : null}
                            {/* Subtle line decoration */}
                            <div className='absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-purple-600 group-focus-within:w-full transition-all duration-300' />
                        </div>
                    ))}

                    {/* Submit Button */}
                    <Button
                        type='submit'
                        disabled={loading}
                        className='w-full py-6 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 shadow-lg hover:shadow-primary/25 group'
                    >
                        <span className='flex items-center gap-2 justify-center'>
                            {loading ? (
                                <Loader2Icon className='animate-spin' />
                            ) : (
                                <Sparkles className='w-5 h-5 group-hover:animate-pulse' />
                            )}
                            <span className='font-medium'>
                                {loading ? 'Generating...' : 'Generate Content'}
                            </span>
                        </span>
                    </Button>
                </form>
            </div>

            {/* Optional: Helper text */}
            <p className='text-center text-sm text-gray-500 mt-4'>
                Fill in the details above and click generate to create your content
            </p>
        </div>
    )
}

export default FormSection