import { ReactComponent as IconDeleteSVG } from "../icons/icon-delete.svg";
import { ReactComponent as IconRoketsVG } from "../icons/icon-rocket.svg";
import { ReactComponent as IconPlussVG } from "../icons/icon-plus.svg";
import "./IconLibrary.scss";
import React from "react";

const iconType = {
  iconDelete: (classSCss, color) => (
    <IconDeleteSVG className={classSCss} fill={color} />
  ),
  iconRoket: (classSCss, color) => (
    <IconRoketsVG className={classSCss} fill={color} />
  ),
  iconPlus: (classSCss, color) => (
    <IconPlussVG className={classSCss} fill={color} />
  ),
};

function IconLibrary({ type, classSCss, color }) {
  return <React.Fragment>{iconType[type](classSCss, color)}</React.Fragment>;
}

export { IconLibrary };
