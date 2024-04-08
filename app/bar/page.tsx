"use client"
import React, {useState, useEffect} from 'react';
import CurrentGame from '@/components/curent_game/CurrentGame';
import Settings from '@/components/settings/Settings';
import WagerProgessBar from '@/components/wager_progress_bar/WagerProgressBar';
import CookiesUtils from '../CookiesUtils';


type Position = {
  [id: string]: { 
    top: number,
    left: number,
   },
}

const App: React.FC = () => {

  const [token, setToken] = useState<string>(CookiesUtils.getCook("TOKEN"));
  const [id, setId] = useState<string>(CookiesUtils.getCook("ID"));
  const [multi, setMulti] = useState<number>(Number(CookiesUtils.getCook("MULTI") ? Number(CookiesUtils.getCook("MULTI")) : 40));
  const [selectedcurrency, setSelectedCurrency] = useState<string>(CookiesUtils.getCook("CURRENCY") ? CookiesUtils.getCook("CURRENCY"): "LTC");
  const [wagerGoal, setWagerGoal] = useState<number>(Number(CookiesUtils.getCook("WAGER_GOAL")) ? Number(CookiesUtils.getCook("WAGER_GOAL")): 3000);
  const [positions, setPositions] = useState<Array<Position> | null>(CookiesUtils.getCook("POSITIONS") === "" ? null : JSON.parse(CookiesUtils.getCook("POSITIONS")));
  const [col_c, setCol_c] = useState<string>(CookiesUtils.getCook("COL_C"));
  const [col1_c, setCol1_c] = useState<string>(CookiesUtils.getCook("COL1_C"));
  const [col2_c, setCol2_c] = useState<string>(CookiesUtils.getCook("COL2_C"));
  const [glow_c, setGlow_c] = useState<boolean>(CookiesUtils.getCook("GLOW_C") === "true");
  const [alpha_c, setAlpha_c] = useState<number>(Number(CookiesUtils.getCook("ALPHA_C"))  || 1);
  const [alpha_w, setAlpha_w] = useState<number>(Number(CookiesUtils.getCook("ALPHA_W"))  || 1);
  const [border_c, setBorder_c] = useState<boolean>(CookiesUtils.getCook("BORDER_C") === "true");
  const [meteor_c, setMeteor_c] = useState<boolean>(CookiesUtils.getCook("METEOR_C") === "true");
  const [col_w, setCol_w] = useState<string>(CookiesUtils.getCook("COL_W"));
  const [col1_w, setCol1_w] = useState<string>(CookiesUtils.getCook("COL1_W"));
  const [col2_w, setCol2_w] = useState<string>(CookiesUtils.getCook("COL2_W"));
  const [col3_w, setCol3_w] = useState<string>(CookiesUtils.getCook("COL2_W"));
  const [text, setText] = useState<string>(CookiesUtils.getCook("TEXT") || "gray");
  const [glow_w, setGlow_w] = useState<boolean>(CookiesUtils.getCook("GLOW_W") === "true");
  const [border_w, setBorder_w] = useState<boolean>(CookiesUtils.getCook("BORDER_W") === "true");
  const [meteor_w, setMeteor_w] = useState<boolean>(CookiesUtils.getCook("METEOR_W") === "true");
  useEffect(() => {
    const progressBar = document.getElementById("progress-bar");
    const currentGame = document.getElementById("current-game");
  
    if (progressBar) {
      dragElement(progressBar);
    }
    if (currentGame) {
      dragElement(currentGame);
    }
  }, [positions]);
  
  function dragElement(elmnt: any) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const dragMouseDown = (e: any) => {
      e = e || window.event;
      e.preventDefault();
      // Change le curseur en mode de déplacement
      elmnt.style.cursor = "move";
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    if (document.getElementById(elmnt.id + "header")) {
      document.getElementById(elmnt.id + "header")!.onmousedown = dragMouseDown;
    } else {
      elmnt.onmousedown = dragMouseDown;
    }
  
    const elementDrag = (e: any) => {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    const closeDragElement = () => {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
      // Retour au curseur par défaut
      elmnt.style.cursor = "default";
  
      let pos: Position = { [elmnt.id]: { top: elmnt.offsetTop - pos2, left: elmnt.offsetLeft - pos1 } };
      updatePositions(pos);
    }
  }

  const updatePositions = (pos:Position) => {

    let newPositions:Array<Position> = []
    if(positions !== null){
      newPositions = [...positions]
      let positionToUpdate = positions.find((position:any) => String(Object.keys(position)) === String(Object.keys(pos)))

      if(positionToUpdate){
        let key = String(Object.keys(pos))
        positionToUpdate[key] = pos[key]
        newPositions = [...positions]
      }else{
        newPositions.push(pos)
      }
    }else{
      newPositions.push(pos)
    }

    setPositions(newPositions)
    CookiesUtils.setCookie("POSITIONS", JSON.stringify(newPositions), 365)
  }


  return (
    <div className=" margin: 4rem 2rem">
      
      <WagerProgessBar token={token} goal={wagerGoal} positions={positions} col_w= {col_w} col1_w= {col1_w} col2_w= {col2_w} col3_w= {col3_w} text= {text} border_w= {border_w} meteor_w={meteor_w} glow_w={glow_w} alpha_w={alpha_w} id={id} selectedCurrency={selectedcurrency} multi={multi}></WagerProgessBar>
      
      <CurrentGame  token={token} positions={positions} meteor={meteor_c} col={col_c} col1={col1_c} col2={col2_c} border={border_c} glow={glow_c} alpha_c={alpha_c} id={id}></CurrentGame>
  
    <div className='fixed bottom-0'>
      <Settings multi={multi} setMulti={setMulti} token={token} setToken={setToken} wagerGoal={wagerGoal} setWagerGoal={setWagerGoal} setPositions={setPositions} col_c={col_c} col1_c={col1_c} col2_c={col2_c} glow_c={glow_c} border_c={border_c} meteor_c={meteor_c} col_w={col_w} col1_w={col1_w} col2_w={col2_w} col3_w={col3_w} glow_w={glow_w} border_w={border_w} meteor_w={meteor_w} text={text}  setCol_c={setCol_c} setCol1_c={setCol1_c} setCol2_c={setCol2_c} setGlow_c={setGlow_c} setBorder_c={setBorder_c} setMeteor_c={setMeteor_c} setCol_w={setCol_w} setCol1_w={setCol1_w} setCol2_w={setCol2_w} setCol3_w={setCol3_w} setGlow_w={setGlow_w} setBorder_w={setBorder_w} setMeteor_w={setMeteor_w} setText={setText} alpha_c={alpha_c} setAlpha_c={setAlpha_c} setAlpha_w={setAlpha_w} alpha_w={alpha_w} id={id} setId={setId} selectedcurrency={selectedcurrency} setSelectedCurrency={setSelectedCurrency}></Settings>
      </div>
    </div>
  );
}

export default App;
