import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import download from '../../icons/download.png'
import '../../styles/Resume.scss'

const headings = ['Professional Summary','Technical Skills', 'Projects', 'Professional Experience', 'Education']

const professionalSummary = [`Full stack web developer with experience in accounting and customer service. Proven leader leveraging exceptional interpersonal communication skills in order to effectively collaborate with team members to deliver results on time and within scope. Self-starter recognized for thoroughly researched solutions, strong organizational and attention to detail.`]

const technicalSkills = [
  `Languages: Javascript ES6+, CSS3, HTML5, SQL, NoSQL`,
  `Applications: MySQL, MongoDB, GraphQL, Bash, Git, GitHub, Insomnia`,
  `Tools: Node, Express, React, Handlebars, Jquery, Bootstrap`,
  `Cloud: Heroku, JawsDB(MySQL cloud integration), MongoDB Atlas`,
]

const projects = [
  `Hungry Time | Link: https://bit.ly/3vVfpaz | Github: https://bit.ly/3vVabf8`,
  `● A menu app platform that allows viewing items, ordering and paying for a meal with a Stripe integration.`,
  `● Stack: Backend: Express.js, MongoDB, GraphQL | Frontend: React.js`,
  `Tech Blog | Link: https://bit.ly/3vVc37E | Github: https://bit.ly/3zPEkNY`,
  `● A CMS style blog site that allows creating accounts, posting and commenting on posts.`,
  `● Stack: Backend: Express.js, MySQL, Node.js | Frontend: Handlebars.js, Bootstrap`,
  `Pet Play Date | Link: https://bit.ly/3Pd8zEo | Github: https://bit.ly/3BWujRL`,
  `● An app for setting up and tracking playdates for your pet.`,
  `● Stack: Backend: Express.js, MySQL, Node.js | Frontend: Handlebars.js, Bootstrap`,
]

const professionalExp = [
  `Dixon Accounting SVC 2019 - 2022`,
  `Tax Accountant; Toronto ,ON`,
  `● Worked in a small team that managed over 400 individual clients and organizations.`,
  `● Prepared a variety of tax returns including personal and HST returns.`,
  `● Compiled necessary facts, analyzed options and prepared documentation for client use.`,
  `● Corresponded and engaged with various tax authorities.`,
  `Canadian Linen and Uniform Services 2016 - 2018`,
  `Customer Service Rep; Toronto, ON`,
  `● Contributed to a team that won two quarterly sales contests.`,
  `● Delivered first class customer experience through answering questions, troubleshooting issues, and
  providing timely information in response to concerns and requests.`,
  `● Educated customers on current product features, new service offerings and alternative solutions in
  order to maximize value for clients.`,
  `Diversified Transportation 2011 - 2016`,
  `Transit Operator; Fort McMurray, AB`,
  `● Recognized by management for having a superior safety record.`,
  `● Performed pre and post trip inspections and maintained a safe and operational vehicle.`,
  `● Navigated along established routes, while providing excellent customer service.`,
]

const education = [
  `Full Stack Web Development Certificate - University of Toronto; Toronto, ON | 2022`,
  `Bachelor of Commerce in BComm: Finance - University of Toronto; Toronto, ON`,
]

const sections = [professionalSummary, technicalSkills, projects, professionalExp, education]
 
export default function Resume() {
  return (
    <Grid id='grid-resume' container item xs={2} sm={4} md={20} direction="column" justifyContent="center">
      <a href='https://drive.google.com/file/d/1zjCy_Q8ztUBDELvTKex_P9m_AxsVOMet/view?usp=sharing' target="_blank">
        <Tooltip title='Link to pdf resume'>
          <img src={download} id='download' alt='download link'></img>
        </Tooltip>
      </a>
      {sections.map((section, index1) =>
        <Card key={index1} id='resume-section'>
          <CardContent>
            <Typography variant='h5'>{headings[index1]}</Typography>
            {section.map((point, index2) =>
              <Typography key={index2}>{point}</Typography>
            )}
          </CardContent>
        </Card>
      )}
    </Grid>
  );
}
