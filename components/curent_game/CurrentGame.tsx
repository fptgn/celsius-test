import React, { useEffect, useState } from "react";
import SlugKuratorGameIndexQuery from "@/app/queries/SlugKuratorGameIndex";
import Merchant from "@/app/queries/Merchant";
import { Separator } from "@/components/ui/separator"
import { Meteors } from "@/components/ui/meteors";


import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"


type CurrentGameProps = {
  token: string;
  id: string;
  positions: Array<any> | null;
  meteor: boolean;
  col: string;
  glow: boolean;
  col1: string;
  border: boolean;
  col2: string;
  alpha_c: number;
};

type Slot = {
  name: string;
  provider: any;
  thumbnailUrl: string;
  rtp: number;
  date: string;
};

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

const CurrentGame: React.FC<CurrentGameProps> = ({ id, token, positions, meteor, col, col2, col1, border, glow,alpha_c }) => {
  const [lastSlot, setLastSlot] = useState<Slot>({
    name: "None",
    provider: "None",
    thumbnailUrl: "",
    rtp: 0,
    date: "XXX"
  });

  const getUserBetList = (token: string, id: string) => {
    const params = new URLSearchParams();
    params.append('auth_key', token,);
    params.append('user_id', id);
    params.append('limit', '2');
    params.append('offset', '0');
    params.append('count', '0');
    fetch("https://corsproxy.io/?https://celsiuscasino.com/api/user-history", {
      method: "POST",
      body: new URLSearchParams({
        'auth_key': token,
        'user_id': id,
        'limit': '2',
        'offset': '0',
        'count': '0'
        })
    })
      .then((r) => r.json())
      .then((data) => {
        const dernierElement = data.data[data.data.length - 1].funGame;
        const name = dernierElement.name;
        const rtp = dernierElement.rtp;
        const date = dernierElement.release_date;
        const merchantId = dernierElement.merchant_id;
        const merchantname = Merchant.find(merchant => merchant.id === merchantId);
        const image = dernierElement.image;
        let slot: Slot = {
          name: name,
          provider:
          merchantId != null
              ? merchantname?.name
              : "Celsius",
          thumbnailUrl: image,
          rtp: rtp,
          date: date
        };
        setLastSlot(slot)
      });
  };

  useEffect(() => {

    getUserBetList(token, id);
    const interval = setInterval(() => {
      getUserBetList(token, id);
    }, 8000);

    return () => clearInterval(interval);
  }, [token, id]);

  let pos = null;
  if (positions !== null) {
    if (
      positions?.find((pos: any) => String(Object.keys(pos)) === "current-game")
    ) {
      pos = positions?.find(
        (pos: any) => String(Object.keys(pos)) === "current-game"
      )["current-game"];
    }
  }
  return (
    <>
     <div
      className=""
      id="current-game"
      style={{
        position: 'absolute',
        top: pos !== null ? `${pos.top}px` : "",
        left: pos !== null ? `${pos.left}px` : "",
      }}
    >
      <Card className="inline-block" style={{backgroundColor: col !== '' ? `rgba(${getColorValue(col)}, ${alpha_c})` : undefined, boxShadow: glow ? "0 0 10px " + col1: "none",outline: border ? "2.5px solid " + col2 : "none"}}>
        <div className="relative overflow-hidden" >
        
      <div className="flex items-center h-60 space-x-4   ml-3 mr-3 overflow-hidden">
      <div style={{ zIndex: 1 }}>
        <img className="rounded-lg object-cover w-60" src={lastSlot.thumbnailUrl}></img>
        </div>
        <Separator orientation="vertical" className="h-40" />
        <div>
        <Badge variant="outline">🎰 JEUX ACTUEL</Badge>
        <div className="mt-2">
        <p><Badge variant="secondary"><b>{lastSlot.name}</b></Badge></p>
        <div className="mt-1"></div>
        <p><Badge variant="secondary">{lastSlot.provider.toUpperCase()}</Badge></p>
        </div>
      <div className="mt-4">
      </div>
        <Badge variant="outline">📃 INFOS</Badge>
        <div className="grid grid-cols-2 mt-2"  style={{ display: 'flex' }}>
        <div className="center">
        <p><Badge variant="outline">RTP</Badge></p>
        <div className="mt-1"></div>
        <p><Badge variant="secondary">{lastSlot.rtp}%</Badge></p>
        </div>
        <div className="ml-3">
        <p><Badge variant="outline">DATE</Badge></p>
        <div className="mt-1"></div>
        <p><Badge variant="secondary">{lastSlot.date}</Badge></p>
        </div>
        </div>
        </div>
      </div>
      {meteor && <div style={{ zIndex: -1 }}>
      <Meteors number={20}/>
      </div>}
      </div>
      </Card>

    </div>
    </>
  );
};

export default CurrentGame;
