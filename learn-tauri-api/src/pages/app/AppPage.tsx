import { getName as getTauriAppName } from "@tauri-apps/api/app";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import { textTransform } from "@mui/system";
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
      <h2 className="mb-10">appモジュール</h2>
      <Card>
        <CardContent>
          <h2 className="mb-10">getName() : Promise</h2>
          <p className="mb-10">アプリケーション名を取得します。</p>
          <Button style={{ textTransform: "none" }} variant="contained">
            getName()
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
