
import React, { useEffect, useState } from "react";
import userRolloverQuery from "@/app/queries/userRollover";
import { Progress } from "@/components/ui/progress"


type WagerProps = {
  token: string;
  id: string;
  goal: number;
  positions: Array<any> | null;
  col_w: string;
  col1_w: string;
  col2_w: string;
  col3_w: string;
  border_w: boolean;
  glow_w: boolean;
  meteor_w: boolean;
  text: string;
  alpha_w: number;
  selectedCurrency: any;
  multi: number;
};

const WagerProgessBar: React.FC<WagerProps> = ({ multi,token, id, goal, positions, col_w,col1_w,col2_w,col3_w,text,border_w,glow_w,meteor_w , alpha_w, selectedCurrency}) => {
  const [progress, setProgress] = useState<number>(50);
  const [currency, setCurrency] = useState<Record<string, number>>({});

  useEffect(() => {
    getCurrency();
    getWager(token,id,currency,goal,multi);
    const interval = setInterval(() => {
      getWager(token,id,currency,goal,multi);
    }, 8000);

    return () => clearInterval(interval);
  }, [token,id,currency,goal]);

  const getCurrency = () => {

    fetch("https://corsproxy.io/?https://celsiuscasino.com/api/get-exchange-rates", {
      method: "GET",
    })
      .then((r) => r.json())
      .then((data) => {
        setCurrency(data.data);
      });
  };

  const getWager = (token: string, id: string, currency: any, goal: number, multi: number) => {
    const params = new URLSearchParams();
    params.append('auth_key', token,);
    params.append('user_id', id);

    fetch("https://corsproxy.io/?https://celsiuscasino.com/api/get-user-promocodes", {
      method: "POST",
      body: new URLSearchParams({
        'auth_key': token,
        'user_id': id
        })
    })
      .then((r) => r.json())
      .then((data) => {
        if (!data.data[0].progress || !currency.BTC) {
          return;
        }
        setProgress(((data.data[0].progress / ((goal / currency[selectedCurrency] ) * multi) ) * 100));
      });
  };

  

  let pos = null;
  if (positions !== null) {
    if (
      positions?.find((pos: any) => String(Object.keys(pos)) === "progress-bar")
    ) {
      pos = positions?.find(
        (pos: any) => String(Object.keys(pos)) === "progress-bar"
      )["progress-bar"];
    }
  }

  return (
    <div
      className="progress-bar"
      id="progress-bar"
      style={{
        position: "absolute",
        top: pos !== null ? `${pos.top}px` : "",
        left: pos !== null ? `${pos.left}px` : "",
        width: "100%"
      }}
    >
        <div style={{position: "relative"}}>
    <Progress value={progress} text={`${(Math.round((goal * multi) * (progress / 100) * 100) / 100).toFixed(2)}€ / ${goal * multi}€ (${(Math.round(progress * 100) / 100).toFixed(2)}%)`} col={text} meteor={meteor_w} col3={col2_w} glow={glow_w} border={border_w} col4={col3_w} col1={col_w} col2={col1_w} alpha_w={alpha_w}/>
    </div>
    </div>
  );
};

export default WagerProgessBar;