const Project = ({title,toggleTab,num,toggle,desc,link,ponits}) => {
    return (
        <div className="projects__content">
            <div>
                <i className="uil uil-folder-open project__icon"></i>
                <h3 className="project__title">
                    {title}
                </h3>
            </div>
            <span className="project__button" onClick={() => toggleTab(num)}>
                Read More{" "}
                <i className="uil uil-arrow-right project__button-icon"></i>
            </span>

            <div className={toggle === num ? "project__modal active-modal" : "project__modal"}>
                <div className="project__modal-content">
                    <i className="uil uil-times project__modal-close card__close" onClick={() => toggleTab(0)}></i>
                    <h3 className="project__modal-title">{title}</h3>
                    <p className="project__modal-description">
                        {desc}
                    </p>
                    <ul className="project__modal-services grid">
                        {link!==""?<li className="project__modal-service">
                            <i className="uil uil-code-branch project__modal-icon">
                            </i>
                            <a href={link} target="_blank" rel="noreferrer noopener" className="project__modal-info">
                                GitHub link
                            </a>
                        </li>:""}
                        {ponits.map((ele,id) =>(
                        <li className="project__modal-service" key={id}>
                            <i className="uil uil-check-circle project__modal-icon"></i>
                            <p className="project__modal-info">
                                {ele}
                            </p>
                        </li>
                        ))}
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Project
