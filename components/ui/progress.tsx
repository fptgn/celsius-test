"use client"

import * as ProgressPrimitive from "@radix-ui/react-progress"
import { Meteors } from "@/components/ui/meteors";
import React from "react";


import { cn } from "@/lib/utils"

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  text?: string;
  col?: string; // Ajout de la nouvelle prop col
  col1?: string; // Nouvelle prop col1 pour la couleur de ProgressPrimitive.Root
  col2?: string;
  meteor?: boolean;
  glow?: boolean;
  border?: boolean;
  col3?: string;
  col4?: string;
  alpha_w?: number;

   // Nouvelle prop col2 pour la couleur de ProgressPrimitive.Indicator
}
const getColorValue = (color: any): any => {
  switch (color) {
    case "black":
      return "0, 0, 0";
    case "white":
      return "255, 255, 255";
    case "red":
      return "255, 0, 0";
    case "green":
      return "0, 128, 0";
    case "blue":
      return "0, 0, 255";
    case "yellow":
      return "255, 255, 0";
    case "purple":
      return "128, 0, 128";
    case "orange":
      return "255, 165, 0";
    case "gray":
      return "128, 128, 128";
    case "silver":
      return "192, 192, 192";
    case "lime":
      return "0, 255, 0";
    case "teal":
      return "0, 128, 128";
    case "navy":
      return "0, 0, 128";
    case "fuchsia":
      return "255, 0, 255";
    case "olive":
      return "128, 128, 0";
    case "maroon":
      return "128, 0, 0";
    case "aqua":
      return "0, 255, 255";
    case "cyan":
      return "0, 255, 255";
    case "magenta":
      return "255, 0, 255";
    case "gold":
      return "255, 215, 0";
    case "skyblue":
      return "135, 206, 235";
    case "crimson":
      return "220, 20, 60";
    case "darkblue":
      return "0, 0, 139";
    case "darkred":
      return "139, 0, 0";
    case "darkgreen":
      return "0, 100, 0";
    case "darkcyan":
      return "0, 139, 139";
    case "lightgreen":
      return "144, 238, 144";
    case "lightblue":
      return "173, 216, 230";
    case "lightgray":
      return "211, 211, 211";
    case "lightpink":
      return "255, 182, 193";
    case "forestgreen":
      return "34, 139, 34";
    case "seagreen":
      return "46, 139, 87";
    case "royalblue":
      return "65, 105, 225";
    case "orangered":
      return "255, 69, 0";
    case "midnightblue":
      return "25, 25, 112";
    case "mediumseagreen":
      return "60, 179, 113";
    case "mediumpurple":
      return "147, 112, 219";
    case "mediumorchid":
      return "186, 85, 211";
    case "darkslategray":
      return "47, 79, 79";
    case "darkolivegreen":
      return "85, 107, 47";
    case "darksalmon":
      return "233, 150, 122";
    case "darkorange":
      return "255, 140, 0";
    case "darkorchid":
      return "153, 50, 204";
    case "darkturquoise":
      return "0, 206, 209";
    case "deeppink":
      return "255, 20, 147";
    case "deepskyblue":
      return "0, 191, 255";
    case "dodgerblue":
      return "30, 144, 255";
      case "firebrick":
        return "178, 34, 34";
      case "floralwhite":
        return "255, 250, 240";
      case "gainsboro":
        return "220, 220, 220";
      case "ghostwhite":
        return "248, 248, 255";
      case "goldenrod":
        return "218, 165, 32";
      case "greenyellow":
        return "173, 255, 47";
      case "honeydew":
        return "240, 255, 240";
      case "hotpink":
        return "255, 105, 180";
      case "indianred":
        return "205, 92, 92";
      case "indigo":
        return "75, 0, 130";
      case "ivory":
        return "255, 255, 240";
      case "khaki":
        return "240, 230, 140";
  }
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, text, col, col1, col2,col3,glow,col4,border, meteor,alpha_w, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-10 w-full overflow-hidden rounded-full bg-secondary relative max-w-xs shadow-glow",
      className
    )}
    style={{ backgroundColor: col1 !== '' ? `rgba(${getColorValue(col1)}, ${alpha_w})` : undefined, boxShadow: glow ? "0 0 10px " + col3: "none",outline: border ? "2.5px solid " + col4 : "none" }}
    {...props}
  >
    
    {text && <div className="absolute inset-0 flex items-center justify-center " style={{ color: col, zIndex: 1 }}>{text}</div>}
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)`, backgroundColor: col2 !== '' ? `rgba(${getColorValue(col2)}, ${alpha_w})` : undefined }}
    />
    {meteor && <Meteors number={30} />}
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
