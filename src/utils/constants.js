import CodeIcon from '@mui/icons-material/Code';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import PhpIcon from '@mui/icons-material/Php';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import DataObjectIcon from '@mui/icons-material/DataObject';
import TerminalIcon from '@mui/icons-material/Terminal';
import BarChartIcon from '@mui/icons-material/BarChart';
import StorageIcon from '@mui/icons-material/Storage';
import GitHubIcon from '@mui/icons-material/GitHub';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SecurityIcon from '@mui/icons-material/Security';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WorkIcon from '@mui/icons-material/Work';
import NewspaperIcon from '@mui/icons-material/Newspaper';

export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';

export const categoryGroups = [
  {
    title: 'Web Development',
    items: [
      { name: 'Frontend Tutorial', icon: <CodeIcon /> },
      { name: 'React Tutorial', icon: <IntegrationInstructionsIcon /> },
      { name: 'Javascript Tutorial', icon: <JavascriptIcon /> },
      { name: 'HTML Tutorial', icon: <HtmlIcon /> },
      { name: 'CSS Tutorial', icon: <CssIcon /> },
      { name: 'Backend Tutorial', icon: <DataObjectIcon /> },
      { name: 'Node.js Tutorial', icon: <StorageIcon /> },
      { name: 'PHP Tutorial', icon: <PhpIcon /> },
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      { name: 'AWS Tutorial', icon: <CloudQueueIcon /> },
      { name: 'Docker Tutorial', icon: <TerminalIcon /> },
      { name: 'Linux Tutorial', icon: <TerminalIcon /> },
      { name: 'Git Tutorial', icon: <GitHubIcon /> },
    ],
  },
  {
    title: 'Data & AI',
    items: [
      { name: 'Data Analytics', icon: <BarChartIcon /> },
      { name: 'Python Data Science', icon: <DataObjectIcon /> },
      { name: 'Machine Learning', icon: <PsychologyIcon /> },
      { name: 'AI Tools', icon: <SmartToyIcon /> },
    ],
  },
  {
    title: 'Security & Web3',
    items: [
      { name: 'Ethical Hacking', icon: <TerminalIcon /> },
      { name: 'Cybersecurity', icon: <SecurityIcon /> },
      { name: 'Crypto', icon: <CurrencyBitcoinIcon /> },
      { name: 'Blockchain', icon: <CurrencyBitcoinIcon /> },
    ],
  },
  {
    title: 'Career',
    items: [
      { name: 'Coding Interview', icon: <CodeIcon /> },
      { name: 'Freelancing', icon: <WorkIcon /> },
      { name: 'Tech News', icon: <NewspaperIcon /> },
    ],
  },
];

export const categories = categoryGroups.flatMap((group) => group.items);

export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'JavaScript Mastery';
export const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png';
