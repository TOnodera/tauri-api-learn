import { getName as getTauriAppName } from "@tauri-apps/api/app";
import { useEffect, useState } from "react";
export default function AppPage() {
  const [appName, setAppName] = useState("");
  useEffect(() => {
    const getAppName = async () => {
      const name = await getTauriAppName();
      setAppName(name);
      console.log(name);
    };
    getAppName();
  }, [appName]);
  return (
    <>
      <h2>app</h2>
      <p>AppName: {appName}</p>
    </>
  );
}
