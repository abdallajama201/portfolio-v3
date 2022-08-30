import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import '../styles/Footer.scss'

export default function Footer() {
  return (
    <Grid id='grid-footer' container item xs={30} direction="row" justifyContent="space-between" alignItems="center">
      <Grid container item xs={4} direction="row" justifyContent="space-between" alignItems="right">
        <Typography variant='h6'>Copyright ©️ 2022 Abdalla Jama</Typography>
      </Grid>
      <Grid container item xs={2} direction="row" justifyContent="space-between" alignItems="right">
        <a href='https://github.com/abdallajama201' style={{color: "inherit"}}>
          <Tooltip title='github.com/abdallajama201' alt='github.com/abdallajama201'>
            <GitHubIcon id='icons' alt='github.com/abdallajama201' />
          </Tooltip>
        </a>
        <a href="https://www.linkedin.com/in/abdalla-jama/" style={{color: "inherit"}}>
          <Tooltip title='linkedin.com/in/abdalla-jama' alt='linkedin.com/in/abdalla-jama'>
            <LinkedInIcon id='icons' alt='linkedin.com/in/abdalla-jama' />
          </Tooltip>
        </a>
        <a href="mailto:abdallajama@gmail.com" style={{color: "inherit"}}>
          <Tooltip title='abdallajama@gmail.com' alt='abdallajama@gmail.com'>
            <EmailOutlinedIcon id='icons' alt='abdallajama@gmail.com'/>
          </Tooltip>
        </a>
      </Grid>
    </Grid>

  );
}