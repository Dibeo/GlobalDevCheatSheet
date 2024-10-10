import React, { useState, Suspense } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  CircularProgress,
  Tab,
} from "@mui/material";
import ContentsList from "../contentlist";
import { useGlobalContext } from "../GlobalContext";

// Fonction pour charger dynamiquement un composant basé sur un chemin
const loadComponent = (componentPath: string) => {
  return React.lazy(() =>
    import(`../Content${componentPath}`)
      .then((module) => {
        if (!module || !module.default) {
          throw new Error("Module not found or invalid");
        }
        return module;
      })
      .catch((err) => {
        console.error(
          `Error loading the component at path: ../Content${componentPath}`,
          err
        );
        return {
          default: () => <div>Error loading component at {componentPath}.</div>,
        };
      })
  );
};

const Content: React.FC = () => {
  const { globalVariable, setGlobalVariable } = useGlobalContext();

  const handleSelectContent = (contentLink: string) => {
    if (!contentLink.startsWith("/")) {
      contentLink = "/" + contentLink;
    }
    setGlobalVariable(contentLink);
  };

  const LoadedComponent = globalVariable
    ? loadComponent(globalVariable)
    : null;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Dynamic Content Loader</Typography>
        <Divider />

        {/* Affichage des contenus disponibles */}
        <Box mt={2}>
          {ContentsList.map((content, index) => (
            <Tab
              key={index}
              label={content.title}
              onClick={() => handleSelectContent(content.link)}
            />
          ))}
        </Box>

        <Divider />

        {/* Affichage du composant dynamique */}
        <Box mt={2}>
          {LoadedComponent ? (
            <Suspense fallback={<CircularProgress />}>
              <LoadedComponent />
            </Suspense>
          ) : (
            <Typography variant="body1">
              Error loading the selected content.
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Content;
