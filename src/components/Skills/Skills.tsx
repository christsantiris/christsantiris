import React from 'react';
import './Skills.scss';

const Skills: React.FC = () => (
  <div className='skills'>
  <div className='section-header' id='skills'>
    <h1>Technologies</h1>
    <div className='skills section-header' id='about'>
      <p><label className="bold-label">Javascript/Typescript:</label> Node.js, React, Angular, Nest.js, Vue.js</p>
      <p><label className="bold-label">Python:</label> Flask, Django</p>
      <p><label className="bold-label">C#:</label> .Net, .Net Core</p>
      <p><label className="bold-label">Databases:</label> MongoDb, Postgres, MSSQL, Neo4j</p>
      <p><label className="bold-label">DevOps:</label> Kubernetes, Docker, Linux, CICD</p>

      <div className='languages'>
        <ul className='skill-icons'>
          <li><i className="devicon-python-plain-wordmark colored"></i></li>
          <li><i className="devicon-javascript-plain"></i></li>
          <li><i className="devicon-typescript-plain colored"></i></li>
          <li><i className="devicon-nodejs-plain-wordmark colored"></i></li>
          <li><i className="devicon-csharp-line-wordmark colored"></i></li>         
          <li><i className="devicon-angularjs-plain colored"></i></li>
          <li><i className="devicon-react-original-wordmark colored"></i></li>   
        </ul>
      </div>
      <div className='languages'>
        <ul className='skill-icons'>  
          <li><i className="devicon-vuejs-line-wordmark"></i></li>  
          <li><i className="devicon-docker-plain-wordmark colored"></i></li>             
          <li><i className="devicon-go-plain"></i></li>
          <li><i className="devicon-dot-net-plain-wordmark colored"></i></li>
          <li><i className="devicon-mongodb-plain-wordmark colored"></i></li>
          <li><i className="devicon-postgresql-plain-wordmark colored"></i></li>
          <li><i className="devicon-linux-plain colored"></i></li>
        </ul>
      </div>
    </div>
  </div>
</div>
);

export default Skills;
