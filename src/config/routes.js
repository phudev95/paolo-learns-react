import { BasicLayout } from '../components/UI/BasicLayout';
import { UseState } from '../components/UseState';
import { AdvancedScreen } from '../screens/Advanced';
import { EcosystemScreen } from '../screens/Ecosystem';
import { FundamentalsScreen } from '../screens/Fundamentals';

export const routes = [
  {
    path: '/fundamentals',
    component: FundamentalsScreen,
    sidebarName: 'Fundamentals',
    layout: BasicLayout,
    childRoutes: [
      {
        path: 'use-state',
        component: UseState,
        sidebarName: 'Use State',
      },
    ],
  },
  {
    path: '/advanced',
    component: AdvancedScreen,
    sidebarName: 'Advanced',
    layout: BasicLayout,
    childRoutes: [],
  },
  {
    path: '/ecosystem',
    component: EcosystemScreen,
    sidebarName: 'Ecosystem',
    layout: BasicLayout,
    childRoutes: [],
  },
];
