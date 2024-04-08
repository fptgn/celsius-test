import React, {useEffect, useState} from 'react';
import CookiesUtils from '@/app/CookiesUtils';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

import { ThemeSelector } from '@/components/theme-selector'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


const Labels = () => {
    return (
        <>
        <SelectItem value="black">Black</SelectItem>
<SelectItem value="white">White</SelectItem>
<SelectItem value="red">Red</SelectItem>
<SelectItem value="green">Green</SelectItem>
<SelectItem value="blue">Blue</SelectItem>
<SelectItem value="yellow">Yellow</SelectItem>
<SelectItem value="purple">Purple</SelectItem>
<SelectItem value="orange">Orange</SelectItem>
<SelectItem value="gray">Gray</SelectItem>
<SelectItem value="silver">Silver</SelectItem>
<SelectItem value="lime">Lime</SelectItem>
<SelectItem value="teal">Teal</SelectItem>
<SelectItem value="navy">Navy</SelectItem>
<SelectItem value="fuchsia">Fuchsia</SelectItem>
<SelectItem value="olive">Olive</SelectItem>
<SelectItem value="maroon">Maroon</SelectItem>
<SelectItem value="aqua">Aqua</SelectItem>
<SelectItem value="cyan">Cyan</SelectItem>
<SelectItem value="magenta">Magenta</SelectItem>
<SelectItem value="gold">Gold</SelectItem>
<SelectItem value="skyblue">SkyBlue</SelectItem>
<SelectItem value="crimson">Crimson</SelectItem>
<SelectItem value="darkblue">DarkBlue</SelectItem>
<SelectItem value="darkred">DarkRed</SelectItem>
<SelectItem value="darkgreen">DarkGreen</SelectItem>
<SelectItem value="darkcyan">DarkCyan</SelectItem>
<SelectItem value="lightgreen">LightGreen</SelectItem>
<SelectItem value="lightblue">LightBlue</SelectItem>
<SelectItem value="lightgray">LightGray</SelectItem>
<SelectItem value="lightpink">LightPink</SelectItem>
<SelectItem value="forestgreen">ForestGreen</SelectItem>
<SelectItem value="seagreen">SeaGreen</SelectItem>
<SelectItem value="royalblue">RoyalBlue</SelectItem>
<SelectItem value="orangered">OrangeRed</SelectItem>
<SelectItem value="midnightblue">MidnightBlue</SelectItem>
<SelectItem value="mediumseagreen">MediumSeaGreen</SelectItem>
<SelectItem value="mediumpurple">MediumPurple</SelectItem>
<SelectItem value="mediumorchid">MediumOrchid</SelectItem>
<SelectItem value="darkslategray">DarkSlateGray</SelectItem>
<SelectItem value="darkolivegreen">DarkOliveGreen</SelectItem>
<SelectItem value="darksalmon">DarkSalmon</SelectItem>
<SelectItem value="darkorange">DarkOrange</SelectItem>
<SelectItem value="darkorchid">DarkOrchid</SelectItem>
<SelectItem value="darkturquoise">DarkTurquoise</SelectItem>
<SelectItem value="deeppink">DeepPink</SelectItem>
<SelectItem value="deepskyblue">DeepSkyBlue</SelectItem>
<SelectItem value="dodgerblue">DodgerBlue</SelectItem>
<SelectItem value="firebrick">FireBrick</SelectItem>
<SelectItem value="floralwhite">FloralWhite</SelectItem>
<SelectItem value="gainsboro">Gainsboro</SelectItem>
<SelectItem value="ghostwhite">GhostWhite</SelectItem>
<SelectItem value="goldenrod">GoldenRod</SelectItem>
<SelectItem value="greenyellow">GreenYellow</SelectItem>
<SelectItem value="honeydew">HoneyDew</SelectItem>
<SelectItem value="hotpink">HotPink</SelectItem>
<SelectItem value="indianred">IndianRed</SelectItem>
<SelectItem value="indigo">Indigo</SelectItem>
<SelectItem value="ivory">Ivory</SelectItem>
<SelectItem value="khaki">Khaki</SelectItem>
</>
    )
}

type SettingsProps = {
    token: string,
    setToken: Function,
    wagerGoal: number,
    setWagerGoal: Function,
    setPositions : Function,
    col_c : string,
    col1_c : string,
    col2_c : string,
    glow_c : boolean,
    border_c: boolean,
    meteor_c: boolean,
    col_w : string,
    col1_w : string,
    col2_w : string,
    col3_w : string,
    glow_w : boolean,
    border_w: boolean,
    meteor_w: boolean,
    text : string,
    setCol_c: Function,
    setCol1_c: Function,
    setCol2_c: Function,
    setGlow_c : Function,
    setBorder_c: Function,
    setMeteor_c: Function,
    setCol_w: Function,
    setCol1_w: Function,
    setCol2_w: Function,
    setCol3_w: Function,
    setGlow_w : Function,
    setBorder_w: Function,
    setMeteor_w: Function,
    setText: Function,
    alpha_c: number,
    setAlpha_c: Function,
    alpha_w: number,
    setAlpha_w: Function,
    id: string,
    setId: Function,
    selectedcurrency: string,
    setSelectedCurrency: Function,
    multi: number,
    setMulti: Function
}   

const Settings: React.FC<SettingsProps> = ({token, setToken, wagerGoal, setWagerGoal, setPositions,col_c,col1_c,col2_c,glow_c,border_c,meteor_c,col_w,col1_w,col2_w,col3_w,text,glow_w,border_w,meteor_w,multi,setMulti,setCol_c,setCol1_c,setCol2_c,setGlow_c,setBorder_c,setMeteor_c,setCol_w,setCol1_w,setCol2_w,setCol3_w,setText,setGlow_w,setBorder_w,setMeteor_w,alpha_c,setAlpha_c,alpha_w,setAlpha_w, id, setId,selectedcurrency,setSelectedCurrency}) => {

    
    const handleChangWagerGoal = (e:any) => {
        CookiesUtils.setCookie("WAGER_GOAL", e.target.value, 365)
        setWagerGoal(e.target.value)
    }

    const handleChangeToken = (e:any) => {
        CookiesUtils.setCookie("TOKEN", e.target.value, 365)
        setToken(e.target.value)
    }

    const handleChangeAlpha = (e:any) => {
        CookiesUtils.setCookie("ALPHA_C", e.target.value, 365)
        setAlpha_c(Number(e.target.value))
    }

    const handleChangeAlpha2 = (e:any) => {
        CookiesUtils.setCookie("ALPHA_W", e.target.value, 365)
        setAlpha_w(Number(e.target.value))
    }

    const handleChangeId = (e:any) => {
        CookiesUtils.setCookie("ID", e.target.value, 365)
        setId(Number(e.target.value))
    }

    const handleChangeMulti = (e:any) => {
        CookiesUtils.setCookie("MULTI", e.target.value, 365)
        setMulti(Number(e.target.value))
    }

    const resetElementsPosition = () => {
        document.cookie = 'POSITIONS=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        setPositions(null)
    }
    return (
        <div style={{ display: 'flex' }}>
            <div className='mt-10 ml-3'>
            <div className='grid grid-cols-3 mt-3'>
            <div>
            <Button onClick={resetElementsPosition}>Reset elements position</Button>
            <p><Label>Progress bar opacity:</Label></p>
            <Input className="w-70"defaultValue={alpha_w} onChange={handleChangeAlpha2} type='number' max={1} min={0}></Input>
            </div>
            <div className='ml-10'>
            <Button onClick={() => {setCol_c(''); setCol1_c(''); setCol2_c(''); setGlow_w(false);setBorder_w(false); setMeteor_w(false); setGlow_c(false);setBorder_c(false); setMeteor_c(false); setCol_w(''); setCol1_w(''); setCol2_w(''); setCol3_w(''); setText('gray'); setAlpha_c(1); setAlpha_w(1); CookiesUtils.setCookie("METEOR_W", "", 365); CookiesUtils.setCookie("BORDER_W", "", 365); CookiesUtils.setCookie("GLOW_W", "", 365); CookiesUtils.setCookie("METEOR_C", "", 365); CookiesUtils.setCookie("BORDER_C", "", 365); CookiesUtils.setCookie("GLOW_C", "", 365);; CookiesUtils.setCookie("ALPHA_C", "", 365); CookiesUtils.setCookie("ALPHA_W", "", 365); CookiesUtils.setCookie("TEXT", "", 365); CookiesUtils.setCookie("COL_W", "", 365); CookiesUtils.setCookie("COL1_W", "", 365); CookiesUtils.setCookie("COL2_W", "", 365); CookiesUtils.setCookie("COL3_W", "", 365); CookiesUtils.setCookie("COL_C", "", 365); CookiesUtils.setCookie("COL1_C", "", 365); CookiesUtils.setCookie("COL2_C", "", 365)}}>Reset style</Button>
            <p><Label>Game opacity:</Label></p>
            <Input defaultValue={alpha_c} onChange={handleChangeAlpha} type='number' max={1} min={0} ></Input>
            </div>
            <div>
            <ThemeSelector/>
            </div>
            </div>
            <div className='grid grid-cols-4 mt-2' style={{ display: 'flex' }}>
            <Label>API Token:
                <div className='mt-3 mb-3 ml-3 w-[70px] ml-3'>
                <Input value={token} onChange={handleChangeToken} type="password"></Input>
                </div>
            </Label>
            <Label>User Id:
                <div className='mt-3 mb-3 w-[70px] ml-3'>
                <Input value={id} onChange={handleChangeId} type="password"></Input>
                </div>
            </Label>

            <Label>Start €:
            <div className='mt-3 mb-3 w-[70px] ml-3'>
                <Input type="text" value={wagerGoal} onChange={handleChangWagerGoal}></Input>
                </div>
            </Label>
            <Label>Start €:
            <div className='mt-3 mb-3 w-[70px] ml-3'>
                <Input type="number" value={multi} onChange={handleChangeMulti}></Input>
                </div>
            </Label>
            <Label>Currency:
            <div className='mt-3 mb-3 ml-3'>
            <Select value={selectedcurrency} defaultValue={selectedcurrency} onValueChange={(newValue) => {setSelectedCurrency(newValue); CookiesUtils.setCookie("CURRENCY", newValue, 365)}}>
            <SelectTrigger className="w-[70px]" >
            <SelectValue placeholder="Currency" />
            </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Currency</SelectLabel>
                    <SelectItem value="BTC">BTC</SelectItem>
                    <SelectItem value="ETH">ETH</SelectItem>
                    <SelectItem value="LTC">LTC</SelectItem>
                    <SelectItem value="XRP">XRP</SelectItem>
                    <SelectItem value="DOGE">DOGE</SelectItem>
                    <SelectItem value="BCH">BCH</SelectItem>
                    <SelectItem value="TRX">TRX</SelectItem>
                    <SelectItem value="BNB">BNB</SelectItem>
                    <SelectItem value="USDT_TRC20">USDT_TRC20</SelectItem>
                    <SelectItem value="USDT">USDT</SelectItem>
                    </SelectGroup>
                </SelectContent>
                </Select>
                </div>
            </Label>
            </div>
            </div>
            <div className='ml-3 mt-10'>
            <Label><b>Progress bar settings:</b></Label>
            <div className='grid grid-cols-3'>
                <div>
            <div>
            <Label>Color of progress bar back:</Label>
                <div className='mt-3 mb-3 ml-3'>
            <Select  value={col_w} defaultValue={col_w} onValueChange={(newValue) => {setCol_w(newValue); CookiesUtils.setCookie("COL_W", newValue, 365)}}>
            <SelectTrigger className="w-[180px]" >
            <SelectValue placeholder="Colors" />
            </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Colors</SelectLabel>
                    <Labels/>
                    </SelectGroup>
                </SelectContent>
                </Select>
                </div>
            </div>
            <div>
            <Label>Color of progress bar front:</Label>
                <div className='mt-3 mb-3 ml-3'>
            <Select value={col1_w} defaultValue={col1_w} onValueChange={(newValue) => {setCol1_w(newValue); CookiesUtils.setCookie("COL1_W", newValue, 365)}}>
            <SelectTrigger className="w-[180px]" >
            <SelectValue placeholder="Colors" />
            </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Colors</SelectLabel>
                    <Labels/>
                    </SelectGroup>
                </SelectContent>
                </Select>
                </div>
            </div>
            </div>
            <div>
            <div>
            <Label>Color of progress bar glow:</Label>
                <div className='mt-3 mb-3 ml-3'>
            <Select value={col2_w} defaultValue={col2_w} onValueChange={(newValue) => {setCol2_w(newValue); CookiesUtils.setCookie("COL2_W", newValue, 365)}}>
            <SelectTrigger className="w-[180px]" >
            <SelectValue placeholder="Colors" />
            </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Colors</SelectLabel>
                    <Labels/>
                    </SelectGroup>
                </SelectContent>
                </Select>
                </div>
            </div>
            <div>
            <Label>Color of progress bar border:</Label>
                <div className='mt-3 mb-3 ml-3'>
            <Select value={col3_w} defaultValue={col3_w} onValueChange={(newValue) => {setCol3_w(newValue); CookiesUtils.setCookie("COL3_W", newValue, 365)}}>
            <SelectTrigger className="w-[180px]" >
            <SelectValue placeholder="Colors" />
            </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Colors</SelectLabel>
                    <Labels/>
                    </SelectGroup>
                </SelectContent>
                </Select>
                </div>
            </div>
            </div>
            <div>
            <div>
            <Label>Color of progress bar text:</Label>
                <div className='mt-3 mb-3 ml-3'>
            <Select value={text} defaultValue={text} onValueChange={(newValue) => {setText(newValue); CookiesUtils.setCookie("TEXT", newValue, 365)}}>
            <SelectTrigger className="w-[180px]" >
            <SelectValue placeholder="Colors" />
            </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Colors</SelectLabel>
                    <Labels/>
                    </SelectGroup>
                </SelectContent>
                </Select>
                </div>
            </div>
            <div className="flex items-center space-x-2 ml-3">
            <Checkbox checked = {glow_w} onCheckedChange={(newValue) => {setGlow_w(newValue); CookiesUtils.setCookie("GLOW_W", String(newValue), 365)}} />
            <Label>Glow</Label>
            </div>
            <div className="flex items-center space-x-2 mt-3 ml-3">
            <Checkbox  checked = {border_w} onCheckedChange={(newValue) => {setBorder_w(newValue); CookiesUtils.setCookie("BORDER_W", String(newValue), 365)}} />
            <Label>Border</Label>
            </div>
            <div className="flex items-center space-x-2 mt-3 ml-3">
            <Checkbox  checked = {meteor_w} onCheckedChange={(newValue) => {setMeteor_w(newValue); CookiesUtils.setCookie("METEOR_W", String(newValue), 365)}} />
            <Label>Meteor</Label>
            </div>
            </div>
            </div>
            </div>
            <div className='ml-3 mt-10'>
            <Label><b>Game settings:</b></Label>
            <div className='grid grid-cols-2  '>
            <div>
            <div>
            <Label>Color of game background:</Label>
                <div className='mt-3 mb-3 ml-3'>
            <Select value={col_c} defaultValue={col_c} onValueChange={(newValue) => {setCol_c(newValue); CookiesUtils.setCookie("COL_C", newValue, 365)}}>
            <SelectTrigger className="w-[180px]" >
            <SelectValue placeholder="Colors" />
            </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Colors</SelectLabel>
                    <Labels/>
                    </SelectGroup>
                </SelectContent>
                </Select>
                </div>
            </div>
            <div>
            <Label>Color of game glow:</Label>
                <div className='mt-3 mb-3 ml-3'>
            <Select value={col1_c} defaultValue={col1_c} onValueChange={(newValue) => {setCol1_c(newValue); CookiesUtils.setCookie("COL1_C", newValue, 365)}}>
            <SelectTrigger className="w-[180px]" >
            <SelectValue placeholder="Colors" />
            </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Colors</SelectLabel>
                    <Labels/>
                    </SelectGroup>
                </SelectContent>
                </Select>
                </div>
            </div>
            </div>
            <div>
            <div>
            <Label>Color of game border:</Label>
                <div className='mt-3 mb-3 ml-3'>
            <Select value={col2_c} defaultValue={col2_c} onValueChange={(newValue) => {setCol2_c(newValue); CookiesUtils.setCookie("COL2_C", newValue, 365)}}>
            <SelectTrigger className="w-[180px]" >
            <SelectValue placeholder="Colors" />
            </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectLabel>Colors</SelectLabel>
                    <Labels/>
                    </SelectGroup>
                </SelectContent>
                </Select>
                </div>
            </div>
            <div className="flex items-center space-x-2 ml-3">
            <Checkbox checked = {glow_c} onCheckedChange={(newValue) => {setGlow_c(newValue); CookiesUtils.setCookie("GLOW_C", String(newValue), 365)}} />
            <Label>Glow</Label>
            </div>
            <div className="flex items-center space-x-2 mt-3 ml-3">
            <Checkbox  checked = {border_c} onCheckedChange={(newValue) => {setBorder_c(newValue); CookiesUtils.setCookie("BORDER_C", String(newValue), 365)}} />
            <Label>Border</Label>
            </div>
            <div className="flex items-center space-x-2 mt-3 ml-3">
            <Checkbox checked = {meteor_c} onCheckedChange={(newValue) => {setMeteor_c(newValue); CookiesUtils.setCookie("METEOR_C", String(newValue), 365)}} />
            <Label>Meteor</Label>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Settings;