import React from 'react';
import {
  Cloud,
  Building2,
  Plane,
  Map,
  BedDouble,
  Briefcase,
  Eye,
  Network,
  BarChart3,
  ShieldCheck,
  CalendarCheck,
  Sparkles,
  Boxes,
  GitCommitHorizontal,
  BrainCircuit,
  TrendingUp,
  Utensils,
  Globe,
  Users,
  Cpu,
  Wallet,
  Plug,
  Headphones,
  Layers,
} from 'lucide-react';

interface IconRendererProps {
  name: string;
  className?: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({
  name,
  className = 'w-6 h-6',
}) => {
  switch (name) {
    case 'Cloud':
      return <Cloud className={className} />;
    case 'Building2':
      return <Building2 className={className} />;
    case 'Plane':
      return <Plane className={className} />;
    case 'Map':
      return <Map className={className} />;
    case 'BedDouble':
      return <BedDouble className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Eye':
      return <Eye className={className} />;
    case 'Network':
      return <Network className={className} />;
    case 'BarChart3':
      return <BarChart3 className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'CalendarCheck':
      return <CalendarCheck className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Boxes':
      return <Boxes className={className} />;
    case 'GitCommitHorizontal':
      return <GitCommitHorizontal className={className} />;
    case 'BrainCircuit':
      return <BrainCircuit className={className} />;
    case 'TrendingUp':
      return <TrendingUp className={className} />;
    case 'Utensils':
      return <Utensils className={className} />;
    case 'Globe':
      return <Globe className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Wallet':
      return <Wallet className={className} />;
    case 'Plug':
      return <Plug className={className} />;
    case 'Headphones':
      return <Headphones className={className} />;
    default:
      return <Layers className={className} />;
  }
};
