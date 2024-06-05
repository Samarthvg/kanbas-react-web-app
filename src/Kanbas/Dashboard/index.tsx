import "./index.css";
function Dashboard() {
  return (
    <div className="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
       
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img className="wd-card-img object-fit-cover" src="/images/reactjs.jpg" alt="img not found"  />
            <div className="card-body">
              <a className="wd-dashboard-course-link truncate"
                href="#/Kanbas/Courses/1234/Home" style={{textDecoration: "none"}}>
                <span   style={{ color: "navy", fontWeight: "bold" }}>CS1234 React JS</span> <br />
                <span className="text-muted">Summer'24 | 2024 | Section 2</span>
              </a>
              
              <p className="wd-dashboard-course-title card-text">
                Full Stack software developer
              </p>
              
              <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> GO  </a>
            </div>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img className="wd-card-img object-fit-cover" src="/images/java.jpg" alt="img not found" />
            <div className="card-body">
            <a className="wd-dashboard-course-link truncate"
                href="#/Kanbas/Courses/1234/Home" style={{textDecoration: "none"}}>
                <span   style={{ color: "navy", fontWeight: "bold" }}> CS5010 Programming Design Paradigm</span> <br />
                <span className="text-muted">Spring'24 | 2024 | Section 1</span>
              </a>
         
              <p className="wd-dashboard-course-title card-text">
              Systems Architect
              </p>
              <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
            </div>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img className="wd-card-img" src="/images/cloud.jpg" alt="img not found"/>
            <div className="card-body">
            <a className="wd-dashboard-course-link truncate"
                href="#/Kanbas/Courses/1234/Home" style={{textDecoration: "none"}}>
                <span   style={{ color: "navy", fontWeight: "bold" }}>  CS6120 Cloud Computing</span> <br />
                <span className="text-muted">Spring'24 | 2024 | Section 1</span>
              </a>
             
              <p className="wd-dashboard-course-title card-text">
              Cloud Architect
              </p>
              <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
            </div>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img className="wd-card-img" src="/images/python.jpg" alt="img not found" />
            <div className="card-body">
            <a className="wd-dashboard-course-link truncate"
                href="#/Kanbas/Courses/1234/Home" style={{textDecoration: "none"}}>
                <span   style={{ color: "navy", fontWeight: "bold" }}>  CS8111 Python Programming</span> <br />
                <span className="text-muted">Spring'24 | 2024 | Section 1</span>
              </a>

              <p className="wd-dashboard-course-title card-text">
              Software Developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
            </div>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img className="wd-card-img" src="/images/dbms.jpg" alt="img not found" />
            <div className="card-body">
            <a className="wd-dashboard-course-link truncate"
                href="#/Kanbas/Courses/1234/Home" style={{textDecoration: "none"}}>
                <span   style={{ color: "navy", fontWeight: "bold" }}> CS5200 Database Management System</span> <br />
                <span className="text-muted">Spring'24 | 2024 | Section 1</span>
              </a>
             
              <p className="wd-dashboard-course-title card-text">
              Data Administrator
              </p>
              <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
            </div>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img className="wd-card-img" src="/images/ml.jpg" alt="img not found"/>
            <div className="card-body">
            <a className="wd-dashboard-course-link truncate"
                href="#/Kanbas/Courses/1234/Home" style={{textDecoration: "none"}}>
                <span   style={{ color: "navy", fontWeight: "bold" }}>  CS8011 Machine Learning</span> <br />
                <span className="text-muted">Spring'24 | 2024 | Section 1</span>
              </a>
          
              <p className="wd-dashboard-course-title card-text">
                ML Engineer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
            </div>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img className="wd-card-img" src="/images/ds.jpg" alt="img not found"/>
            <div className="card-body">
            <a className="wd-dashboard-course-link truncate"
                href="#/Kanbas/Courses/1234/Home" style={{textDecoration: "none"}}>
                <span   style={{ color: "navy", fontWeight: "bold" }}>  CS8310 Data Science</span> <br />
                <span className="text-muted">Spring'24 | 2024 | Section 1</span>
              </a>
            
              <p className="wd-dashboard-course-title card-text">
              Data Scientist
              </p>
              <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
            </div>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img className="wd-card-img" src="/images/toc.jpg" alt="img not found"/>
            <div className="card-body">
            <a className="wd-dashboard-course-link truncate"
                href="#/Kanbas/Courses/1234/Home" style={{textDecoration: "none"}}>
                <span   style={{ color: "navy", fontWeight: "bold" }}> CS8110 Theory of Computation</span> <br />
                <span className="text-muted">Spring'24 | 2024 | Section 1</span>
              </a>
           
              <p className="wd-dashboard-course-title card-text">
                GOD
              </p>
              <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
            </div>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img className="wd-card-img" src="/images/math.jpg" alt="img not found" />
            <div className="card-body">
            <a className="wd-dashboard-course-link truncate"
                href="#/Kanbas/Courses/1234/Home" style={{textDecoration: "none"}}>
                <span   style={{ color: "navy", fontWeight: "bold" }}> CS8010 Descrete Math</span> <br />
                <span className="text-muted">Spring'24 | 2024 | Section 1</span>
              </a>
            
              <p className="wd-dashboard-course-title card-text">
                Computer Scientist
              </p>
              <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
            </div>
          </div>
        </div>


    

        </div>
      </div>
    </div>
  );
}
export default Dashboard;