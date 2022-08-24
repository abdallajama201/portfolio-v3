import Grid from '@mui/material/Grid';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import Typography from '@mui/material/Typography';
import portrait from '../img/portrait.png'
import '@mui/system';
import '../styles/Header.scss'

const pages = ['Home', 'Projects', 'Resume'];

export default function Header({currentPage, handlePageChange}) {
  return (
    <Grid id='grid-header' container item xs={30} direction="row" justifyContent="space-between" alignItems="center">
      <img src={portrait} id='portrait' alt='portrait'></img>
      <Grid container item xs={2} sm={4} md={8} direction="row" justifyContent="space-around" alignItems="center">
        {pages.map((page, index) => 
          <Typography id='Typography' variant='h4' key={index} href={"#"+page} className={`custom-btn btn ${currentPage === page ? 'active' : 'inactive'}`} onClick={() => handlePageChange(page)}><span>{page}</span><span>{page}</span></Typography>)}
      </Grid>
      <TokenOutlinedIcon id='spinner' />
    </Grid>
  );
} 