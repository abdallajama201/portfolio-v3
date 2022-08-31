import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';  
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import skyline from '../../img/skyline.jpg';
import bootstrap from '../../icons/bootstrap.png'
import css3 from '../../icons/css3.png'
import express from '../../icons/express.png'
import graphql from '../../icons/graphql.png'
import handlebars from '../../icons/handlebars.png'
import html5 from '../../icons/html5.png'
import javascript from '../../icons/javascript.png'
import jquery from '../../icons/jquery.png'
import mongodb from '../../icons/mongodb.png'
import mysql from '../../icons/mysql.png'
import nodejs from '../../icons/node-js.png'
import react from '../../icons/react.png'
import sass from '../../icons/sass.png'
import sequelize from '../../icons/sequelize.png'
import '../../styles/Home.scss'
 
export default function Home() {
  const keySkillAreas = ['Backend','Frontend','Data','Methodology','Collaboration',];

  const keySkills = [
    [javascript,jquery,nodejs,express,],
    [css3,html5,bootstrap,sass,react,handlebars,],
    [mysql,sequelize,graphql,mongodb,],
  ]

  const keySkillName = [
    ['Javascript ES6+','Jquery','Node.js','Express.js',],
    ['CSS3','HTML5','Bootstrap','Sass','React.js','Handlebars.js',],
    ['MySQL','Sequelize','Graphql','MongoDB',],
  ]
 
  const aboutMe = [
    `I am a full stack web developer with experience in accounting and customer service. I have obtained a certificate from University of Toronto full stack web developer course and a bachelor of commerce degree from the same institution. With self taught coding skills and expanded skills and knowledge in JavaScript ES6+, CSS3, HTML5, React, MongoDB, Bootstrap, JQuery, Node.js, Express.js, handlebars.js, Git, Heroku, MySQL and RESTful APIs. My previous experience has provided me with strong organization, time management and oral/written communication skills, as well as attention to detail. In addition to the ability to self start, research solutions and work independently.`,
 
    `I have built full stack applications using the MERN stack as well as alternatives tech stacks that include MySQL, Express and handlebars. I have developed backend and frontend applications that leveraged third party API and test driven development using Jest. I have worked in teams employing agile methodologies as well.`,
 
    `I am continuously learning and I'm excited to develop more skills with useful tools and technologies in order to continue my journey building on the web.`
  ]
 
  return (
    <Grid id='grid-home' container item direction="column" justifyContent="center">
      <Grid id='grid-home' container item xs={2} sm={4} md={20} direction="row" justifyContent="center">
        <Card id='poster'>
          <CardContent>
              <img src={skyline} id='skyline' alt='skyline'></img>
          </CardContent>
        </Card>
        <Card id='poster1'>
          <CardContent>
              <Typography variant='h3' sx={{ fontWeight: 'bold', textAlign: 'center' }}>Hi there 👋</Typography>
              <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Im Abdalla, a Full Stack Developer.</Typography>
              <br></br>
              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>🌎 Based out of Toronto, ON</Typography>
              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>👨‍🚀 Backend intergalactic paladin</Typography>
              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>🧙 Frontend apprentice mage</Typography>
              <a href="mailto:abdallajama@gmail.com"><Typography id='links' variant='h6' sx={{ fontWeight: 'bold' }}>📮 abdallajama@gmail.com</Typography></a>
              <a href="https://www.linkedin.com/in/abdalla-jama/"><Typography id='links' variant='h6' sx={{ fontWeight: 'bold' }}><LinkedInIcon></LinkedInIcon>  LinkedIn</Typography></a>
              <a href="https://github.com/abdallajama201"><Typography id='links' variant='h6' sx={{ fontWeight: 'bold' }}><GitHubIcon></GitHubIcon>  Github</Typography></a>
              <a href="https://drive.google.com/file/d/1zjCy_Q8ztUBDELvTKex_P9m_AxsVOMet/view?usp=sharing"><Typography id='links' variant='h6' sx={{ fontWeight: 'bold' }}><DescriptionIcon></DescriptionIcon>  Resume</Typography></a>
          </CardContent>
        </Card>
      </Grid>
      <Grid id='grid-home' container item xs={2} sm={4} md={20} direction="row" justifyContent="center">
        <Card id='key-skills'>
          <CardContent>
            <Typography variant='h4' sx={{ fontWeight: 'bold', textAlign: 'center' }}>Key Skill Sets</Typography>
            {keySkills.map((skill, index) => 
              <Grid key={index} container item xs={2} sm={4} md={20} direction="row" justifyContent="left">
                <Typography variant='h6' id='section'>{keySkillAreas[index]}: </Typography>
                {skill.map((icon, index1) =>
                  <Tooltip key={index1} title={(keySkillName[index])[index1]}>
                    <img src={icon} id='icon' alt=''></img>
                  </Tooltip>
                )}
              </Grid>
            )}
          </CardContent>
        </Card>
      </Grid>
      <Grid id='grid-home' container item xs={2} sm={4} md={20} direction="row" justifyContent="center">
        <Card id='about-me'>
          <CardContent>
            <Typography variant='h4' sx={{ fontWeight: 'bold', textAlign: 'center' }}>A little more about me...</Typography>
              <Typography variant='h6'>{aboutMe[0]}</Typography><br></br>
              <Typography variant='h6'>{aboutMe[1]}</Typography><br></br>
              <Typography variant='h6'>{aboutMe[2]}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
