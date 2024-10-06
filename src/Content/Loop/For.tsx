import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  Box,
  Divider,
} from "@mui/material";
import { CodeBlock, nord } from "react-code-blocks";

// Main component to display the list of loops with tabs to switch language
const LoopsList: React.FC = () => {
  // State to keep track of the selected language
  const [selectedLang, setSelectedLang] = useState<string>("java");

  // Function to handle the language change
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedLang(newValue);
  };

  return (
    <Box sx={{ padding: 2, display: "flex", flexDirection: "column" }}>
      <Card
        key="For Loop"
        variant="outlined"
        sx={{ width: "100%", maxWidth: 800, marginBottom: 2 }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            For Loop
          </Typography>
          <Typography variant="body1">
            A <code>for</code> loop is a control flow statement that allows code
            to be executed repeatedly based on a specified condition. It is
            commonly used to iterate over a sequence of numbers or elements in a
            collection. The <code>for</code> loop consists of three main
            components: initialization, condition, and iteration. Initialization
            sets up the loop variable, the condition is evaluated before each
            iteration, and the iteration updates the loop variable after each
            execution of the loop's body.
          </Typography>
          <Divider />
          <Box sx={{ marginTop: 2 }}>
            <Tabs
              value={selectedLang}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Java" value="java" />
              <Tab label="C++" value="cpp" />
              <Tab label="Python" value="python" />
              <Tab label="JavaScript" value="javascript" />
              <Tab label="PHP" value="php" />
              <Tab label="C#" value="csharp" />
            </Tabs>

            <Box sx={{ marginTop: 2 }}>
              {selectedLang === "java" && (
                <CodeBlock
                  text={`for (int i = 0; i < 10; i++) {
    //code...
}`}
                  language="java"
                  showLineNumbers={true}
                  theme={nord}
                />
              )}
              {selectedLang === "cpp" && (
                <CodeBlock
                  text={`for (int i = 0; i < 10; ++i) {
    // code...
}`}
                  language="c"
                  showLineNumbers={true}
                  theme={nord}
                />
              )}

              {selectedLang === "javascript" && (
                <CodeBlock
                  text={`for (const i = 0; i < 10; i++) {
    // code...
}`}
                  language="javascript"
                  showLineNumbers={true}
                  theme={nord}
                />
              )}

              {selectedLang === "python" && (
                <CodeBlock
                  text={`for i in range(10):
    # code...
`}
                  language="python"
                  showLineNumbers={true}
                  theme={nord}
                />
              )}

              {selectedLang === "php" && (
                <CodeBlock
                  text={`for ($i = 0; $i < 10; $i++) {
    // code...
}`}
                  language="php"
                  showLineNumbers={true}
                  theme={nord}
                />
              )}

              {selectedLang === "csharp" && (
                <CodeBlock
                  text={`for (int i = 0; i < 10; i++) {
    // code...
}`}
                  language="csharp"
                  showLineNumbers={true}
                  theme={nord}
                />
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoopsList;
