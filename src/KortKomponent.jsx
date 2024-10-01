import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActions, CardMedia, Typography } from "@mui/material";

export default function KortKomponent(props) {
  return (
    <Card sx={{ minWidth: 200, gap: 5 }}>
      <CardMedia sx={{ height: 140 }} image={props.bild} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.text}
        </Typography>
      </CardContent>

      <Button variant="outlined" size="small">
        {props.button}
      </Button>

      <CardActions></CardActions>
    </Card>
  );
}
