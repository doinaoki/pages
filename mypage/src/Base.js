import { Client as Styletron } from "styletron-engine-monolithic";
import { Provider as StyletronProvider } from "styletron-react";
import { DarkTheme, BaseProvider, styled, LightTheme } from "baseui";
import {Block} from 'baseui/block';
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar"
import PageRoot from './PageRoot';
import {
    BottomNavigation
  } from "baseui/bottom-navigation";

const engine = new Styletron();

export default function Base() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={DarkTheme}>
        <Topbar />
        <div className="container mx-auto max-w-screen-md pb-16">
            <div className="flex items-start pt-8">
                <Sidebar />
                <div className="pl-8">
                    <PageRoot/>
                </div>
            </div>
        </div>
        <BottomNavigation ></BottomNavigation>
      </BaseProvider>
    </StyletronProvider>
  );
}