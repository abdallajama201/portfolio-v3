import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';  
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
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
 
const projectNames = ['Hungry Time', 'Pet Playdate Finder', 'Tech Blog', 'Weather Dashboard', 'ECommerce Backend', 'Social Network API', 'README Generator'];
const images = [image1, image2, image3, image4, image5, image6, image7];

const description = [
  [
    'Backend: Express.js, MongoDB, GraphQL',
    'Frontend: React.js',
  ],
  [
    'Backend: Express.js, MySQL, Node.js',
    'Frontend: Handlebars.js, Bootstrap',
  ],
  [
    'Backend: Express.js, MySQL, Node.js',
    'Frontend: Handlebars.js, Bootstrap',
  ],
  [
    'Backend: Third-party API provided by OpenWeather',
    'Frontend: Bootstrap and local storage on browser for persistent data',
  ],
  [
    'Backend: Express.js, MySQL, Node.js',
    '',
  ],
  [
    'Backend: Express.js, MongoDB, Mongoose ODM',
    '',
  ],
  [
    'Backend: Node.js',
    '',
  ],
];
const outline = [
  'The internet provides a great opportunity for restaurants to grow. This web app provides an online ordering system for any restaurant. End users can sign up, add items to their cart, checkout and pay through a Stripe integration as well as save their previous orders.',
  'Some pets suffer when in social isolation. This web app allows a user to find playdates for their pets. A user can find or schedule playdates for their pets.',
  'A CMS style blog site similar to wordpress. Users can sign up, add blog posts, view blog posts of others and add comments to any post. A simple way for writers to publish online, where content is hosted in a MySQL database on AWS via Heroku.',
  'A Weather Dashboard that employs third party APIs to provide current weather as well as future forecasts up to five days out. A lightweight implementation using only client side javascript.',
  'All E-commerce sites need a backend that connects to a database in order to store data. This backend app provides a set of Restful API endpoints that can add, modify or delete product, categories and product tags.',
  'Social network apps need a way to deal with large amounts of unstructured data. This backend app provides API endpoints that can provide CRUD operations for a non-relational database (MongoDB). The main benefit of the app is scalability.',
  'This app is a command line application that generates a README.md file from information provided by the user. This project provides a quick way to take in all the information needed for a README and puts it into markdown format and creates a file.',
]
const github = [
  'https://github.com/Wingky1208/Menu-App',
  'https://github.com/abdallajama201/pet-playdate',
  'https://github.com/abdallajama201/Tech-Blog',
  'https://github.com/abdallajama201/Weather-Dashboard',
  'https://github.com/abdallajama201/E-commerce-Back-End',
  'https://github.com/abdallajama201/Social-Network-API',
  'https://github.com/abdallajama201/Professional-README-Generator',
]
const deployed = [
  'https://hungrier-time.herokuapp.com/',
  'https://pet-playdate-app.herokuapp.com/',
  'https://tech-blog-abdalla.herokuapp.com/',
  'https://abdallajama201.github.io/Weather-Dashboard/',
  'https://github.com/abdallajama201/E-commerce-Back-End',
  'https://github.com/abdallajama201/Social-Network-API',
  'https://github.com/abdallajama201/Professional-README-Generator',
]
 
const githubTip = [
  'github.com/Wingky1208/Menu-App',
  'github.com/abdallajama201/pet-playdate',
  'github.com/abdallajama201/Tech-Blog',
  'github.com/abdallajama201/Weather-Dashboard',
  'github.com/abdallajama201/E-commerce-Back-End',
  'github.com/abdallajama201/Social-Network-API',
  'github.com/abdallajama201/Professional-README-Generator',
]
const deployedTip = [
  'hungrier-time.herokuapp.com/',
  'pet-playdate-app.herokuapp.com/',
  'tech-blog-abdalla.herokuapp.com/',
  'abdallajama201.github.io/Weather-Dashboard/',
  'github.com/abdallajama201/E-commerce-Back-End',
  'github.com/abdallajama201/Social-Network-API',
  'github.com/abdallajama201/Professional-README-Generator',
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
            <CardContent>
              <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 'bold' }}>{projectNames[index]}</Typography>
              <Typography variant='body1' sx={{ textAlign: 'justified' }}>{outline[index]}</Typography>
            </CardContent>
            <CardMedia id='card-image' component="img" height="300" image={images[index]} alt={name}></CardMedia>
            <CardContent>
              <Typography variant='body1'>{(description[index])[0]}</Typography>
              <Typography variant='body1'>{(description[index])[1]}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Tooltip title={githubTip[index]}>
                <a href={github[index]} target="_blank"><GitHubIcon id='link-icon'></GitHubIcon></a>
              </Tooltip>
              <Tooltip title={deployedTip[index]}>
                <a href={deployed[index]} target="_blank"><LaunchIcon id='link-icon'></LaunchIcon></a>
              </Tooltip>
            </CardActions>
          </Card>
        )}
      </Grid>
    </Grid>
  );
}
