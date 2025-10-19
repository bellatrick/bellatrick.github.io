import { Download } from 'lucide-react';
import jsPDF from "jspdf";
import { Card } from './ui/card';

export function ResumePage() {


const handleDownload = () => {
  try {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Busayo Samuel", 10, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Power Apps Developer | Microsoft Certified Professional", 10, 28);
    doc.text("Dublin, Ireland | Busayosamuel2016@gmail.com", 10, 36);

    doc.setFont("helvetica", "bold");
    doc.text("PROFILE", 10, 50);
    doc.setFont("helvetica", "normal");
    doc.text(
      "Power Apps Developer with 5+ years of experience delivering solutions that improve collaboration and enhance business productivity. Strong background in frontend development, system integration, and extending Microsoft Dynamics 365 with custom plugins and Logic Apps.",
      10,
      58,
      { maxWidth: 180 }
    );

    doc.setFont("helvetica", "bold");
    doc.text("CORE SKILLS", 10, 90);
    doc.setFont("helvetica", "normal");
    doc.text([
      "- Power Platform: Power Apps, Power Automate, Power Virtual Agents, Dataverse, Logic Apps, Plugins, Custom Connectors",
      "- Programming: JavaScript, TypeScript, HTML, CSS, C#, .NET, REST APIs",
      "- Microsoft Ecosystem: Dynamics 365 CE, Microsoft Copilot, SharePoint, Teams Integration, Azure Functions",
      "- Certifications: PL-200 | PL-400 | PL-900 | APL-7002",
      "- Soft Skills: Solution Architecture, Collaboration, Problem Solving, Agile Delivery"
    ], 10, 98, { maxWidth: 180 });

    doc.setFont("helvetica", "bold");
    doc.text("PROFESSIONAL EXPERIENCE", 10, 140);
    doc.setFont("helvetica", "normal");
    doc.text("Regnify Solutions — Software Developer (Oct 2021 – Present)", 10, 148);
    doc.text([
      "- Designed and deployed Power Apps solutions improving efficiency by up to 40%",
      "- Built Logic Apps to automate workflows and reduce manual intervention",
      "- Created plugins to extend Dynamics 365 capabilities",
      "- Acted as technical consultant gathering business requirements",
      "- Mentored junior developers on best practices"
    ], 10, 156, { maxWidth: 180 });

    doc.setFont("helvetica", "bold");
    doc.text("EDUCATION", 10, 196);
    doc.setFont("helvetica", "normal");
    doc.text("University of Ilorin — BSc Plant Biology (Graduated: 2025)", 10, 204);

    doc.setFont("helvetica", "bold");
    doc.text("PROJECT HIGHLIGHTS", 10, 220);
    doc.setFont("helvetica", "normal");
    doc.text([
      "- Built a Hospital Triage Application to streamline patient onboarding",
      "- Designed enterprise pharmaceutical sales rep model-driven app"
    ], 10, 228, { maxWidth: 180 });

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
            <h1 className="text-gray-900 dark:text-white mb-2">Busayo Samuel</h1>
            <h2 className="text-gray-700 dark:text-gray-300 mb-3">
              Power Apps Developer | Microsoft Certified Professional
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Dublin, Ireland | Busayosamuel2016@gmail.com
            </p>
          </div>

          {/* Profile */}
          <div>
            <h3 className="text-gray-900 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
              PROFILE
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Power Apps Developer with 5+ years of experience delivering solutions that improve collaboration and business productivity. Strong background in frontend development, system integration, and extending Microsoft Dynamics 365 with custom plugins and Logic Apps.
            </p>
          </div>

          {/* Core Skills */}
          <div>
            <h3 className="text-gray-900 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
              CORE SKILLS
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Power Apps (Canvas & Model-driven), Power Automate, Power Virtual Agents, Dataverse, Logic Apps, Plugins, Custom Connectors</li>
              <li>• JavaScript, TypeScript, HTML5, CSS3, C#, .NET, REST APIs</li>
              <li>• Dynamics 365 CE, Microsoft Copilot, SharePoint, Teams Integration, Azure Functions</li>
              <li>• Applied Skills Credentials: APL-7002 | Model-driven Apps | Canvas Apps | Microsoft Copilot</li>
              <li>• Certifications: PL-200 | PL-900 | PL-400</li>
              <li>• Soft Skills: Solution Architecture | Cross-functional Collaboration | Problem Solving | Agile Delivery</li>
            </ul>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-gray-900 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
              PROFESSIONAL EXPERIENCE
            </h3>
            <div>
              <h4 className="text-gray-900 dark:text-white">
                Regnify Solutions — Software Developer
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-2">October 2021 – Present</p>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                <li>• Designed, developed, and deployed multiple Power Apps solutions improving efficiency by up to 40%.</li>
                <li>• Built and integrated Logic Apps to automate workflows and reduce manual work.</li>
                <li>• Developed custom plugins extending Dynamics 365 functionality.</li>
                <li>• Served as technical consultant translating business needs into scalable Power Platform solutions.</li>
                <li>• Mentored junior developers on best practices with Microsoft technologies.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-gray-900 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
              EDUCATION
            </h3>
            <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-1">
              <div>
                <h4 className="text-gray-900 dark:text-white">
                  University of Ilorin — B.Sc. Plant Biology
                </h4>
                <p className="text-gray-600 dark:text-gray-400">Graduated 2018</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-gray-900 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
              CERTIFICATIONS & CREDENTIALS
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• PL-200: Microsoft Power Platform Functional Consultant Associate</li>
              <li>• PL-400: Microsoft Power Platform Developer Associate</li>
              <li>• APL-7002: Applied Skills in Microsoft Power Platform</li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-gray-900 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
              PROJECT HIGHLIGHTS
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Built a Hospital Triage App to streamline patient onboarding in a clinic.</li>
              <li>• Designed the architecture for an enterprise pharmaceutical sales rep model-driven app.</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
