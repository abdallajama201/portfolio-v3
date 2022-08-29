import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';  
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import image1 from '../../img/hungry-time.png';
import image2 from '../../img/pet-playdate.png';
import image3 from '../../img/tech-blog.png';
import image4 from '../../img/weather-dashboard.png';
import image5 from '../../img/coding-photo-1.jpg';
import image6 from '../../img/coding-photo-2.jpg';
import image7 from '../../img/coding-photo-3.jpg';
import '../../styles/Projects.scss'
 
let projectNames = ['Hungry Time', 'Pet Playdate Finder', 'Tech Blog', 'Weather Dashboard', 'ECommerce Backend', 'Social Network API', 'README Generator'];
let images = [image1, image2, image3, image4, image5, image6, image7];
let description = [
  [
    'A menu app platform.',
    'Backend: Express.js, MongoDB, GraphQL',
    'Frontend: React.js',
  ],
  [
    'An app for setting up and tracking playdates for your pet.',
    'Backend: Express.js, MySQL, Node.js',
    'Frontend: Handlebars.js, Bootstrap',
  ],
  [
    'A CMS style blog site.',
    'Backend: Express.js, MySQL, Node.js',
    'Frontend: Handlebars.js, Bootstrap',
  ],
  [
    'A simple weather app that provides current weather and future forecasts globally.',
    'Backend: Third-party API provided by OpenWeather',
    'Frontend: Bootstrap and local storage on browser for persistent data',
  ],
  [
    'A back end set of APIs for an e-commerce site powered by Express.js and MySQL.',
    'The application can handle CRUD operations for organizing products, categories and tags.',
    'Backend: Express.js, MySQL, Node.js',
  ],
  [
    'An API for running CRUD operations on social network data.',
    'Backend: Express.js, MongoDB, Mongoose ODM',
    '',
  ],
  [
    'A command line program that generates a custom README.md file.',
    'Backend: Node.js',
    '',
  ],
];
let github = [
  'https://github.com/Wingky1208/Menu-App',
  'https://github.com/abdallajama201/pet-playdate',
  'https://github.com/abdallajama201/Tech-Blog',
  'https://github.com/abdallajama201/Weather-Dashboard',
  'https://github.com/abdallajama201/E-commerce-Back-End',
  'https://github.com/abdallajama201/Social-Network-API',
  'https://github.com/abdallajama201/Professional-README-Generator',
]
let deployed = [
  'https://hungrier-time.herokuapp.com/',
  'https://pet-playdate-app.herokuapp.com/',
  'https://tech-blog-abdalla.herokuapp.com/',
  'https://abdallajama201.github.io/Weather-Dashboard/',
  'https://github.com/abdallajama201/E-commerce-Back-End',
  'https://github.com/abdallajama201/Social-Network-API',
  'https://github.com/abdallajama201/Professional-README-Generator',
]
 
export default function Projects() {
  return (
    <Grid id='grid-project' container item direction="column" justifyContent="center">
      <Card id='project-title'>
        <CardContent>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Checkout some of my work 🚧</Typography>
        </CardContent>
      </Card>
      <Grid id='grid-home' container item xs={2} sm={4} md={20} direction="row" justifyContent="center">
        {projectNames.map((name, index) =>
          <Card key={index} id='projects'>
            <CardHeader title={projectNames[index]}></CardHeader>
            <CardMedia component="img" height="300" image={images[index]} alt={name}></CardMedia>
            <CardContent>
              <Typography variant='body1'>{(description[index])[0]}</Typography>
              <Typography variant='body1'>{(description[index])[1]}</Typography>
              <Typography variant='body1'>{(description[index])[2]}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <a href={github[index]} target="_blank"><GitHubIcon></GitHubIcon></a>
              <a href={deployed[index]} target="_blank"><LaunchIcon></LaunchIcon></a>
            </CardActions>
          </Card>
        )}
      </Grid>
    </Grid>
  );
}
