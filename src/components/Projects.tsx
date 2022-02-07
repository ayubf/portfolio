import {useState, useEffect} from 'react';

const Projects = () => {

    const tech = {
        "flask" : <img alt="flask" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" height="48" width="48"/>,
        "react" : <img alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="48" width="48" />,
        "javascript": <img alt="javaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="48" width="48"/>,
        "typescript": <img alt="typescript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="48" width="48" />,
        "electron": <img alt="electron" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" height="48" width="48"/>,
        "express": <img alt="express" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="48" width="48"/>,
        "python": <img alt="python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="48" width="48"/>,
        "ruby": <img alt="ruby" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" height="48" width="48"/>,
        "rails": <img alt="rails" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg" height="48" width="48"/>,
        "mongodb": <img alt="mongodb" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="48" width="48" />,
        "postgres": <img alt="posgtres" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="48" width="48"/>,
        "bootstrap": <img alt="bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" height="48" width="48"/>

    }


    let [projData, setProjData] = useState([]);

    useEffect(() => {
        const loadProjects = async () => {
            await fetch('https://ayubfarah.herokuapp.com/projects/', {
                method: "GET",
                headers: {
                    'Content-type': "application/js"
                },

            })
            .then(res => res.json())
            .then(data => setProjData(data))
        }

        loadProjects()

    }, [])

    return (
        <div>
            <h1>Projects</h1>
            <div className="projectDiv">
                    {
                        projData.map(({miniText, summary, title, titleURL, technologies}) => {
                            return (
                                <div className="card" key={title}>
                                    {/* <img className='projImage' src={`https://ayubfarah.herokuapp.com/resources/${titleURL}.png`} alt={titleURL} height="200px"/> */}
                                    {(technologies as Array<string>).map((i: string) => {return tech[i as keyof Object]})}
                                    <p> <b>{title}</b>: {miniText} </p>
                                    <p>
                                        {summary}
                                    </p>
                                    <a href={`http://github.com/ayubf/${titleURL}`}>Learn more...</a>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
}

export default Projects