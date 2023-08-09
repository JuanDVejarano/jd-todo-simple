import { ReactComponent as IconDeleteSVG } from "../icons/icon-delete.svg";
import { ReactComponent as IconRoketsVG } from "../icons/icon-rocket.svg";
import { ReactComponent as IconPlussVG } from "../icons/icon-plus.svg";
import React from "react";

const iconType = {
  iconDelete: <IconDeleteSVG />,
  iconRoket: <IconRoketsVG />,
  iconPlus: <IconPlussVG />,
};

function IconLibrary({ type }) {
  return <React.Fragment>{iconType[type]}</React.Fragment>;
}

export { IconLibrary };
