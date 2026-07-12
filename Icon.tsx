import React from 'react';
import * as Lucide from 'lucide-react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
  className?: string;
}

export default function Icon({ name, size = 24, className = '', ...props }: IconProps) {
  // Map material or descriptive names to Lucide icons
  const map: Record<string, keyof typeof Lucide> = {
    // Nav & General
    menu: 'Menu',
    account_balance: 'Landmark',
    school: 'GraduationCap',
    verified_user: 'ShieldCheck',
    verified: 'Award',
    gavel: 'Scale',
    insights: 'TrendingUp',
    gavel_custom: 'Gavel',
    fact_check: 'ClipboardCheck',
    payments: 'Wallet',
    security: 'Shield',
    query_stats: 'BarChart3',
    forum: 'MessageSquare',
    groups: 'Users',
    lightbulb: 'Lightbulb',
    distance: 'MapPin',
    link: 'Link',
    download: 'Download',
    calendar_today: 'Calendar',
    mail: 'Mail',
    phone: 'Phone',
    location_on: 'MapPin',
    arrow_forward: 'ArrowRight',
    picture_as_pdf: 'FileText',
    history_edu: 'BookOpen',
    calculate: 'Calculator',
    star: 'Star',
    
    // Direct matches
    AccountBalanceWallet: 'Wallet',
    FactCheck: 'ClipboardCheck',
    Payments: 'Coins',
    ShieldCheck: 'ShieldCheck',
    TrendingUp: 'TrendingUp',
    Table: 'Table',
    Database: 'Database',
    BarChart: 'BarChart3',
    MessageSquare: 'MessageSquare',
    Users: 'Users',
    Lightbulb: 'Lightbulb',
    GraduationCap: 'GraduationCap',
    BookOpen: 'BookOpen',
    School: 'GraduationCap',
    CheckCircle: 'CheckCircle2',
    FileText: 'FileText',
    BarChart3: 'BarChart3',
    Star_Icon: 'Star',
    Trophy: 'Trophy',
    Shield: 'Shield',
    Search: 'Search',
    Brain: 'Brain'
  };

  const resolvedName = map[name] || (name as keyof typeof Lucide);
  const LucideIcon = (Lucide[resolvedName] || Lucide.HelpCircle) as React.ComponentType<{
    size?: number | string;
    className?: string;
  }>;

  return <LucideIcon size={size} className={className} {...props} />;
}
