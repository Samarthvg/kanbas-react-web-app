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
                href="#/Kanbas/Courses/1234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title card-text">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"  className="btn btn-primary"> Go </a>
            </div>
          </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img className="wd-card-img object-fit-cover" src="/images/java.jpg" alt="img not found" />
            <div className="card-body">
              <a className="wd-dashboard-course-link truncate"
                href="#/Kanbas/Courses/1234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS5010 Programming Design Paradigm
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
                href="#/Kanbas/Courses/1234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS6120 Cloud Computing
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
                href="#/Kanbas/Courses/1234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS8111 Python Programming
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
                href="#/Kanbas/Courses/1234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS5200 Database Management System
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
                href="#/Kanbas/Courses/1234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS8011 Machine Learning
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
                href="#/Kanbas/Courses/1234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS8310 Data Science
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
                href="#/Kanbas/Courses/1234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS8110 Theory of Computation
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
                href="#/Kanbas/Courses/1234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS8010 Descrete Math
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