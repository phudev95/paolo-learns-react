import { BasicLayout } from "../components/UI/BasicLayout";
import { AdvancedScreen } from "../screens/Advanced";
import { EcosystemScreen } from "../screens/Ecosystem";
import { FundamentalsScreen } from "../screens/Fundamentals";

export const routes = [
  {
    path: "/",
    exact: true,
    component: FundamentalsScreen,
    sidebarName: "Fundamentals",
    layout: BasicLayout
  },
  {
    path: "/advanced",
    component: AdvancedScreen,
    sidebarName: "Advanced",
    layout: BasicLayout
  },
  {
    path: "/ecosystem",
    component: EcosystemScreen,
    sidebarName: "Ecosystem",
    layout: BasicLayout
  }
];
