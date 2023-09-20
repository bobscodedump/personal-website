import TravelonusCard from './TravelonusCard';
import ProjectConnectCard from './ProjectConnectCard';
import StudyPalsCard from './StudyPalsCard';
import FoodnotesCard from './FoodnotesCard';

function Projects() {
  return (
    <div id='projects' className='pt-48 flex flex-col'>
      <h1 className='self-center mb-10 font-libreBaskerville text-3xl text-blue-900'>My Projects</h1>
      <TravelonusCard />
      <ProjectConnectCard />
      <StudyPalsCard />
      <FoodnotesCard />
    </div>
  );
}

export default Projects;
