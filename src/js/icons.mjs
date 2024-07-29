import { RiFlashlightLine, RiTodoLine, RiBriefcaseLine, RiBook2Line, 
   RiFirstAidKitLine, RiWalletLine, RiPlaneLine, RiLightbulbLine } from "@remixicon/react";

const iconMap = {
quick: RiFlashlightLine,
todo: RiTodoLine,
work: RiBriefcaseLine,
study: RiBook2Line,
health: RiFirstAidKitLine,
finance: RiWalletLine,
travel: RiPlaneLine,
creativity: RiLightbulbLine
};

export function getIconByClassName(className) {
return iconMap[className] || null;
}