import "./App.css";
import ResourceCard from "./components/ResourceCard";
import { resources } from "./data/resources";

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
          <p className="tagline">For young adults finding their next step</p>

          <h2>
            Find scholarships, resources, and career paths without feeling lost.
          </h2>

          <p className="hero-text">
            PathFinder helps students and young adults discover scholarships,
            trade routes, career prep, and support systems in one place.
          </p>

          <a href="#resources" className="main-btn">
            Explore Resources
          </a>
        </section>

        <section id="resources" className="resources">
          <h2>Starting Points</h2>

          <p className="section-intro">
            Pick a path below. Each card gives you a simple first step instead
            of overwhelming you with information.
          </p>

          <div className="card-grid">
            {resources.map((resource) => (
              <ResourceCard
                key={resource.id}
                title={resource.title}
                category={resource.category}
                description={resource.description}
                action={resource.action}
              />
            ))}
          </div>
        </section>

        <section id="mission" className="mission">
          <h2>Mission</h2>

          <p>
            Some students are not lazy — they are overwhelmed. PathFinder exists
            to help young adults who do not know what questions to ask or where
            to begin.
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