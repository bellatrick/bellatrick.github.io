import { Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
// @ts-ignore: PNG module type missing
import myImage from '../assets/me.png';


export function ProfilePage() {

  const radarData = [
    { skill: 'Dataverse', level: 95 },
    { skill: 'Plugins', level: 90 },
    { skill: 'Azure Bus', level: 85 },
    { skill: 'Logic Apps', level: 88 },
    { skill: 'Automate', level: 92 },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-gray-900 dark:text-white mb-2">Profile</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Power Platform Developer & Solution Architect
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-6">
        {/* Profile Card */}
        <Card className="p-4 sm:p-6 bg-white dark:bg-[#292827]">
          <div className="flex flex-col items-center text-center">
            <ImageWithFallback
              src={myImage}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h2 className="text-gray-900 dark:text-white mb-1">Busayo Samuel</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Senior Power Platform Developer
            </p>
            <div className="w-full space-y-2">
            </div>
          </div>
        </Card>

          {/* About Section */}
        <Card className="p-4 sm:p-6 bg-white dark:bg-[#292827] ">
          <h3 className="text-gray-900 dark:text-white mb-4">About</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Experienced Power Platform Developer with 5+ years of expertise in building enterprise solutions
            using Dataverse, custom plugins, Azure integrations, and Power Automate flows.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Specialized in designing scalable solutions that integrate with Azure Service Bus, Logic Apps,
            and custom APIs to deliver robust business automation.
          </p>
        </Card>

        {/* Skills Radar Chart */}
        <Card className="p-4 md:col-span-2 col-span-1  sm:p-6 bg-white dark:bg-[#292827]">
          <h3 className="text-gray-900 dark:text-white mb-4">Skills Overview</h3>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#e0e0e0" />
              <PolarAngleAxis
                dataKey="skill"
                tick={{ fill: 'currentColor' }}
                className="text-gray-700 dark:text-gray-300"
              />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar
                name="Skill Level"
                dataKey="level"
                stroke="#742774"
                fill="#742774"
                fillOpacity={0.6}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </Card>


      </div>

      {/* Contact Section */}
      <Card className="p-4 sm:p-6  bg-white dark:bg-[#292827] mt-4 md:mt-6">
        <h3 className="text-gray-900 dark:text-white mb-4">Contact Me</h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#742774]" />
            <a aria-label="Send email" href='mailto:Busayosamuel2016@gmail.com' className="text-gray-700 dark:text-gray-300">Busayosamuel2016@gmail.com</a>
          </div>
          <a
            href="mailto:Busayosamuel2016@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#742774] text-white rounded hover:bg-[#5c1f5c] transition-colors w-fit"
          >
            <Mail className="w-4 h-4" />
            Send Message
          </a>
        </div>
      </Card>
    </div>
  );
}
