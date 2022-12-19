import React from "react";

function Resume() {

    return(
    <section class="mb-5">
        <h1 className="resume">My Resume</h1>
            <hr></hr>
            <div class="row justify-content-center" id="resume">
                <div class="mt-5 pl-5 pr-5">
                   Skilled in fullstack JavaScript Web Application development. Business professional fluent in Japanese.
                    <p class="mt-5">
                    <a href="https://www.linkedin.com/in/daniel-keller-43762171/"><img src="https://img.icons8.com/color/48/000000/linkedin-2.png" alt="My LinkedIn"/></a>
                    </p>
                    <p>
                    Download my full <a href="https://github.com/DBanfieldKeller/react-portfolio/raw/main/src/assets/Resume%20Daniel%20Banfield-Keller%2012-19-2022.pdf" class="link">resume</a>
                    <br></br>
                    </p>
                </div>
            </div>
    
            <div class="justify-content-center mt-5">
                <div >
                    <h2>front end experience</h2>
                    <p>HTML, CSS, Bootstrap, JavaScript, jQuery, React.js</p>
                </div>
        
                <div class="mt-5">
                    <h2>back end experience</h2>
                    <p>
                    Node.js, Express.js, SQL (mySQL), Sequelize, NoSQL (MongoDB, Mongoose), API's (third-party, RESTful, server-side), Templating (Handlebars)
                    </p>
                </div>
            </div>
    </section>
    );
    }
    
    export default Resume;