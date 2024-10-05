/*  summary.tsx   */
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material";

import './summary.css'; 
import contentList from "../contentlist";

interface SommaireProps {
  expanded: boolean;
}

const SommaireComponent: React.FC<SommaireProps> = ({ expanded }) => {

    const sortedContent = contentList
    .map((film) => {
      const firstLetter = film.label[0].toUpperCase();
      return {
        firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
        ...film,
      };
    })
    .sort((a, b) => a.firstLetter.localeCompare(b.firstLetter));

    const groupedContent = sortedContent.reduce((acc, film) => {
        const group = film.firstLetter;
        if (!acc[group]) {
          acc[group] = [];
        }
        acc[group].push(film);
        return acc;
      }, {} as { [key: string]: typeof contentList });

  return (
    <Accordion expanded={expanded} className="sommaire-container"
    style={{
        position: "fixed",       // fixe la position du sommaire
        left: expanded ? 0 : "-20%",  // 300px en dehors de l'écran lorsqu'il est fermé
        width: "17%",          // largeur du sommaire
        height: "100%",          // prend toute la hauteur
        backgroundColor: "#252525",
        color: "#ffffff", //couleur du texte
        boxShadow: "2px 0px 5px rgba(0,0,0,0.5)", // ajoute une ombre
        transition: "left 0.3s ease",  // transition fluide pour glisser
        overflowY: "auto",        // permet de faire défiler le contenu si nécessaire
      }}>
      <AccordionSummary>
        <Typography variant="h5" >Summary</Typography>
      </AccordionSummary>
      <AccordionDetails>
          {Object.keys(groupedContent).map((letter) => (
            <div key={letter}>
              <Typography variant="h6" style={{ marginTop: "10px" }}>
                {letter}
              </Typography>
              <ul>
                {groupedContent[letter].map((film, index) => (
                  <li key={index}>
                    {film.label} ({film.year})
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
