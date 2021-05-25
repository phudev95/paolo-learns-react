import { CreateReactApp, Roadmap, UseState } from '../components/Fundamentals';
import { JSX } from '../components/Fundamentals/JSX';
import { BasicLayout } from '../components/UI/BasicLayout';
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
        path: 'roadmap',
        component: Roadmap,
        sidebarName: 'Roadmap',
      },
      {
        path: 'create-react-app',
        component: CreateReactApp,
        sidebarName: 'Create React App',
      },
      {
        path: 'jsx',
        component: JSX,
        sidebarName: 'JSX',
      },
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
