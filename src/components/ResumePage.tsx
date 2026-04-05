import { Download } from 'lucide-react';
import jsPDF from "jspdf";
import { Card } from './ui/card';

export function ResumePage() {


  const handleDownload = () => {
    try {
      const doc = new jsPDF();
      let y = 20;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.text("BUSAYO SAMUEL", 10, y);
      y += 8;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      doc.text("Power Platform Developer", 10, y);
      y += 8;
      doc.text("Busayosamuel2016@gmail.com", 10, y);
      y += 14;

      doc.setFont("helvetica", "bold");
      doc.text("PROFESSIONAL SUMMARY", 10, y);
      y += 8;
      doc.setFont("helvetica", "normal");
      const summaryText = doc.splitTextToSize("Software Developer with 5+ years of commercial experience delivering robust automation solutions across enterprise environments. Adept at delivering end-to-end solutions within the Microsoft ecosystem and beyond.", 180);
      doc.text(summaryText, 10, y);
      y += (summaryText.length * 6) + 6;

      doc.setFont("helvetica", "bold");
      doc.text("CORE COMPETENCIES", 10, y);
      y += 8;
      doc.setFont("helvetica", "normal");
      
      const competenciesText = [
        "• Power Automate: Automated workflows, multi-step cloud flows, scheduled flows, API connections via Swagger, email automation & analysis, approval workflows",
        "• Power Platform: Power Apps (Canvas & Model-driven), Power Virtual Agents, Dataverse, Custom Connectors, Logic Apps, Plugins",
        "• AI & LLM Integration: OpenAI / Gemini integration with email systems, AI-powered agents for business process automation, Microsoft Copilot",
        "• Database & Integration: SharePoint, Excel, REST APIs, Dataverse, Azure Functions, Teams Integration",
        "• API Development: Reading Swagger documentation, building custom API connectors, REST API integrations",
        "• Programming: JavaScript, TypeScript, HTML5, CSS3, C#, .NET",
        "• Soft Skills: Solution Architecture | Cross-functional Collaboration | Agile Delivery | Remote Team Collaboration"
      ];

      competenciesText.forEach(comp => {
        const lines = doc.splitTextToSize(comp, 180);
        if (y + (lines.length * 6) > 280) {
            doc.addPage();
            y = 20;
        }
        doc.text(lines, 10, y);
        y += (lines.length * 6) + 2;
      });
      y += 6;

      if (y > 270) { doc.addPage(); y = 20; }
      
      doc.setFont("helvetica", "bold");
      doc.text("PROFESSIONAL EXPERIENCE", 10, y);
      y += 8;
      doc.setFont("helvetica", "normal");
      doc.text("Software Developer and Automation Specialist | Regnify Solutions (Oct 2021 – Present)", 10, y);
      y += 8;
      
      const expIntro = doc.splitTextToSize("Agency environment with multi-project exposure across industries including education, HR, and enterprise operations.", 180);
      doc.text(expIntro, 10, y);
      y += (expIntro.length * 6) + 4;

      const expPoints = [
        "• Integrated SharePoint and Excel into automated business flows, enabling real-time data sync and eliminating manual reporting processes.",
        "• Built custom connectors within Power Automate by reading and interpreting Swagger documentation, enabling seamless third-party integrations.",
        "• Developed AI-powered automation agents using Microsoft Copilot Studio and integrated OpenAI/Gemini LLMs with email systems for intelligent email analysis and automated follow-up triggering.",
        "• Implemented automated email analysis pipelines for franchise-style request management, logging email threads, tracking statuses, and auto-triggering follow-up actions.",
        "• Designed, developed, and deployed Power Apps solutions (model-driven and canvas) tailored to client requirements, improving process efficiency by up to 40%.",
        "• Created custom plugins to extend Dynamics 365 capabilities, including business rules and automated data validation.",
        "• Acted as technical consultant, translating business needs into scalable Power Platform solutions; mentored junior developers on best practices."
      ];

      expPoints.forEach(pt => {
        const lines = doc.splitTextToSize(pt, 180);
        if (y + (lines.length * 6) > 280) {
            doc.addPage();
            y = 20;
        }
        doc.text(lines, 12, y);
        y += (lines.length * 6) + 2;
      });
      y += 6;

      if (y > 260) { doc.addPage(); y = 20; }

      doc.setFont("helvetica", "bold");
      doc.text("CERTIFICATIONS & CREDENTIALS", 10, y);
      y += 8;
      doc.setFont("helvetica", "normal");
      const certPoints = [
        "• PL-400: Microsoft Power Platform Developer Associate",
        "• PL-200: Microsoft Power Platform Functional Consultant Associate",
        "• APL-7002: Create and Manage Automated Processes by Power Automate",
        "• APL-7003: Create and Manage Model-driven Apps with Power Apps and Dataverse",
        "• APL-7008: Create Agents in Microsoft Copilot Studio"
      ];
      certPoints.forEach(pt => {
        if (y > 280) { doc.addPage(); y = 20; }
        doc.text(pt, 10, y);
        y += 6;
      });
      y += 6;

      if (y > 260) { doc.addPage(); y = 20; }

      doc.setFont("helvetica", "bold");
      doc.text("EDUCATION", 10, y);
      y += 8;
      doc.setFont("helvetica", "normal");
      doc.text("BSc, Plant Biology | University of Ilorin | Graduated: 2018", 10, y);
      y += 12;

      if (y > 270) { doc.addPage(); y = 20; }

      doc.setFont("helvetica", "bold");
      doc.text("LANGUAGES", 10, y);
      y += 8;
      doc.setFont("helvetica", "normal");
      doc.text("• English – Advanced (written and spoken)", 10, y);

      doc.save("Busayo_Samuel_Resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-gray-900 dark:text-white mb-2">Resume</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Download or view my professional resume
          </p>
        </div>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-[#742774] text-white rounded hover:bg-[#5c1f5c] transition-colors whitespace-nowrap"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Download Resume</span>
          <span className="sm:hidden">Download</span>
        </button>
      </div>

      <Card className="p-6 sm:p-8 md:p-12 bg-white dark:bg-[#292827] shadow-lg">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center border-b pb-6 border-gray-200 dark:border-gray-700">
            <h1 className="text-gray-900 dark:text-white mb-2">BUSAYO SAMUEL</h1>
            <h2 className="text-gray-700 dark:text-gray-300 mb-3">
              Power Platform Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Busayosamuel2016@gmail.com
            </p>
          </div>

          {/* Profile */}
          <div>
            <h3 className="text-gray-900 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
              PROFESSIONAL SUMMARY
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Software Developer with 5+ years of commercial experience delivering robust automation solutions across enterprise environments. Adept at delivering end-to-end solutions within the Microsoft ecosystem and beyond.
            </p>
          </div>

          {/* Core Skills */}
          <div>
            <h3 className="text-gray-900 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
              CORE COMPETENCIES
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• <span className="font-semibold">Power Automate:</span> Automated workflows, multi-step cloud flows, scheduled flows, API connections via Swagger, email automation & analysis, approval workflows</li>
              <li>• <span className="font-semibold">Power Platform:</span> Power Apps (Canvas & Model-driven), Power Virtual Agents, Dataverse, Custom Connectors, Logic Apps, Plugins</li>
              <li>• <span className="font-semibold">AI & LLM Integration:</span> OpenAI / Gemini integration with email systems, AI-powered agents for business process automation, Microsoft Copilot</li>
              <li>• <span className="font-semibold">Database & Integration:</span> SharePoint, Excel, REST APIs, Dataverse, Azure Functions, Teams Integration</li>
              <li>• <span className="font-semibold">API Development:</span> Reading Swagger documentation, building custom API connectors, REST API integrations</li>
              <li>• <span className="font-semibold">Programming:</span> JavaScript, TypeScript, HTML5, CSS3, C#, .NET</li>
              <li>• <span className="font-semibold">Soft Skills:</span> Solution Architecture | Cross-functional Collaboration | Agile Delivery | Remote Team Collaboration</li>
            </ul>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-gray-900 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
              PROFESSIONAL EXPERIENCE
            </h3>
            <div>
              <h4 className="text-gray-900 dark:text-white font-medium">
                Software Developer and Automation Specialist | Regnify Solutions
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-2">October 2021 – Present</p>
              <p className="text-gray-700 dark:text-gray-300 mb-3 italic">
                Agency environment with multi-project exposure across industries including education, HR, and enterprise operations.
              </p>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>• Integrated SharePoint and Excel into automated business flows, enabling real-time data sync and eliminating manual reporting processes.</li>
                <li>• Built custom connectors within Power Automate by reading and interpreting Swagger documentation, enabling seamless third-party integrations.</li>
                <li>• Developed AI-powered automation agents using Microsoft Copilot Studio and integrated OpenAI/Gemini LLMs with email systems for intelligent email analysis and automated follow-up triggering.</li>
                <li>• Implemented automated email analysis pipelines for franchise-style request management, logging email threads, tracking statuses, and auto-triggering follow-up actions.</li>
                <li>• Designed, developed, and deployed Power Apps solutions (model-driven and canvas) tailored to client requirements, improving process efficiency by up to 40%.</li>
                <li>• Created custom plugins to extend Dynamics 365 capabilities, including business rules and automated data validation.</li>
                <li>• Acted as technical consultant, translating business needs into scalable Power Platform solutions; mentored junior developers on best practices.</li>
              </ul>
            </div>
          </div>

          {/* Certifications & Credentials */}
          <div>
            <h3 className="text-gray-900 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
              CERTIFICATIONS & CREDENTIALS
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• PL-400: Microsoft Power Platform Developer Associate</li>
              <li>• PL-200: Microsoft Power Platform Functional Consultant Associate</li>
              <li>• APL-7002: Create and Manage Automated Processes by Power Automate</li>
              <li>• APL-7003: Create and Manage Model-driven Apps with Power Apps and Dataverse</li>
              <li>• APL-7008: Create Agents in Microsoft Copilot Studio</li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-gray-900 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
              EDUCATION
            </h3>
            <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-1">
              <div>
                <h4 className="text-gray-900 dark:text-white">
                  BSc, Plant Biology | University of Ilorin
                </h4>
                <p className="text-gray-600 dark:text-gray-400">Graduated: 2018</p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-gray-900 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
              LANGUAGES
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• English – Advanced (written and spoken)</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
