import shape from "../../assets/shape-2.png";
import { motion } from "framer-motion";

function Items({ projectItems }) {
  return (
    <>
      {projectItems.map((item) => {
        const { id, img, category, title, description, link } = item;
        return (
          <motion.div
            key={id}
            className="portfolio_items card card-two"
            layout
            initial={{ opacity: 0, y: 30, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <a href={link} target="blank" className="color">
              <div className="portfolio_img-wrapper">
                <img
                  src={img}
                  alt={title}
                  className={`portfolio_img ${title === "Campus AI" ? "cmps" : ""}`}
                />
              </div>
              <span className="portfolio_category text-cs">{category}</span>
              <h3 className="portfolio_title">{title}</h3>
              <p className="portfolio_description">{description}</p>
              <img src={shape} alt="" className="shape" />
            </a>
          </motion.div>
        );
      })}
    </>
  );
}

export default Items;
