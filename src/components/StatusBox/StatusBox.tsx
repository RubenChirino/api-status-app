// MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// Utils
import { formatTime } from "../../utils/functions";

// Types
import { Props } from "./StatusBox.types";

function StatusBox({ title, success, time, hostname, error, status }: Props) {
  return (
    <Card elevation={4}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>

        <Typography>
          State:{" "}
          <strong style={{ color: success ? "green" : "red" }}>
            {success ? "Success" : "Failed"}
          </strong>
        </Typography>

        {success ? (
          <>
            <Typography sx={{ mb: 0.5, fontSize: 13 }}>
              Hostname: <strong>{hostname ? hostname : "OUTAGE"}</strong>
            </Typography>
            <Typography variant="body2">
              Time: <strong>{formatTime(time)}</strong>
            </Typography>
          </>
        ) : (
          <>
            <Typography sx={{ mb: 0.5 }} variant="body2" component="p">
              Error: <strong style={{ color: "Red" }}>{error}</strong>
            </Typography>
            <Typography variant="body2" component="p">
              Status code: <strong style={{ color: "Red" }}>{status}</strong>
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default StatusBox;
