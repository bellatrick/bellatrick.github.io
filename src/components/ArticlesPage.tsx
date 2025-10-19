import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
// @ts-ignore: PNG module type missing
import daytona from '../assets/daytona.png';
// @ts-ignore: PNG module type missing
import shift from '../assets/shifts.png';
// @ts-ignore: PNG module type missing
import bejamas from '../assets/bejamas.png'
// @ts-ignore: PNG module type missing
import aws_translate from '../assets/aws_translate.png'
// @ts-ignore: PNG module type missing
import deepgram from '../assets/deepgram.png'
// @ts-ignore: PNG module type missing
import translate_app from '../assets/translate_app.png'
// @ts-ignore: PNG module type missing
import notif from '../assets/notif.png'

interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  link: string;
}

export function ArticlesPage() {
  const articles: Article[] = [
       {
      id: '2',
      title: 'Automating Shift Scheduling with Twilio SMS and Google Sheets',
      description: 'In this tutorial, you will learn how to build a solution to automate the process of swapping shifts using Google Sheets, Twilio Programmable Messaging, and a Node.js backend.',
      image: shift,
      date: 'Feb 28, 2025',
      readTime: '10 min read',
      link: 'www.twilio.com%2Fen-us%2Fblog%2Fautomating-shift-scheduling-twilio-sms-google-sheets&urlhash=kRqF&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_single_media_viewer%3BexyyLgaRRdauvJUUxnbfIA%3D%3D',
    },
    {
      id: '1',
      title: 'Using Environmental Variables in Daytona',
      description: 'Environmental variables are important for configuring development environments and storing sensitive information. They provide a flexible way to control application behavior without hardcoding values directly into the source code.',
      image: daytona,
      date: 'Dec 20, 2024',
      readTime: '3 min read',
      link: 'https%3A%2F%2Fwww.daytona.io%2Fdotfiles%2Fusing-environmental-variables-in-daytona&urlhash=Gqj6&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_single_media_viewer%3BeNFJW%2FpiR%2F6qFUZxch5oJA%3D%3D',
    },

    {
      id: '3',
      title: 'Building a Twilio-to-Spreadsheets Notification System',
      description: 'This article will guide you through writing a few scripts to build an automated notification system for Microsoft Excel and Google Sheets. Using Twilio Programmable Messaging and Twilio SendGrid, this system will alert you when specific, predefined metrics in your data change. ',
      image: notif,
      date: 'Oct 25, 2024',
      readTime: '11 min read',
      link: 'https://www.twilio.com/en-us/blog/developers/community/building-twilio-spreadsheet-notification-system',
    },
    {
      id: '4',
      title: 'Analyzing Customer Sentiment with Twilio Voice, Functions, and Deepgram AI',
      description: 'This article outlines a step-by-step guide to enable customer sentiment analysis in phone calls by integrating Twilio Programmable Voice and AI.',
      image: deepgram,
      date: 'Apr 17, 2024',
      readTime: '10 min read',
      link: 'https://www.twilio.com/en-us/blog/analyzing-customer-sentiment-twilio-voice-functions-deepgram-ai',
    },
    {
      id: '5',
      title: 'Build an Email Translator Application with Twilio SendGrid and Amazon Translate',
      description: 'This tutorial will explain how to use Twilio SendGrid, Amazon Translate, and Node.js to add email translation to your application.',
      image: aws_translate,
      date: 'July 12, 2024',
      readTime: '11 min read',
      link: 'https://www.twilio.com/en-us/blog/developers/community/building-multilingual-email-app-sendgrid-amazon-translate',
    },
    {
      id: '6',
      title: 'Exploring the intersection of artificial intelligence and modern web technology',
      description: 'Can AI enhance web technology, even replace developers or designers? This article provides insights into how AI is currently being used and its future potential in web development.',
      image:bejamas,
      date: 'Nov 18, 2024',
      readTime: '16 min read',
      link: 'https://bejamas.com/hub/guides/artificial-intelligence-and-modern-web-technology',
    },
      {
      id: '7',
      title: 'Build an Auto-Translating Chat App with Twilio WhatsApp',
      description: "If you are interested in learning how to build your own social media bot, this article is for you. In this article, published on Twilio's blog, I share my experience of building an auto-translating chat app with Twilio WhatsApp and Google Cloud Translate API. I have always been fascinated by bots on WhatsApp and other platforms, and I wanted to create one that could communicate with users in different languages.",
      image: translate_app,
      date: 'Oct 16, 2023',
      readTime: '15 min read',
      link: 'https://www.twilio.com/en-us/blog/auto-translating-chat-app-twilio-whatsapp',
    },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-gray-900 dark:text-white mb-2">Articles</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
        Technical articles about integration and automation authored by me.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {articles.map((article) => (
          <Card
            key={article.id}
            className="overflow-hidden bg-white dark:bg-[#292827] hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video overflow-hidden">
              <ImageWithFallback
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-5">
              <h3 className="text-gray-900 dark:text-white mb-2 line-clamp-2">
                {article.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {article.description}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <a
                href={article.link}
                className="inline-flex items-center gap-2 text-[#742774] hover:text-[#5c1f5c] transition-colors"
              >
                Read Article
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
