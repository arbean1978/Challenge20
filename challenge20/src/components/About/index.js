import React from 'react';

function About() {

    return(
        <section className="container">
            <h2 class="top-title">Aaron Bean</h2>
            <hr></hr>
            <div className="d-flex">
                <img class="mb-5" id="avatar" src='C:\Users\arbea\Desktop\Challenge20\challenge20\src\assets\images\20048676-277843162_4-s1-v1.png' alt="Aaron Bean" />
                <div>
                    <p>
                    Hello! I am Aaron, a student of Full-stack Web Development from Salt Lake City, Utah
                    and a student of the coding bootcamp at The University of Utah . 
                    I love sports, weight-training, and spending time with family.
                    </p>
                    <p>
                    For more than 5 months, I've been developing my technical and non-technical skills 
                    working on Front and Back-end projects using HTML, CSS, React, JavaScript, 
                    Node, Mysql as well as other frameworks and languages to build real-world projects.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;