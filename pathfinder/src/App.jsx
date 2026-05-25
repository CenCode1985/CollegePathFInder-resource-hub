import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h1>PathFinder</h1>

        <div className="nav-links">
          <a href="#resources">Resources</a>
          <a href="#mission">Mission</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <p className="tagline">
            For young adults finding their next step
          </p>

          <h2>
            Find scholarships, resources, and career paths without feeling lost.
          </h2>

          <p className="hero-text">
            PathFinder helps students and young adults discover scholarships,
            trade routes, career prep, and support systems in one place.
          </p>

          <button className="main-btn">
            Explore Resources
          </button>
        </section>

        <section id="resources" className="resources">
          <h2>Starting Points</h2>

          <div className="card-grid">

            <div className="resource-card">
              <h3>Scholarships</h3>
              <p>
                Find funding opportunities and financial help.
              </p>
            </div>

            <div className="resource-card">
              <h3>College Support</h3>
              <p>
                FAFSA guidance, transfer help, and campus resources.
              </p>
            </div>

            <div className="resource-card">
              <h3>Trades Route</h3>
              <p>
                Explore electrical, HVAC, plumbing, and apprenticeships.
              </p>
            </div>

            <div className="resource-card">
              <h3>Career Prep</h3>
              <p>
                Resume help, LinkedIn setup, and interview prep.
              </p>
            </div>

          </div>
        </section>

        <section id="mission" className="mission">
          <h2>Mission</h2>

          <p>
            Some students are not lazy. They are overwhelmed.
            PathFinder exists to help young adults who do not know
            what questions to ask or where to begin.
          </p>
        </section>

        <section id="about" className="about">
          <h2>About</h2>

          <p>
            Built by Cencere Echols as a frontend project focused on
            accessibility, opportunity, and clear user experience.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;