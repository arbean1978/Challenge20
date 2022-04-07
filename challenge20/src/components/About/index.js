import React from 'react';


function About() {

    return(
        <section className="container font-bold text-3xl">
            <h2 className="top-title font-bold text-base">Aaron Bean</h2>
            <hr></hr>
            <div className="flex">
                <img src='../assets/images/Me.jpg'  className="mb-5" id="avatar"  alt="Aaron Bean" />
                <div>
                    <p>
                    Hello! I am Aaron, a student of .Full-stack Web Development from Salt Lake City, Utah
                    attending coding bootcamp at The University of Utah . 
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