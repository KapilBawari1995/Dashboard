import React from 'react';


const TaskList = ({ tasks }) => {
    const titleCharLimit = 4; 
    const descriptionCharLimit = 15; 

   
    const truncateText = (text, limit) => {
        return text.length > limit ? text.substring(0, limit) + '...' : text;
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mt-5">
                <h5>Tasks</h5>
               <a href='/#'> see all</a>
            </div>
            <div className="accordion mt-3 d-grid g-2" id="accordionExample">
                
                    {tasks.map((task, index) => (
                        <div key={index} className="accordion-item border-0">
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className={`accordion-button p-0 custom-font ${index !== 0 ? 'collapsed' : ''}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${index}`}
                                    aria-expanded={index === 0}
                                    aria-controls={`collapse${index}`}
                                >
                                    <div className='custom-font'>
                                        <strong>{truncateText(task.title, titleCharLimit)}</strong>
                                        <p className="mb-0">{truncateText(task.description, descriptionCharLimit)}</p>
                                    </div>
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body p-0 py-3">
                                    <p>{task.details}</p>
                                </div>
                            </div>
                        </div>
                    ))}
               
            </div>
        </div>
    );
};

export default TaskList;
