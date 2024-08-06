import React, { useEffect, useState } from 'react';
import { LEVELS_MAP } from '../../../../utils/valueLists';
import IconImage from '../../../../utils/IconImage';
import { Link } from 'react-router-dom';
import { useAppStore } from '../../../../store/useAppStore';
import { fetchResourceById } from '../../../../services/resources.services';
import EditIcon from '@mui/icons-material/Edit';
import CalendarIcon from '/Calendario.svg'
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ClassroomCard = ({ classroom, buttonFunction }) => {
  const { level, title, students, daytime, duration_hours, _id } = classroom;
  const [resourcesClass, setResourcesClass] = useState([])
  const [openResources, setOpenResources] = useState(true)
  const { user } = useAppStore();

  console.log(classroom)

  useEffect(() => {
    const fetchSelectedResources = async () => {
      if (classroom.resources.length > 0) {
        try {
          const fetchedResources = await Promise.all(
            classroom.resources.map((id) => fetchResourceById(user.token, id))
          );
          setResourcesClass(fetchedResources.map((res) => res.data));
        } catch (error) {
          console.error('Error fetching selected resources:', error);
        }
      }
    };

    fetchSelectedResources();
  }, [classroom]);

  return (
    <div className="flex flex-col p-4 gap-4 rounded-xl shadow-cardContainer text-card">
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-6 text-lg'>
          <span className="text-white py-2 px-4 rounded-lg font-medium" style={{ backgroundColor: LEVELS_MAP[level] }}>{level}</span>
          <h2 className="font-bold">{title}</h2>
        </div>

        <button
          className={`flex items-center gap-2 bg-Yellow hover:bg-card font-extrabold text-card hover:text-Yellow border-2 border-Yellow hover:border-card rounded-lg py-2 px-3 ease-linear duration-150`}
          onClick={() => buttonFunction(_id)}
        >
          <EditIcon />Editar
        </button>
      </div>

      <div className='flex flex-col gap-2'>
        <p className='flex gap-2'><img src={CalendarIcon} /> {daytime ? new Date(daytime).toLocaleString() : null}</p>
        <p className='flex gap-2'><WatchLaterIcon />{duration_hours} horas</p>
      </div>

      <span className='border-t border-Grey'></span>

      <div className='flex items-center gap-6 text-sm'>
        <button
          onClick={() => setOpenResources(!openResources)}
          className={`self-start ease-linear duration-150 ${openResources ? '-rotate-90' : ''}`}
        >
          <ExpandMoreIcon />
        </button>

        <div>
          {
            openResources ? (
              <span className='block'>Recursos de la clase</span>
            ) : (
              resourcesClass?.length > 0 ? (
                <div className="flex flex-col gap-2">
                  {resourcesClass.map((resource, index) => (
                    <div key={index} className='flex items-center truncate'>
                      <IconImage category={resource.type} className={"fill-current"} />
                      <Link to={resource.url}>{resource.title}</Link>
                    </div>
                  ))}
                </div>
              ) : (
                <span className='block'>Sin recursos</span>
              )
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ClassroomCard;
