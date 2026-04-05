import { useState } from 'react';
import { Filter, ArrowUpDown, Search, ExternalLink, Eye, LayoutGrid, LayoutList, Calendar } from 'lucide-react';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Card } from './ui/card';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
// @ts-ignore: import of media asset without type declaration
import triage from '../assets/triage.mp4';
// @ts-ignore: import of media asset without type declaration
import email_compart from '../assets/email_compart.mp4';
// @ts-ignore: import of media asset without type declaration
import docflow from '../assets/docflow.mp4';
// @ts-ignore: import of media asset without type declaration
import alm from '../assets/ALM github actions for solutions.mp4';
// @ts-ignore: import of media asset without type declaration
import bpf from '../assets/bpf.mp4';
// @ts-ignore: import of media asset without type declaration
import consent_tracker from '../assets/pa_consent_tracker.mp4';
// @ts-ignore: import of media asset without type declaration
import pcf_component from '../assets/pcf_component.mp4';
// @ts-ignore: import of media asset without type declaration
import purchase_order from '../assets/purchase_order_creation.mp4';
// @ts-ignore: import of media asset without type declaration
import role_hierarchy from '../assets/role_hierarchy.mp4';
// @ts-ignore: import of media asset without type declaration
import ribbon from '../assets/ribbon.mp4';
// @ts-ignore: import of media asset without type declaration
import email_notif_inventory from '../assets/email_notif_inventory.mp4';

interface Project {
  id: string;
  name: string;
  description: string;
  date: string;
  platform: string;
  github?: string |undefined;
  videoUrl: string;
}

export function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPlatform, setFilterPlatform] = useState('all');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('table');

  const projects: Project[] = [
    {
      id: '1',
      name: 'Hospital Triage Dashboard',
      description: 'A canvas app for managing patient triage in hospitals',
      date: '2024-12-15',
      platform: 'Canvas Apps',
      videoUrl:triage,
    },
    {
      id: '2',
      name: 'Document Approval with Docusign',
      description: 'A canvas app integrated with Docusign for document approvals',
      date: '2024-11-20',
      platform: 'Canvas Apps',
      videoUrl: docflow,
    },
    {
      id: '3',
      name: 'Document compartments Automation',
      description: 'Automating document compartmentalization using Power Automate',
      date: '2024-10-05',
      platform: 'Power Automate',
      videoUrl: email_compart,
    },
     {
      id: '4',
      name: 'Github ALM for Power Platform',
      description: 'Implementing ALM for Power Platform using Github',
      date: '2024-12-15',
      platform: 'Power Platform Solutions',
      videoUrl:alm,
    },
        {
      id: '5',
      name: 'Business Process Flow',
      description: 'Business Process Flow for managing opportunities creation in a pharmaceutical MDA',
      date: '2024-12-15',
      platform: 'Model Driven Apps',
      videoUrl:bpf,
    },
    {
      id: '6',
      name: 'PCF Component',
      description: 'PCF Component for managing Purchase Orders creation using a drag and drop component as an editable grid',
      date: '2024-12-15',
      platform: 'Model Driven Apps',
      videoUrl:pcf_component,
    },
        {
      id: '7',
      name: 'Inventory Email notification',
      description: 'A power automate flow created to send email notifications when inventory levels are low. The flow is triggered when the inventory level is below a certain threshold and sends an HTML formatted email notification to the inventory manager.',
      date: '2024-12-15',
      platform: 'Power Automate',
      videoUrl:email_notif_inventory,
    },
        {
      id: '8',
      name: 'Microsft forms consent tracker',
      description: 'A power automate flow to track consent from parents in a school environment. Parents can give consent by filling a microsoft form and the consent is tracked in a sharepoint list.',
      date: '2024-12-15',
      platform: 'Power Automate',
      videoUrl:consent_tracker,
    },
        {
      id: '9',
      name: 'Purchase Order Creator',
      description: 'A power automate flow to create purchase orders in a pharmaceutical MDA. It is a scheduled flow that triggers when the inventory levels are low and creates a purchase order to replenish the inventory.',
      date: '2024-12-15',
      platform: 'Power Automate',
      videoUrl:purchase_order,
    },
    {
      id: '10',
      name: 'Role Hierarchy',
      description: 'Demo show cases how role hierarchy works in a multi-BU enterprise for 6 users, 3 BUs and 5 security roles',
      date: '2024-12-15',
      platform: 'Power Platform',
      videoUrl: role_hierarchy,
    },
        {
      id: '11',
      name: 'Ribbon Customization',
      description: 'Showcases using the Ribbon Workbench to customize the ribbon of a model driven app and using Javascript and an instant power automate flow connected to the ribbon to speed up processes in a MDA',
      date: '2024-12-15',
      platform: 'Model Driven Apps',
      videoUrl: ribbon,
    },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlatform = filterPlatform === 'all' || project.platform === filterPlatform;
    return matchesSearch && matchesPlatform;
  });

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-gray-900 dark:text-white mb-2">Projects</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        A collection of apps and solutions built on the Power Platform.
      </p>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-3">
          <Select value={filterPlatform} onValueChange={setFilterPlatform}>
            <SelectTrigger className="flex-1 sm:w-[180px]">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Platforms</SelectItem>
              <SelectItem value="Power Apps">Power Apps</SelectItem>
              <SelectItem value="Azure">Azure</SelectItem>
              <SelectItem value="Power Automate">Power Automate</SelectItem>
              <SelectItem value="Power Automate">Canvas Apps</SelectItem>
              <SelectItem value="Dataverse">Dataverse</SelectItem>
              <SelectItem value="Power BI">Power BI</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="date-desc">
            <SelectTrigger className="flex-1 sm:w-[180px]">
              <ArrowUpDown className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date-desc">Date (Newest)</SelectItem>
              <SelectItem value="date-asc">Date (Oldest)</SelectItem>
              <SelectItem value="name-asc">Name (A-Z)</SelectItem>
              <SelectItem value="name-desc">Name (Z-A)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-3 flex-1">
          <div className="relative flex-1 sm:max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          <ToggleGroup type="single" value={viewMode} onValueChange={(value:string) => value && setViewMode(value as 'table' | 'cards')}>
            <ToggleGroupItem value="table" aria-label="Table view">
              <LayoutList className="w-4 h-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="cards" aria-label="Card view">
              <LayoutGrid className="w-4 h-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* Table View */}
      {viewMode === 'table' && (
        <div className="bg-white dark:bg-[#292827] rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#faf9f8] dark:bg-[#323130] hover:bg-[#faf9f8] dark:hover:bg-[#323130]">
                <TableHead className="text-gray-900 dark:text-white whitespace-nowrap">Name</TableHead>
                <TableHead className="text-gray-900 dark:text-white hidden md:table-cell">Description</TableHead>
                {/* <TableHead className="text-gray-900 dark:text-white whitespace-nowrap">Date</TableHead> */}
                <TableHead className="text-gray-900 dark:text-white whitespace-nowrap">Platform</TableHead>
                {/* <TableHead className="text-gray-900 dark:text-white whitespace-nowrap">GitHub</TableHead> */}
                <TableHead className="text-gray-900 dark:text-white whitespace-nowrap">View</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProjects.map((project, index) => (
                <TableRow
                  key={project.id}
                  className={`
                    ${index % 2 === 0
                      ? 'bg-white dark:bg-[#292827]'
                      : 'bg-[#faf9f8] dark:bg-[#323130]'
                    }
                    hover:bg-[#e7f3ff] dark:hover:bg-[#2d4a5c] transition-colors
                  `}
                >
                  <TableCell className="text-gray-900 dark:text-white whitespace-nowrap">
                    {project.name}
                  </TableCell>
                  <TableCell className="text-gray-700 dark:text-gray-300 hidden md:table-cell max-w-xs truncate">
                    {project.description}
                  </TableCell>
                  {/* <TableCell className="text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    {new Date(project.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </TableCell> */}
                  <TableCell>
                    <span className="px-2 py-1 bg-[#742774] text-white rounded text-xs whitespace-nowrap">
                      {project.platform}
                    </span>
                  </TableCell>
                  {/* <TableCell>
                    {project.github ? (<a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#742774] hover:text-[#5c1f5c] inline-flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>) : ('—')}
                  </TableCell> */}
                  <TableCell>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-[#742774] hover:text-[#5c1f5c] inline-flex items-center gap-1"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {/* Card View */}
      {viewMode === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden bg-white dark:bg-[#292827] hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-gray-900 dark:text-white flex-1">
                    {project.name}
                  </h3>
                  <span className="px-2 py-1 bg-[#742774] text-white rounded text-xs ml-2 shrink-0">
                    {project.platform}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(project.date).toLocaleDateString()}</span>
                </div> */}

                <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#742774] hover:text-[#5c1f5c] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>GitHub</span>
                  </a> */}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-[#742774] hover:text-[#5c1f5c] transition-colors ml-auto"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Demo</span>
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Project Video Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedProject?.name}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
              <video
                src={selectedProject?.videoUrl}
                className="w-full h-full rounded"
                controls
                autoPlay={false}
              />
          </div>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            {selectedProject?.description}
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
