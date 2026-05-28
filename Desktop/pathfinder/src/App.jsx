import "./index.css";
import { useState } from "react";

import ResourceCard from "./components/ResourceCard";
import { resources, colleges } from "./data/resources.js";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCollege, setSelectedCollege] = useState(colleges[0]);  

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      resource.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

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
            FOR YOUNG ADULTS FINDING THEIR NEXT STEP
          </p>

          <h2>
            Find scholarships, resources,
            and career paths without
            feeling lost.
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

          <div className="search-controls">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="filter-buttons">
              <button onClick={() => setSelectedCategory("All")}>
                All
              </button>

              <button onClick={() => setSelectedCategory("Scholarships")}>
                Scholarships
              </button>

              <button onClick={() => setSelectedCategory("College Support")}>
                College Support
              </button>

              <button onClick={() => setSelectedCategory("Trades Route")}>
                Trades
              </button>

              <button onClick={() => setSelectedCategory("Career Prep")}>
                Career Prep
              </button>
            </div>
          </div>

          <div className="card-grid">
            {filteredResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                title={resource.title}
                category={resource.category}
                description={resource.description}
                action={resource.action}
                link={resource.link}
              />
            ))}
          </div>
        </section>
<section className="maryland-colleges">
  <h2>Maryland College Resources</h2>

  <p className="section-intro">
    Quick access to financial aid, scholarships,
    and career support pages for Maryland colleges.
  </p>

  <div className="college-tabs">
    {colleges.map((college) => (
      <button
        key={college.id}
        onClick={() => setSelectedCollege(college)}
        className={
          selectedCollege.id === college.id
            ? "active-tab"
            : ""
        }
      >
        {college.name}
      </button>
    ))}
  </div>

  <div className="college-resource-box">
    <h3>{selectedCollege.name} Resources</h3>

    <div className="college-links">
      {selectedCollege.links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noreferrer"
        >
          {link.label}
        </a>
      ))}
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