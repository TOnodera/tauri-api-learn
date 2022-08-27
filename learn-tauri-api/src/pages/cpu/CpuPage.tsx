import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { invoke } from "@tauri-apps/api/tauri";
import {
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";


interface CpuInfo {
  time: string;
  user: number;
  nice: number;
  system: number;
  intr: number;
  idle: number;
}
export default function AppPage() {
  const getCpuInfo = async (): Promise<CpuInfo> => {
      return await invoke("get_cpu_info");
  }
  const [data, setData] = useState([] as unknown as CpuInfo[]);
  useEffect(()=>{

      const handler = ()=>{
        getCpuInfo().then(cpuInfo=>setData((data)=>{
          console.log(cpuInfo);
          return [...data,cpuInfo]
        }));
      }

      const id = setInterval(()=>{
        handler();
      },1000);

      return ()=>{
        clearInterval(id);
      }

  },[]);
  return (
    <>
      <Button onClick={getCpuInfo}>Rust handler</Button>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="user" stroke="#8884d8"/>
        <CartesianGrid stroke="#ccc"/>
        <XAxis dataKey="time"/>
        <YAxis />
      </LineChart>
    </>
  );
}
