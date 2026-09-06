import type { LucideIcon } from 'lucide-react';
import {
  Cpu, Zap, Database, Shield, Network, Cloud, LineChart, Settings,
  Building2, Leaf, Factory, Users, Globe, Lightbulb, Target, Heart,
  Award, TrendingUp, Wrench, BarChart3, Layers, Lock, Activity,
  Server, Workflow, Boxes, Gauge, Plug, Radio, HardHat, Scan,
  ArrowRight, MapPin, Phone, Mail, Clock, Linkedin, Twitter,
} from 'lucide-react';

export type PageId = 'home' | 'about' | 'expertise' | 'services' | 'projects' | 'news' | 'contact';

export const navLinks: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'expertise', label: 'Expertises' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projets' },
  { id: 'news', label: 'Actualités' },
  { id: 'contact', label: 'Contact' },
];

export type Expertise = {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  image: string;
  points: string[];
};

export const expertises: Expertise[] = [
  {
    id: 'automation',
    title: 'Automation Industrielle',
    short: 'Systèmes de contrôle-commande et automatisation de processus',
    description: "Conception et intégration de systèmes d'automatisation complets pour optimiser la productivité, la sécurité et la fiabilité de vos installations industrielles.",
    icon: Cpu,
    image: 'https://images.pexels.com/photos/34207359/pexels-photo-34207359.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    points: ['Automate programmable (PLC)', 'SCADA & IHM', 'Contrôle moteur', 'Sécurité machine'],
  },
  {
    id: 'energy',
    title: 'Gestion de l\'Énergie',
    short: 'Optimisation énergétique et transition vers les énergies vertes',
    description: "Solutions intelligentes pour mesurer, contrôler et optimiser votre consommation énergétique tout en accélérant votre transition vers les énergies renouvelables.",
    icon: Zap,
    image: 'https://images.pexels.com/photos/7763083/pexels-photo-7763083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    points: ['Audit énergétique', 'Smart Grid', 'Énergies renouvelables', 'Stockage d\'énergie'],
  },
  {
    id: 'datacenter',
    title: 'Infrastructure Data Center',
    short: 'Conception et exploitation de centres de données',
    description: "Architectures haute disponibilité pour vos data centers : refroidissement, alimentation, sécurité physique et supervision 24/7.",
    icon: Server,
    image: 'https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    points: ['Architecture haute disponibilité', 'Refroidissement intelligent', 'Supervision DCIM', 'Continuité de service'],
  },
  {
    id: 'digital',
    title: 'Transformation Digitale',
    short: "IoT, IA et solutions cloud pour l'industrie 4.0",
    description: "Accompagnement de bout en bout dans votre transformation digitale : capteurs IoT, plateformes cloud, jumeaux numériques et intelligence artificielle.",
    icon: Network,
    image: 'https://images.pexels.com/photos/2588756/pexels-photo-2588756.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    points: ['IoT industriel', 'Jumeau numérique', 'IA & Machine Learning', 'Cloud hybride'],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersécurité OT',
    short: 'Protection des systèmes industriels contre les cybermenaces',
    description: "Sécurisation de vos environnements opérationnels (OT) avec une approche de défense en profondeur adaptée aux contraintes industrielles.",
    icon: Shield,
    image: 'https://images.pexels.com/photos/163125/board-printed-circuit-board-computer-electronics-163125.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    points: ['Audit & conformité', 'Segmentation réseau', "Détection d'intrusion", 'Réponse aux incidents'],
  },
  {
    id: 'smartcity',
    title: 'Villes Intelligentes',
    short: 'Solutions pour territoires et infrastructures urbaines',
    description: "Plateformes intégrées pour la gestion intelligente des infrastructures urbaines : éclairage, mobilité, environnement et services publics.",
    icon: Building2,
    image: 'https://images.pexels.com/photos/33803478/pexels-photo-33803478.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    points: ['Éclairage intelligent', 'Mobilité durable', 'Capteurs environnementaux', 'Plateforme city data'],
  },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
};

export const services: Service[] = [
  {
    id: 'consulting',
    title: 'Conseil & Ingénierie',
    description: "Audit, étude de faisabilité et conception de solutions techniques sur mesure, de l'idée au déploiement.",
    icon: Lightbulb,
    features: ['Analyse des besoins', 'Architecture technique', 'Étude ROI', 'Plan de déploiement'],
  },
  {
    id: 'integration',
    title: 'Intégration Systèmes',
    description: "Intégration de solutions complexes multi-fournisseurs avec garantie d'interopérabilité et de performance.",
    icon: Workflow,
    features: ['Intégration multi-systèmes', 'Migration de données', 'Tests & validation', 'Mise en service'],
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: "Contrats de maintenance préventive et corrective avec support technique 24/7 et SLA garantis.",
    icon: Wrench,
    features: ['Maintenance préventive', 'Support 24/7', 'Télémaintenance', 'SLA garantis'],
  },
  {
    id: 'training',
    title: 'Formation & Accompagnement',
    description: "Programmes de formation certifiants pour vos équipes techniques et opérationnelles sur les technologies déployées.",
    icon: Users,
    features: ['Formations certifiantes', 'E-learning', 'Ateliers pratiques', 'Support documentaire'],
  },
  {
    id: 'monitoring',
    title: 'Supervision & Monitoring',
    description: "Centres de supervision NOC/SOC pour surveiller en temps réel vos infrastructures critiques et anticiper les incidents.",
    icon: Activity,
    features: ['NOC 24/7', 'SOC cyber', 'Tableaux de bord', 'Alerting intelligent'],
  },
  {
    id: 'managed',
    title: 'Services Managés',
    description: "Externalisez l'exploitation de vos infrastructures avec un engagement de résultat et une facturation à l'usage.",
    icon: BarChart3,
    features: ['Exploitation déléguée', "Facturation à l'usage", 'Optimisation continue', 'Reporting mensuel'],
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
  year: string;
  tags: string[];
};

export const projectCategories = ['Tous', 'Énergie', 'Industrie', 'Data Center', 'Smart City', 'Cybersécurité'];

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Parc Solaire Intelligent — 50 MW',
    category: 'Énergie',
    description: "Conception et déploiement d'un parc solaire de 50 MW avec supervision digitale et stockage d'énergie.",
    image: 'https://images.pexels.com/photos/4320449/pexels-photo-4320449.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Bordeaux, France',
    year: '2025',
    tags: ['Solaire', 'Stockage', 'SCADA'],
  },
  {
    id: 'p2',
    title: 'Usine 4.0 — Ligne Automatisée',
    category: 'Industrie',
    description: "Modernisation complète d'une ligne de production avec automatisation robotisée et jumeau numérique.",
    image: 'https://images.pexels.com/photos/19233057/pexels-photo-19233057.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Lyon, France',
    year: '2024',
    tags: ['Robotique', 'IoT', 'Jumeau numérique'],
  },
  {
    id: 'p3',
    title: 'Data Center Tier IV — 10 MW',
    category: 'Data Center',
    description: "Architecture et construction d'un data center haute disponibilité avec refroidissement liquide et DCIM.",
    image: 'https://images.pexels.com/photos/37730211/pexels-photo-37730211.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Paris, France',
    year: '2025',
    tags: ['Tier IV', 'DCIM', 'Refroidissement'],
  },
  {
    id: 'p4',
    title: 'Éclairage Public Connecté',
    category: 'Smart City',
    description: "Déploiement de 12 000 points lumineux connectés avec gestion centralisée et capteurs environnementaux.",
    image: 'https://images.pexels.com/photos/14840760/pexels-photo-14840760.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Nantes, France',
    year: '2024',
    tags: ['IoT', 'Éclairage', 'Smart City'],
  },
  {
    id: 'p5',
    title: 'Fortification OT — Sous-station',
    category: 'Cybersécurité',
    description: "Audit et sécurisation d'un parc de 40 sous-stations électriques contre les cybermenaces OT.",
    image: 'https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Toulouse, France',
    year: '2025',
    tags: ['OT Security', 'Segmentation', 'IDS'],
  },
  {
    id: 'p6',
    title: 'Ferme Éolienne — Supervision',
    category: 'Énergie',
    description: "Système de supervision prédictive pour 30 éoliennes avec maintenance basée sur l'IA.",
    image: 'https://images.pexels.com/photos/744347/pexels-photo-744347.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Bretagne, France',
    year: '2024',
    tags: ['Éolien', 'IA', 'Maintenance prédictive'],
  },
  {
    id: 'p7',
    title: 'Plateforme City Data',
    category: 'Smart City',
    description: "Plateforme d'intégration des données urbaines pour une métropole de 500 000 habitants.",
    image: 'https://images.pexels.com/photos/18834566/pexels-photo-18834566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Lille, France',
    year: '2025',
    tags: ['Data Platform', 'Mobilité', 'Environnement'],
  },
  {
    id: 'p8',
    title: 'Automatisation Logistique',
    category: 'Industrie',
    description: "Automatisation d'un centre de distribution avec convoyeurs intelligents et WMS intégré.",
    image: 'https://images.pexels.com/photos/5506020/pexels-photo-5506020.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Marseille, France',
    year: '2024',
    tags: ['Logistique', 'WMS', 'Automatisation'],
  },
  {
    id: 'p9',
    title: 'SOC Industriel 24/7',
    category: 'Cybersécurité',
    description: "Mise en place d'un Security Operations Center dédié aux infrastructures industrielles.",
    image: 'https://images.pexels.com/photos/3520692/pexels-photo-3520692.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    location: 'Strasbourg, France',
    year: '2025',
    tags: ['SOC', 'OT', 'Détection'],
  },
];

export type NewsArticle = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
};

export const newsArticles: NewsArticle[] = [
  {
    id: 'n1',
    title: 'AREX déploie le plus grand parc solaire intelligent de la région',
    excerpt: "Un projet de 50 MW combinant stockage d'énergie et supervision digitale, livré en avance sur le planning.",
    date: '15 août 2025',
    category: 'Énergie',
    readTime: '4 min',
    image: 'https://images.pexels.com/photos/4320449/pexels-photo-4320449.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'n2',
    title: 'Lancement de notre nouveau SOC industriel à Strasbourg',
    excerpt: "Un centre de cybersécurité dédié aux infrastructures OT, opérationnel 24/7 avec une équipe de 30 experts.",
    date: '8 août 2025',
    category: 'Cybersécurité',
    readTime: '3 min',
    image: 'https://images.pexels.com/photos/3520692/pexels-photo-3520692.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'n3',
    title: 'AREX partenaire officiel de la Smart City Expo 2025',
    excerpt: "Nous présenterons notre plateforme City Data et nos solutions de mobilité durable au salon de Barcelone.",
    date: '22 juillet 2025',
    category: 'Événement',
    readTime: '2 min',
    image: 'https://images.pexels.com/photos/33803478/pexels-photo-33803478.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'n4',
    title: "Comment l'IA transforme la maintenance industrielle",
    excerpt: "Notre retour d'expérience sur 18 mois de maintenance prédictive dans les éoliennes et data centers.",
    date: '10 juillet 2025',
    category: 'Innovation',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/34222005/pexels-photo-34222005.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'n5',
    title: 'Nouveau contrat-cadre avec une grande métropole française',
    excerpt: "AREX confié du déploiement de l'éclairage connecté et de la plateforme de données urbaines.",
    date: '28 juin 2025',
    category: 'Smart City',
    readTime: '3 min',
    image: 'https://images.pexels.com/photos/14840760/pexels-photo-14840760.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'n6',
    title: 'Certification ISO 27001 : AREX renforce sa posture de sécurité',
    excerpt: "Toutes nos activités d'intégration et de services managés sont désormais certifiées ISO 27001.",
    date: '15 juin 2025',
    category: 'Entreprise',
    readTime: '2 min',
    image: 'https://images.pexels.com/photos/163125/board-printed-circuit-board-computer-electronics-163125.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export type Value = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const values: Value[] = [
  {
    title: 'Innovation',
    description: "Nous repoussons les frontières technologiques pour offrir des solutions toujours plus intelligentes et performantes.",
    icon: Lightbulb,
  },
  {
    title: 'Excellence',
    description: "L'exigence et la rigueur guident chacun de nos projets, de la conception à la mise en service.",
    icon: Award,
  },
  {
    title: 'Engagement',
    description: "Nous bâtissons des relations de confiance avec nos clients en nous engageant sur des résultats concrets.",
    icon: Target,
  },
  {
    title: 'Durabilité',
    description: "Nos solutions intègrent dès la conception l'efficacité énergétique et la réduction de l'empreinte carbone.",
    icon: Leaf,
  },
];

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: 'Jean-Marc Dubois',
    role: 'Président Directeur Général',
    image: 'https://images.pexels.com/photos/33605541/pexels-photo-33605541.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: "30 ans d'expérience dans l'industrie technologique. Ancien VP d'un grand groupe industriel.",
  },
  {
    name: 'Sophie Laurent',
    role: 'Directrice Générale Déléguée',
    image: 'https://images.pexels.com/photos/38758069/pexels-photo-38758069.png?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: "Experte en transformation digitale et en pilotage d'organisations à fort impact.",
  },
  {
    name: 'Pierre Moreau',
    role: 'Directeur Technique',
    image: 'https://images.pexels.com/photos/4057039/pexels-photo-4057039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: "Architecte de systèmes complexes, 20 ans dans l'intégration de solutions industrielles.",
  },
  {
    name: 'Claire Rousseau',
    role: 'Directrice Cybersécurité',
    image: 'https://images.pexels.com/photos/32288633/pexels-photo-32288633.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    bio: "Spécialiste reconnue en sécurité OT, ancienne RSSI d'un opérateur critique.",
  },
];

export type Stat = {
  value: string;
  label: string;
  icon: LucideIcon;
};

export const stats: Stat[] = [
  { value: '25+', label: "Années d'expérience", icon: Award },
  { value: '1200+', label: 'Projets livrés', icon: BarChart3 },
  { value: '850+', label: 'Collaborateurs', icon: Users },
  { value: '40', label: 'Pays desservis', icon: Globe },
];

export type ContactInfo = {
  icon: LucideIcon;
  label: string;
  value: string;
};

export const contactInfo: ContactInfo[] = [
  { icon: MapPin, label: 'Adresse', value: "42 Avenue de l'Innovation, 75008 Paris, France" },
  { icon: Phone, label: 'Téléphone', value: '+33 1 42 00 00 00' },
  { icon: Mail, label: 'Email', value: 'contact@arex.com' },
  { icon: Clock, label: 'Horaires', value: 'Lun – Ven : 8h00 – 18h00' },
];

export const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
];

export const heroImage = 'https://images.pexels.com/photos/3089681/pexels-photo-3089681.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const aboutImage = 'https://images.pexels.com/photos/8853388/pexels-photo-8853388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const aboutImage2 = 'https://images.pexels.com/photos/946310/pexels-photo-946310.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const ctaImage = 'https://images.pexels.com/photos/8961068/pexels-photo-8961068.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
