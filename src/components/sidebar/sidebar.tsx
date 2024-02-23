import React, { useState, useEffect } from "react";
import HoverableIcon from "@/utils/hoverable-icon";
import LightSwitch from "./light-switch";
import useNexus from "@/store";
import { useThemeColor } from "@/config/themes";
import settings from "../../../public/sidebar/settings.svg";
import keyboard from "../../../public/sidebar/keyboard.svg";
import command from "../../../public/sidebar/command.svg";
import voice from "../../../public/sidebar/voice.svg";
import model from "../../../public/sidebar/model.svg";
import chat from "../../../public/sidebar/chat.svg";
import add from "../../../public/sidebar/add.svg";

export default function SideBar() {
  const sidebar = useNexus((state) => state.sidebar);
  const viewHeight = useNexus((state) => state.viewHeight);

  const [isShortViewport, setIsShortViewport] = useState(false);
  const [isShorterViewport, setIsShorterViewport] = useState(false);

  useEffect(() => {
    setIsShorterViewport(viewHeight < 325); // Adjust the threshold as needed
    setIsShortViewport(viewHeight < 350);
  }, [viewHeight]);

  const overlayColor = useThemeColor("overlay");

  return (
    <>
      {sidebar && (
        <div
          style={{ backgroundColor: overlayColor }}
          className="md:block min-w-[61px] opacity-60 flex flex-col justify-between mt-[40px]"
        >
          <div className="flex flex-col justify-between items-center pt-2.5 h-full">
            <div className="flex flex-col justify-center items-center gap-3 w-full h-[134px] pb-[20px]">
              <>
                <HoverableIcon src={add} alt="add" />
                <HoverableIcon src={chat} alt="chat" />
                <HoverableIcon src={model} alt="model" />
                <HoverableIcon src={voice} alt="voice" />
              </>
            </div>
            <div className="flex flex-col justify-between items-center gap-3 w-full p-2  ">
              <div className={!isShortViewport ? "" : "hidden"}>
                <HoverableIcon src={command} alt="command" />
              </div>
              <div className={!isShorterViewport ? "" : "hidden"}>
                <HoverableIcon src={keyboard} alt="keyboard" />
              </div>
              <div className="h-[22px]">
                <HoverableIcon src={settings} alt="settings" />
              </div>
            </div>
          </div>
          <div className="pt-[2px] h-[58px]">
            <LightSwitch />
          </div>
        </div>
      )}
    </>
  );
}
