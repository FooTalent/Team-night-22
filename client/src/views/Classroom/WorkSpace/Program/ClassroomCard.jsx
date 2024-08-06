import React, { useEffect, useState } from 'react';
import { LEVELS_MAP } from '../../../../utils/valueLists';
import IconSvg from '../../../../utils/SvgWrapper';
import { Link } from 'react-router-dom';
import { useAppStore } from '../../../../store/useAppStore';
import { fetchResourceById } from '../../../../services/resources.services';

const ClassroomCard = ({ classroom, buttonFunction, deleteButton }) => {
  const { level, title, students, daytime, duration_hours, _id } = classroom;
  const [resourcesClass, setResourcesClass] = useState([])
  const { user } = useAppStore();

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
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className='flex'>
          <span className="text-white px-2 py-1 rounded mr-2" style={{backgroundColor: LEVELS_MAP[level]}}>{level}</span>
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <button
          onClick={() => deleteButton(_id)} 
          className='bg-YellowDeselect font-extrabold  hover:bg-Yellow text-card border-2 border-Yellow rounded-lg py-3 px-4 ease-linear duration-150'>
          Eliminar
        </button>
      </div>
      <div className="text-gray-700 mb-2">
        <strong>Fecha:</strong> {daytime ? new Date(daytime).toLocaleString() : null }
      </div>
      <div className="text-gray-700">
        <strong>Duración:</strong> {duration_hours} horas
      </div>
      <div className='flex flex-row justify-between'>
        {resourcesClass?.length > 0 && (
          <div className="my-4">
            <p className="text-lg font-medium">Recursos:</p>
            <ul className="list-disc pl-5 text-gray-700">
              {resourcesClass.map((resource, index) => (
                <div key={index} className='flex h-5'>
                  <IconSvg category={resource.type}/>
                  <Link to={resource.url}>{resource.title}</Link>
                </div>
              ))}
            </ul>
          </div>
        )}
        <button className="bg-blue-500 text-white px-2 py-1 rounded-md w-1/6" onClick={() => buttonFunction(_id)}>Modificar Clase</button>
      </div>  
    </div>
  );
};

export default ClassroomCard;
