/* eslint-disable react/jsx-no-target-blank */

import Banner from '../static/images/banner.png';

const HomePage = () => {

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


    let projData = [
        {
            "title": "Wink",
            "miniText": "Full-stack social web app",
            "summary": "Written in TypeScript, using React & Express",
            "technologies": "typescript react express mongodb".split(' ')
        },
        {
            "title": "Qwill",
            "miniText": "Social networking site frontend",
            "summary": "Written in JavaScript, using React",
            "technologies": "javascript react".split(' ')
        },
        {
            "title": "2Do",
            "miniText": "To-do List Maker",
            "summary": "Written in Javascript, using Electron",
            "technologies": "javascript electron".split(' ')
            
        },

    ]
  

    return (
      <div className='indexDiv'>
        <div className="wrapper">
            <div> 
                <div>
                    <h1 style={{display: "inline-block"}}id='title'>Hi, I'm Ayub! </h1> 
                </div>
                <h3 id='devDiv' >  I'm a developer </h3>
            </div>

           {projData.length !== 0 &&  <div>
                <h2>Check out some of my projects...</h2>
                <div className="projectDiv">
                    {
                        projData.map(({miniText, summary, title, technologies}) => {
                            return (
                                <div className="card" key={title}>
                                    <p> <b>{title}</b>: {miniText} </p>
                                    <p>
                                        {summary}
                                    </p>
                                    {(technologies as Array<string>).map((i: string) => {return tech[i as keyof Object]})} <br />
                                    <a href={`http://github.com/ayubf/${title.toLowerCase().replace(' ', '-')}`}>Learn more...</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>}

            <div>
                <h2>About Me</h2>
                <p>I'm a student at the University of Houston pursuing a Bachelors of Science in Computer Science. I started programming as a kid and fell in love with the process of creating new things and solving challenges along the way. I have a keen interest in solving problems with intuitive solutions.</p>
            </div>
            
            <div className='footerDiv'>
                <p>Designed and built by Ayub Farah, 2021</p>
                <p>Written in TypeScript with React</p>
                <div>
                    <a href="https://github.com/ayubf">Github</a> • <a href="https://www.linkedin.com/in/ayubfarah/">Linkedin</a> • <a href="https://dev.to/ayubf">DEV</a> • <a href="https://www.linkedin.com/in/ayubfarah/details/featured/1635545538737/single-media-viewer/?profileId=ACoAADattdcB-DnVRMNEAL8tsPIKBU4clqBZjio" target="_blank">Resume</a>
                </div>
                <img src={Banner} width={300} height={150} alt="banner" />
	        </div>

        </div>
      </div>
    );
}

export default HomePage

