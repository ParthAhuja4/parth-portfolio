import List from "./List";
import Items from "./Items";
import "./Projects.css";
import { projects } from "../../Data";
import { useState } from "react";
const allNavList = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];
const Projects = () => {
  const [projectItems, setMenuItems] = useState(projects);
  const [navList, setCategories] = useState(allNavList);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(projects);
      return;
    }
    const newProjectItems = projects.filter(
      (item) => item.category === category
    );
    setMenuItems(newProjectItems);
  };
  return (
    <section className="portfolio section" id="projects">
      <h2 className="section_title text-cs">Projects</h2>
      <List list={navList} filterItems={filterItems} />
      <div className="portfolio_container container grid">
        <Items projectItems={projectItems} />
      </div>
    </section>
  );
};

export default Projects;
