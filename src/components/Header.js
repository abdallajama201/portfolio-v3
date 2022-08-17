import Grid from '@mui/material/Grid';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import { styled } from '@mui/system';
import portrait from '../img/portrait.png'
import '../styles/Header.scss'

const Token = styled(TokenOutlinedIcon)({
  // fontSize: 100
});

const pages = ['Home', 'Projects', 'Resume'];

export default function Header({currentPage, handlePageChange}) {
  return (
    <Grid id='Grid' container item xs={2} sm={4} md={20} direction="row" justifyContent="space-between" alignItems="center">
      <img src={portrait} id='portrait' alt='portrait'></img>
      <Grid container item xs={2} sm={4} md={8} direction="row" justifyContent="space-around" alignItems="center">
        {pages.map((page, index) => 
          <button key={index} href={"#"+page} className={`custom-btn btn ${currentPage === page ? 'active' : 'inactive'}`} onClick={() => handlePageChange(page)}><span>{page}</span><span>{page}</span></button>)}
      </Grid>
      <Token id='spinner' />
    </Grid>
  );
} 