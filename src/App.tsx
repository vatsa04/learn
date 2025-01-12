import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, Code, Briefcase, ExternalLink, Youtube, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Resource {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  link: string;
  gradient: string;
  stats?: string;
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Tech Roadmaps",
    description: "Complete Tech Roadmaps for Developers",
    icon: <Code className="h-6 w-6" />,
    link: "https://roadmap.sh/roadmaps",
    gradient: "from-[#4776E6] to-[#8E54E9]",
    stats: "20+ Roadmaps"
  },
  {
    id: 2,
    title: "CODE Roadmap",
    description: "1st Year Roadmap",
    icon: <Code className="h-6 w-6" />,
    link: "https://roadmap.sh/full-stack",
    gradient: "from-[#00c6ff] to-[#0072ff]",
    stats: "Many Technologies"
  },
  {
    id: 3,
    title: "Resume Template",
    description: "Best Resume Templates",
    icon: <Briefcase className="h-6 w-6" />,
    link: "https://www.overleaf.com/latex/templates/altacv-template/trgqjpwnmtgv",
    gradient: "from-[#f857a6] to-[#ff5858]",
    stats: " "
  },
  
];

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const handleResourceClick = (resource: Resource) => {
    setSelectedResource(resource);
    setIsDialogOpen(true);
  };

  const handleFollowClick = () => {
    window.open('https://instagram.com/saideep.talks', '_blank');
    if (selectedResource?.link) {
      window.open(selectedResource.link, '_blank');
    }
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Resource Hub
          </h1>
          <p className="text-muted-foreground text-lg">
            Curated resources to accelerate your tech journey
                   -by saideep.talks
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Card
              key={resource.id}
              className={cn(
                "group relative overflow-hidden p-6 cursor-pointer transition-all duration-300 hover:scale-105",
                "border border-border/50 hover:border-primary/50",
                "backdrop-blur-sm bg-background/95"
              )}
              onClick={() => handleResourceClick(resource)}
            >
              <div className={cn(
                "absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity",
                `bg-gradient-to-br ${resource.gradient}`
              )} />
              <div className="relative">
                <div className="flex justify-between items-start mb-4">
                  <div className={cn(
                    "p-2 rounded-lg",
                    `bg-gradient-to-br ${resource.gradient}`
                  )}>
                    {resource.icon}
                  </div>
                  {resource.stats && (
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-background/10 backdrop-blur-sm">
                      {resource.stats}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-muted-foreground text-sm">{resource.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <footer className="mt-16 text-center">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Connect with Saideep Reddy</h3>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => window.open('https://instagram.com/saideep.talks', '_blank')}>
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => window.open('https://www.youtube.com/@SaideepReddy07', '_blank')}>
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => window.open('https://www.linkedin.com/in/saideep-reddy7/', '_blank')}>
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <blockquote className="max-w-2xl mx-auto text-muted-foreground italic">
            Hey there! 👋 I'm passionate about helping developers grow in their careers. These carefully curated resources have helped me and many others succeed in tech. Follow me on Instagram for daily tips, tricks, and insights about software development and career growth. Let's learn and grow together! 🚀.
            <footer className="text-sm mt-2 font-medium">- Saideep.talks</footer>
          </blockquote>
        </footer>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Follow to Access</DialogTitle>
            <DialogDescription>
              To access this resource, please follow saideep.talks on Instagram for more valuable content.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4 py-4">
            <Instagram className="h-12 w-12 text-pink-500" />
            <Button
              onClick={handleFollowClick}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              Follow @saideep.talks
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
