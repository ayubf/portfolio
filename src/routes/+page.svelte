<style>

    body {
        max-width: max-content;
        margin: auto;
    }

    @font-face {
        font-family: "CMUSerifRoman";
        src: url("../fonts/cmunrm.woff") format("woff");
    }

    .container {
        font-family: "CMUSerifRoman";
        width: 50vw;
        height: 100%;
        padding: 70px 0;
        display: flex;
        flex-direction: column;
    }

    a:visited {
        color: blue;
    }

    a:hover {
        color: rgb(98, 98, 240);
    }

    @media screen and (max-width: 768px) {
        .container {
            width: 80vw;
        }
    }

    .h1 {
        font-size: 50px;
    }

    .h2 {
        font-size: 30px;
    }

</style>


<body>

    <div class="container">
        <div>
            <div class="h1">Ayub Farah</div>
            <hr>
        </div>
        <div>
            <p class="h2">I. About</p>
            <p>
                &emsp; My name is Ayub Farah. I'm currently pursuing a B.S.  in Computer Science at The University of Houston. I have an interest in Computer Science and Mathematics, specifically these topics:
            </p>
            <ul>
                <li>Graph Theory</li>
                <li>Machine Learning</li>
                <li>Linear Algebra</li>
                <li>Data Science</li>
                <li>Number Theory</li>
            </ul>
            <p>
                &emsp; I am passionate about bridging theoretical knowledge with practical applications and am currently seeking opportunities in research and engineering roles. 
        </div>
        <div>
            <p class="h2">II. Experience</p>
            <div>
                <div>
                    <p>Amazon Web Services | SDE Intern</p>
                    <p><i>June 2023 - August 2023</i></p>
                    <hr>
                </div>
                <ul>
                    <li>Developed a resource viewer application utilizing AWS Lambda & DynamoDB, enhancing accessibility and efficiency for the engineering team's resource management. </li>
                    <li>Implemented role-based access control using AWS IAM, ensuring secure and streamlined access for team members within the resource viewer application. </li>
                    <li>Enhanced the team's ticket management application with React and Python, integrating crucial edit functionalities to streamline the ticketing process and improve team productivity.</li>
                </ul>
            </div>
            <div>
                <div>
                    <p>Google | Computer Science Summer Institute (CSSI) Scholar</p>
                    <p><i>July 2022 - August 2022</i></p>
                    <hr>
                </div>
                <ul>
                    <li>Participated in a 4-week intensive computer science summer program for high-achieving students</li>
                    <li>Completed an introductory project-based HTML/CSS and JavaScript curriculum taught by Google engineers</li>
                    <li>Attended product design, resume development, and software engineering interview workshops </li>
                    <li>Delivered a collaborative final project presentation that included a live demonstration to Google employees and community leaders</li>
                </ul>
            </div>
        </div>
        <div>
            <p class="h2">III. Projects</p>
            <ul>
                <li><a href="https://github.com/ayubf/turms">Turms</a>: An instant messaging service using the WebSocket API.</li>
                <li><a href="https://github.com/ayubf/wink">Wink</a>: Full-stack social media webapp.</li>
            </ul>
            <p>More on my <a href="https://github.com/ayubf">Github profile.</a></p>
        </div>
        <div>
            <p class="h2">IV. Links</p>
            <ul>
                    <li><a href="https://linkedin.com/in/ayubfarah">Linkedin</a></li>
                    <li><a href="mailto:ayubaf04@gmail.com">Email</a> </li>
            </ul>
        </div>
    </div>

</body>