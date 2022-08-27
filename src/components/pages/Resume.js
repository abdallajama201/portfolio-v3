import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
 
export default function Resume() {
  return (
    <Grid id='grid-home' container item xs={2} sm={4} md={20} direction="row" justifyContent="center">
      <Card>
        <CardContent>
          <Typography variant='h3'>Resume</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
