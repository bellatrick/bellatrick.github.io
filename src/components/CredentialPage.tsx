import { useState } from 'react';
import { ExternalLink, Eye, LayoutGrid, LayoutList, Award } from 'lucide-react';
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
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Credential {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  imageUrl: string;
  category: string;
}

export function CredentialsPage() {
  const [selectedCredential, setSelectedCredential] = useState<Credential | null>(null);
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('cards');

  const credentials: Credential[] = [
    {
      id: '1',
      name: 'Microsoft Applied Skills: Create agents in Microsoft Copilot Studio',
      issuer: 'Microsoft',
      date: '2025-09',
      credentialUrl: 'https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Flearn.microsoft.com%2Fapi%2Fcredentials%2Fshare%2Fen-gb%2FBusayoSamuel-7256%2FD811C565158E8A88%3FsharingId%3D3B7071B304AF5E60&urlhash=LFA_&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BMNC0mf2DRAGuQLrBgpbCmg%3D%3D',
      imageUrl: 'https://images.unsplash.com/photo-1613825787302-22acac0de2fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGNyZWRlbnRpYWwlMjBiYWRnZXxlbnwxfHx8fDE3NjA4OTQ0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Copilot Agents',
    },
    {
      id: '2',
      name: 'Microsoft Applied Skills: Create and manage model-driven apps with Power Apps and Dataverse',
      issuer: 'Microsoft',
      date: '2025-09',
      credentialUrl: 'https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Flearn.microsoft.com%2Fapi%2Fcredentials%2Fshare%2Fen-gb%2FBusayoSamuel-7256%2FD811C565158E8A88%3FsharingId%3D3B7071B304AF5E60&urlhash=LFA_&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BMNC0mf2DRAGuQLrBgpbCmg%3D%3D',
      imageUrl: 'https://images.unsplash.com/photo-1613825787302-22acac0de2fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGNyZWRlbnRpYWwlMjBiYWRnZXxlbnwxfHx8fDE3NjA4OTQ0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Dataverse',
    },
    {
      id: '3',
      name: 'Microsoft Applied Skills: Create and manage automated processes by using Power Automate',
      issuer: 'Microsoft',
      date: '2025-08',
      credentialUrl: 'https://www.linkedin.com/redir/redirect/?url=https%3A%2F%2Flearn.microsoft.com%2Fapi%2Fcredentials%2Fshare%2Fen-gb%2FBusayoSamuel-9633%2F6D4B986EAF07771%3FsharingId%3D68EAD34912F71127&urlhash=v2Ju&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BMNC0mf2DRAGuQLrBgpbCmg%3D%3D',
      imageUrl: 'https://images.unsplash.com/photo-1613825787302-22acac0de2fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGNyZWRlbnRpYWwlMjBiYWRnZXxlbnwxfHx8fDE3NjA4OTQ0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Power Automate',
    },

  ];

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-gray-900 dark:text-white mb-2">Credentials</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Professional certifications and credentials in Power Platform and Microsoft technologies.
      </p>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
        <ToggleGroup type="single" value={viewMode} onValueChange={(value: string) => value && setViewMode(value as 'table' | 'cards')}>
          <ToggleGroupItem value="table" aria-label="Table view">
            <LayoutList className="w-4 h-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="cards" aria-label="Card view">
            <LayoutGrid className="w-4 h-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* Table View */}
      {viewMode === 'table' && (
        <div className="bg-white dark:bg-[#292827] rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#faf9f8] dark:bg-[#323130] hover:bg-[#faf9f8] dark:hover:bg-[#323130]">
                <TableHead className="text-gray-900 dark:text-white whitespace-nowrap">Name</TableHead>
                <TableHead className="text-gray-900 dark:text-white whitespace-nowrap hidden md:table-cell">Issuer</TableHead>
                <TableHead className="text-gray-900 dark:text-white whitespace-nowrap">Date</TableHead>
                <TableHead className="text-gray-900 dark:text-white whitespace-nowrap">Category</TableHead>
                <TableHead className="text-gray-900 dark:text-white whitespace-nowrap">View</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {credentials.map((credential, index) => (
                <TableRow
                  key={credential.id}
                  className={`
                    ${index % 2 === 0
                      ? 'bg-white dark:bg-[#292827]'
                      : 'bg-[#faf9f8] dark:bg-[#323130]'
                    }
                    hover:bg-[#e7f3ff] dark:hover:bg-[#2d4a5c] transition-colors
                  `}
                >
                  <TableCell className="text-gray-900 dark:text-white">
                    <div className="max-w-xs truncate">
                      {credential.name}
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-700 dark:text-gray-300 whitespace-nowrap hidden md:table-cell">
                    {credential.issuer}
                  </TableCell>
                  <TableCell className="text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    {new Date(credential.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-[#742774] text-white rounded text-xs whitespace-nowrap">
                      {credential.category}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedCredential(credential)}
                        className="text-[#742774] hover:text-[#5c1f5c] inline-flex items-center gap-1"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <a
                        href={credential.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#742774] hover:text-[#5c1f5c] inline-flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
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
          {credentials.map((credential) => (
            <Card
              key={credential.id}
              className="overflow-hidden bg-white dark:bg-[#292827] hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 cursor-pointer"
              onClick={() => setSelectedCredential(credential)}
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-[#742774] to-[#5c1f5c] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="w-24 h-24 text-white/20" />
                </div>
                <ImageWithFallback
                  src={credential.imageUrl}
                  alt={credential.name}
                  className="w-full h-full object-cover mix-blend-overlay opacity-30"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#742774] rounded text-xs">
                    {credential.category}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {credential.name}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Issued by {credential.issuer}
                  </p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span>{new Date(credential.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                  <a
                    href={credential.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-[#742774] hover:text-[#5c1f5c] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Verify</span>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Credential Image Modal */}
      <Dialog open={!!selectedCredential} onOpenChange={() => setSelectedCredential(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedCredential?.name}</DialogTitle>
          </DialogHeader>
          <div className="aspect-[16/10] w-full bg-gradient-to-br from-[#742774] to-[#5c1f5c] relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Award className="w-48 h-48 text-white/20" />
            </div>
            <ImageWithFallback
              src={selectedCredential?.imageUrl || ''}
              alt={selectedCredential?.name || ''}
              className="w-full h-full object-cover mix-blend-overlay opacity-30"
            />
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Issued by</p>
                <p className="text-gray-900 dark:text-white">{selectedCredential?.issuer}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Date Issued</p>
                <p className="text-gray-900 dark:text-white">
                  {selectedCredential && new Date(selectedCredential.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
              <a
                href={selectedCredential?.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#742774] hover:text-[#5c1f5c] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Credential Details</span>
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
