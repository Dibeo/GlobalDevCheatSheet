import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material";
import './summary.css'; 
import contentList from "../contentlist"; // Assurez-vous que ce chemin est correct

interface SommaireProps {
  expanded: boolean;
}

const SommaireComponent: React.FC<SommaireProps> = ({ expanded }) => {

  // Trier le contenu par catégorie, puis par titre dans chaque catégorie
  const sortedContent = contentList.sort((a, b) => {
    const categoryComparison = a.categories.localeCompare(b.categories);
    if (categoryComparison !== 0) {
      return categoryComparison;
    }
    return a.title.localeCompare(b.title);
  });

  // Regrouper le contenu par catégories
  const groupedContent = sortedContent.reduce((acc, content) => {
    const category = content.categories;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(content);
    return acc;
  }, {} as { [key: string]: typeof contentList });

  const handleNavigation = (link: string) => {
    window.location.href = link; // Rediriger vers le lien approprié
  };

  return (
    <Accordion expanded={expanded} className="sommaire-container"
      style={{
        position: "fixed",
        left: expanded ? 0 : "-20%",
        width: "17%",
        height: "100%",
        boxShadow: "2px 0px 5px rgba(0,0,0,0.5)",
        transition: "left 0.3s ease",
        overflowY: "auto",
      }}>
      <AccordionSummary>
        <Typography variant="h5">Sommaire</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {Object.keys(groupedContent).sort().map((category) => (
          <div key={category}>
            <Typography variant="h6" style={{ marginTop: "10px" }}>
              {category}
            </Typography>
            <hr style={{ border: '1px solid #ccc', margin: '5px 0' }} />
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              {groupedContent[category].map((content, index) => (
                <li key={index}>
                  <a href={content.link}>{content.title}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default SommaireComponent;
