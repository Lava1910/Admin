import {
  IconBrandSuperhuman, IconLayoutDashboard, IconFileReport, IconBookmarks, IconUserPlus, IconQuestionCircle, IconZoomQuestion
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    navlabel: true,
    subheader: 'List',
  },
  {
    id: uniqueId(),
    title: 'Exam List',
    icon: IconBookmarks,
    href: '/ui/typography',
  },
  {
    id: uniqueId(),
    title: 'Candicate List',
    icon: IconBrandSuperhuman,
    href: '/ui/shadow',
  },
  {
    id: uniqueId(),
    title: 'Question List',
    icon: IconQuestionCircle,
    href: '/ui/questionlist',
  },
  {
    navlabel: true,
    subheader: 'Action',
  },
  {
    id: uniqueId(),
    title: "Create account",
    icon: IconUserPlus,
    href: '/auth/login',
  },
  {
    id: uniqueId(),
    title: 'Create question',
    icon: IconZoomQuestion,
    href: '/ui/create-question',
  },
  {
    id: uniqueId(),
    title: 'Generate report',
    icon: IconFileReport,
    href: '/auth/register',
  }
];

export default Menuitems;
