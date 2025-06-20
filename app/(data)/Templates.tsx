export default [
    {
        name: 'Blog Title Generator',
        desc: 'AI-powered tool that generates engaging, SEO-optimized blog titles based on your content outline or description',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt: 'Generate 10 compelling, SEO-friendly blog titles based on the provided niche and outline. Include a mix of how-to, listicle, and question-based titles. Format the output in rich text editor format.',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true,
                placeholder: 'e.g., Digital Marketing, Personal Finance, Health & Wellness'
            },
            {
                label: 'Enter blog outlines (optional)',
                field: 'textarea',
                name: 'outline',
                placeholder: 'Add key points you want to cover in your blog'
            }
        ]
    },

    {
        name: 'Blog Outline Generator',
        desc: 'Create comprehensive, well-structured blog outlines with AI assistance',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/2593/2593549.png',
        aiPrompt: 'Generate a detailed, hierarchical blog outline with main points, subpoints, and suggested word count for each section. Include an introduction and conclusion. Format in rich text editor style.',
        slug: 'generate-blog-outline',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true,
                placeholder: 'e.g., Technology, Fitness, Business'
            },
            {
                label: 'Enter your blog topic',
                field: 'textarea',
                name: 'topic',
                required: true,
                placeholder: 'Describe what you want to write about'
            },
            {
                label: 'Target word count',
                field: 'input',
                name: 'wordCount',
                type: 'number',
                placeholder: 'e.g., 1500'
            }
        ]
    },

    {
        name: 'Content Generator',
        desc: 'AI tool that generates high-quality, engaging content based on your outline or topic',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/9079/9079294.png',
        aiPrompt: 'Generate detailed, well-researched content with proper headings, subheadings, and natural paragraph flows. Include relevant examples and maintain a consistent tone. Format in rich text editor style.',
        slug: 'generate-content',
        form: [
            {
                label: 'Enter your content topic',
                field: 'input',
                name: 'topic',
                required: true,
                placeholder: 'Main topic or title of your content'
            },
            {
                label: 'Content outline',
                field: 'textarea',
                name: 'outline',
                placeholder: 'Provide a basic structure or key points to cover'
            },
            {
                label: 'Tone of voice',
                field: 'input',
                name: 'tone',
                placeholder: 'e.g., Professional, Casual, Educational'
            },
            {
                label: 'Target word count',
                field: 'input',
                name: 'wordCount',
                type: 'number',
                placeholder: 'e.g., 1500'
            }
        ]
    },

    {
        name: 'SEO Meta Description Generator',
        desc: 'Create compelling meta descriptions that improve click-through rates',
        category: 'SEO',
        icon: 'https://cdn-icons-png.flaticon.com/128/1378/1378598.png',
        aiPrompt: 'Generate 5 SEO-optimized meta descriptions (150-160 characters each) that include the target keyword and encourage clicks. Format in rich text editor style.',
        slug: 'generate-meta-description',
        form: [
            {
                label: 'Page Title',
                field: 'input',
                name: 'title',
                required: true,
                placeholder: 'Enter the title of your page'
            },
            {
                label: 'Target Keyword',
                field: 'input',
                name: 'keyword',
                required: true,
                placeholder: 'Main keyword to include'
            },
            {
                label: 'Page Content Summary',
                field: 'textarea',
                name: 'content',
                placeholder: 'Brief summary of your page content'
            }
        ]
    },

    {
        name: 'YouTube Tags Generator',
        desc: 'Generate optimized YouTube tags to improve video visibility and reach',
        category: 'Youtube',
        icon: 'https://cdn-icons-png.flaticon.com/128/10884/10884883.png',
        aiPrompt: 'Generate a comprehensive list of relevant YouTube tags, including broad and long-tail keywords. Provide tags in order of relevance and include trending tags where appropriate.',
        slug: 'generate-youtube-tags',
        form: [
            {
                label: 'Video Title',
                field: 'input',
                name: 'title',
                required: true,
                placeholder: 'Enter your video title'
            },
            {
                label: 'Video Description',
                field: 'textarea',
                name: 'description',
                placeholder: 'Brief description of your video content'
            },
            {
                label: 'Video Category',
                field: 'input',
                name: 'category',
                placeholder: 'e.g., Education, Entertainment, Gaming'
            }
        ]
    },

    {
        name: 'YouTube Description Generator',
        desc: 'Create engaging, SEO-friendly YouTube video descriptions',
        category: 'Youtube',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png',
        aiPrompt: 'Generate a detailed YouTube description with timestamps, relevant links, and calls to action. Include important keywords naturally.',
        slug: 'generate-youtube-description',
        form: [
            {
                label: 'Video Title',
                field: 'input',
                name: 'title',
                required: true,
            },
            {
                label: 'Key Topics/Timestamps',
                field: 'textarea',
                name: 'timestamps',
                placeholder: 'List main points with timestamps'
            },
            {
                label: 'Call to Action',
                field: 'input',
                name: 'cta',
                placeholder: 'What should viewers do after watching?'
            }
        ]
    },

    {
        name: 'Instagram Tags Generator',
        desc: 'Generate relevant hashtags to maximize your Instagram post reach',
        category: 'Instagram',
        icon: 'https://cdn-icons-png.flaticon.com/128/174/174855.png',
        aiPrompt: 'Generate a mix of popular, niche, and branded Instagram hashtags. Include trending tags and organize by popularity range.',
        slug: 'generate-instagram-tags',
        form: [
            {
                label: 'Post Topic',
                field: 'input',
                name: 'topic',
                required: true,
                placeholder: 'What is your post about?'
            },
            {
                label: 'Industry/Niche',
                field: 'input',
                name: 'industry',
                required: true,
                placeholder: 'e.g., Fashion, Food, Travel'
            },
            {
                label: 'Additional Details',
                field: 'textarea',
                name: 'details',
                placeholder: 'Any specific elements to include'
            }
        ]
    },

    {
        name: 'Instagram Caption Generator',
        desc: 'Create engaging Instagram captions that drive engagement',
        category: 'Instagram',
        icon: 'https://cdn-icons-png.flaticon.com/128/174/174855.png',
        aiPrompt: 'Generate an engaging Instagram caption with emojis, line breaks, and a strong call to action. Include relevant hashtags suggestions.',
        slug: 'generate-instagram-caption',
        form: [
            {
                label: 'Post Topic',
                field: 'input',
                name: 'topic',
                required: true,
                placeholder: 'What is your post about?'
            },
            {
                label: 'Brand Voice',
                field: 'input',
                name: 'voice',
                placeholder: 'e.g., Casual, Professional, Funny'
            },
            {
                label: 'Additional Details',
                field: 'textarea',
                name: 'details',
                placeholder: 'Key points to include in the caption'
            }
        ]
    },

    {
        name: 'Email Subject Line Generator',
        desc: 'Create attention-grabbing email subject lines that boost open rates',
        category: 'Email',
        icon: 'https://cdn-icons-png.flaticon.com/128/482/482138.png',
        aiPrompt: 'Generate 10 compelling email subject lines based on the email content and purpose. Include a mix of urgent, curious, and value-proposition based subjects.',
        slug: 'generate-email-subject',
        form: [
            {
                label: 'Email Purpose',
                field: 'input',
                name: 'purpose',
                required: true,
                placeholder: 'e.g., Newsletter, Promotion, Welcome Email'
            },
            {
                label: 'Email Content Summary',
                field: 'textarea',
                name: 'content',
                required: true,
                placeholder: 'Brief summary of email content'
            },
            {
                label: 'Target Audience',
                field: 'input',
                name: 'audience',
                placeholder: 'Who is this email for?'
            }
        ]
    },

    {
        name: 'Social Media Content Calendar',
        desc: 'Generate a weeks worth of social media content ideas and posting schedule',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/3955/3955024.png',
        aiPrompt: 'Create a 7-day social media content calendar with post ideas, best posting times, and content themes for each day.',
        slug: 'generate-social-calendar',
        form: [
            {
                label: 'Business/Brand Type',
                field: 'input',
                name: 'business',
                required: true,
                placeholder: 'Your business or brand category'
            },
            {
                label: 'Target Platforms',
                field: 'input',
                name: 'platforms',
                required: true,
                placeholder: 'e.g., Instagram, Twitter, LinkedIn'
            },
            {
                label: 'Content Goals',
                field: 'textarea',
                name: 'goals',
                placeholder: 'What do you want to achieve?'
            }
        ]
    },

    {
        name: 'LinkedIn Post Generator',
        desc: 'Create engaging LinkedIn posts that drive professional engagement',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/3536/3536505.png',
        aiPrompt: 'Generate a professional LinkedIn post with appropriate hashtags, formatting, and call-to-action.',
        slug: 'generate-linkedin-post',
        form: [
            {
                label: 'Post Topic',
                field: 'input',
                name: 'topic',
                required: true,
                placeholder: 'What do you want to post about?'
            },
            {
                label: 'Industry',
                field: 'input',
                name: 'industry',
                required: true,
                placeholder: 'Your professional industry'
            },
            {
                label: 'Key Points',
                field: 'textarea',
                name: 'points',
                placeholder: 'Main points to cover in the post'
            }
        ]
    },

    {
        name: 'Product Description Generator',
        desc: 'Create compelling product descriptions that convert',
        category: 'Others',
        icon: 'https://cdn-icons-png.flaticon.com/128/4129/4129571.png',
        aiPrompt: 'Generate an engaging product description that highlights benefits, features, and unique selling points. Include technical specifications and emotional appeals.',
        slug: 'generate-product-description',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'product',
                required: true,
                placeholder: 'Name of your product'
            },
            {
                label: 'Product Category',
                field: 'input',
                name: 'category',
                required: true,
                placeholder: 'e.g., Electronics, Fashion, Home'
            },
            {
                label: 'Key Features',
                field: 'textarea',
                name: 'features',
                placeholder: 'List main product features'
            },
            {
                label: 'Target Audience',
                field: 'input',
                name: 'audience',
                placeholder: 'Who is this product for?'
            }
        ]
    },

    {
        name: 'AI Content Detector',
        desc: 'Analyze text to determine if it was likely written by AI or a human',
        category: 'Others',
        icon: 'https://cdn-icons-png.flaticon.com/128/1693/1693746.png',
        aiPrompt: 'Analyze the provided text and determine the likelihood of it being AI-generated. Provide detailed reasoning and confidence score.',
        slug: 'detect-ai-content',
        form: [
            {
                label: 'Enter the text to analyze',
                field: 'textarea',
                name: 'content',
                required: true,
                placeholder: 'Paste the content you want to analyze'
            },
            {
                label: 'Content Type',
                field: 'input',
                name: 'type',
                placeholder: 'e.g., Article, Social Post, Product Description'
            }
        ]
    },
    {
        name: 'Ad Copy Generator',
        desc: 'Create compelling ad copy for various platforms (Google, Facebook, Instagram)',
        category: 'Advertising',
        icon: 'https://cdn-icons-png.flaticon.com/128/1968/1968666.png',
        aiPrompt: 'Generate engaging ad copy variations including headlines, main text, and call-to-action for the specified platform. Consider character limits and best practices.',
        slug: 'generate-ad-copy',
        form: [
            {
                label: 'Platform',
                field: 'select',
                name: 'platform',
                required: true,
                options: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'LinkedIn Ads'],
            },
            {
                label: 'Product/Service Name',
                field: 'input',
                name: 'product',
                required: true,
                placeholder: 'What are you advertising?'
            },
            {
                label: 'Key Benefits',
                field: 'textarea',
                name: 'benefits',
                placeholder: 'List main benefits or selling points'
            },
            {
                label: 'Target Audience',
                field: 'input',
                name: 'audience',
                placeholder: 'Who is your ideal customer?'
            }
        ]
    },

    {
        name: 'Video Script Generator',
        desc: 'Create professional scripts for various video types',
        category: 'Video',
        icon: 'https://cdn-icons-png.flaticon.com/128/1179/1179069.png',
        aiPrompt: 'Generate a detailed video script with scene descriptions, dialogue, and timing. Include hooks, transitions, and call-to-action.',
        slug: 'generate-video-script',
        form: [
            {
                label: 'Video Type',
                field: 'select',
                name: 'type',
                required: true,
                options: ['Educational', 'Product Demo', 'Advertisement', 'Explainer', 'Tutorial'],
            },
            {
                label: 'Video Length (minutes)',
                field: 'input',
                name: 'length',
                type: 'number',
                required: true,
            },
            {
                label: 'Main Topic/Message',
                field: 'textarea',
                name: 'topic',
                required: true,
                placeholder: 'What is your video about?'
            },
            {
                label: 'Key Points',
                field: 'textarea',
                name: 'points',
                placeholder: 'List the main points to cover'
            }
        ]
    },

    {
        name: 'FAQ Generator',
        desc: 'Generate comprehensive FAQ sections for websites or products',
        category: 'Others',
        icon: 'https://cdn-icons-png.flaticon.com/128/3602/3602123.png',
        aiPrompt: 'Generate relevant frequently asked questions and detailed answers based on the provided information. Include both basic and advanced questions.',
        slug: 'generate-faqs',
        form: [
            {
                label: 'Topic/Product Name',
                field: 'input',
                name: 'topic',
                required: true,
                placeholder: 'What needs FAQ coverage?'
            },
            {
                label: 'Key Information',
                field: 'textarea',
                name: 'info',
                required: true,
                placeholder: 'Provide main details about your topic/product'
            },
            {
                label: 'Number of FAQs needed',
                field: 'input',
                name: 'count',
                type: 'number',
                placeholder: 'How many FAQ items do you need?'
            }
        ]
    },

    {
        name: 'Landing Page Copy Generator',
        desc: 'Create converting landing page copy with proper structure',
        category: 'Website',
        icon: 'https://cdn-icons-png.flaticon.com/128/1828/1828854.png',
        aiPrompt: 'Generate comprehensive landing page copy including headline, subheadline, features, benefits, testimonial suggestions, and call-to-action sections.',
        slug: 'generate-landing-page',
        form: [
            {
                label: 'Product/Service Name',
                field: 'input',
                name: 'product',
                required: true,
            },
            {
                label: 'Unique Value Proposition',
                field: 'textarea',
                name: 'uvp',
                required: true,
            },
            {
                label: 'Target Audience',
                field: 'input',
                name: 'audience',
            },
            {
                label: 'Key Features/Benefits',
                field: 'textarea',
                name: 'features',
            }
        ]
    },

    {
        name: 'Twitter Thread Generator',
        desc: 'Create engaging Twitter threads that drive engagement',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/3256/3256013.png',
        aiPrompt: 'Generate an engaging Twitter thread with proper formatting, hooks, and hashtags. Include engagement prompts and clear connection between tweets.',
        slug: 'generate-twitter-thread',
        form: [
            {
                label: 'Thread Topic',
                field: 'input',
                name: 'topic',
                required: true,
                placeholder: 'What is your thread about?'
            },
            {
                label: 'Key Points',
                field: 'textarea',
                name: 'points',
                required: true,
                placeholder: 'List the main points to cover'
            },
            {
                label: 'Thread Length',
                field: 'input',
                name: 'length',
                type: 'number',
                placeholder: 'Number of tweets in thread'
            }
        ]
    },

    {
        name: 'Podcast Description Generator',
        desc: 'Create engaging podcast episode descriptions',
        category: 'Audio',
        icon: 'https://cdn-icons-png.flaticon.com/128/2628/2628834.png',
        aiPrompt: 'Generate an engaging podcast episode description with episode highlights, guest bios (if applicable), and key takeaways.',
        slug: 'generate-podcast-description',
        form: [
            {
                label: 'Episode Title',
                field: 'input',
                name: 'title',
                required: true,
            },
            {
                label: 'Episode Topics',
                field: 'textarea',
                name: 'topics',
                required: true,
            },
            {
                label: 'Guest Information',
                field: 'textarea',
                name: 'guest',
                placeholder: 'Guest bio and credentials (if applicable)'
            }
        ]
    },

    {
        name: 'Press Release Generator',
        desc: 'Create professional press releases for news and announcements',
        category: 'PR',
        icon: 'https://cdn-icons-png.flaticon.com/128/3039/3039386.png',
        aiPrompt: 'Generate a professional press release following standard format, including headline, dateline, lead paragraph, body, and boilerplate.',
        slug: 'generate-press-release',
        form: [
            {
                label: 'Announcement Type',
                field: 'select',
                name: 'type',
                required: true,
                options: ['Product Launch', 'Company News', 'Event', 'Achievement', 'Partnership'],
            },
            {
                label: 'Key Information',
                field: 'textarea',
                name: 'info',
                required: true,
            },
            {
                label: 'Company Boilerplate',
                field: 'textarea',
                name: 'boilerplate',
            },
            {
                label: 'Contact Information',
                field: 'textarea',
                name: 'contact',
            }
        ]
    },

    {
        name: 'Email Newsletter Generator',
        desc: 'Create engaging email newsletters with proper structure',
        category: 'Email',
        icon: 'https://cdn-icons-png.flaticon.com/128/3178/3178158.png',
        aiPrompt: 'Generate a compelling email newsletter with sections for main story, news roundup, featured content, and call-to-action.',
        slug: 'generate-newsletter',
        form: [
            {
                label: 'Newsletter Theme',
                field: 'input',
                name: 'theme',
                required: true,
            },
            {
                label: 'Main Story',
                field: 'textarea',
                name: 'mainStory',
                required: true,
            },
            {
                label: 'Additional Content',
                field: 'textarea',
                name: 'additional',
            },
            {
                label: 'Target Audience',
                field: 'input',
                name: 'audience',
            }
        ]
    },

    {
        name: 'Product Review Generator',
        desc: 'Create balanced and detailed product reviews',
        category: 'Others',
        icon: 'https://cdn-icons-png.flaticon.com/128/1484/1484578.png',
        aiPrompt: 'Generate a comprehensive product review including pros, cons, key features, user experience, and final verdict with rating.',
        slug: 'generate-product-review',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'product',
                required: true,
            },
            {
                label: 'Product Category',
                field: 'input',
                name: 'category',
                required: true,
            },
            {
                label: 'Key Features',
                field: 'textarea',
                name: 'features',
            },
            {
                label: 'Pros and Cons',
                field: 'textarea',
                name: 'proscons',
            }
        ]
    },

    {
        name: 'Social Media Bio Generator',
        desc: 'Create engaging bios for various social media platforms',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/3955/3955024.png',
        aiPrompt: 'Generate platform-specific bio content that highlights key information while maintaining character limits and including relevant emoji.',
        slug: 'generate-social-bio',
        form: [
            {
                label: 'Platform',
                field: 'select',
                name: 'platform',
                required: true,
                options: ['Instagram', 'Twitter', 'LinkedIn', 'TikTok'],
            },
            {
                label: 'Professional Title/Role',
                field: 'input',
                name: 'title',
                required: true,
            },
            {
                label: 'Key Achievements/Interests',
                field: 'textarea',
                name: 'achievements',
            },
            {
                label: 'Website/Link',
                field: 'input',
                name: 'website',
            }
        ]
    }
]


