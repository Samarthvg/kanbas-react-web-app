function Dashboard(){
    return(
        <div className="wd-dashboard">
                  <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />

      <div className="wd-dashboard-courses">
        <div className="wd-dashboard-course">
             <img src="/images/reactjs.jpg" alt="img not found" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>

        </div>
        <div className="wd-dashboard-course">
        <img src="/images/java.jpg" alt="img not found" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS5010 Programming Design Paradigm
            </a>
            <p className="wd-dashboard-course-title">
              Systems Architect
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
        <img src="/images/cloud.jpg" alt="img not found" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS6120 Cloud Computing
            </a>
            <p className="wd-dashboard-course-title">
              Cloud Architect
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
        <img src="/images/python.jpg"alt="img not found" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS8111 Python Programming
            </a>
            <p className="wd-dashboard-course-title">
              Software Developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
        <img src="/images/dbms.jpg" alt="img not found" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS5200 Database Management System
            </a>
            <p className="wd-dashboard-course-title">
              Data Administrator
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
        <img src="/images/ml.jpg" alt="img not found" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS8011 Machine Learning
            </a>
            <p className="wd-dashboard-course-title">
              ML Engineer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
        <img src="/images/ds.jpg" alt="img not found" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS8310 Data Science
            </a>
            <p className="wd-dashboard-course-title">
                Data Scientist
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
        <img src="/images/toc.jpg" alt="img not found" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS8110 Theory of Computation
            </a>
            <p className="wd-dashboard- course-title">
              GOD 
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
        <img src="/images/math.jpg" alt="img not found" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS8010 Descrete Math
            </a>
            <p className="wd-dashboard-course-title">
              Computer Scientist
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>
      </div>
        </div>
    );
}
export default Dashboard;