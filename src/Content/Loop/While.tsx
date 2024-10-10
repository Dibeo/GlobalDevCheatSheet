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
        key="While Loop"
        variant="outlined"
        sx={{ width: "100%", maxWidth: 800, marginBottom: 2 }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            While Loop
          </Typography>
          <Typography variant="body1">
            A <code>while</code> loop is a control flow statement that allows code
            to be executed repeatedly as long as a specified condition is true.
            The condition is checked before each iteration, and if the condition
            evaluates to <code>true</code>, the loop's body is executed.
            Once the condition becomes <code>false</code>, the loop terminates.
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
                  text={`int i = 0;
while (i < 10) {
    // code...
    i++;
}`}
                  language="java"
                  showLineNumbers={true}
                  theme={nord}
                />
              )}
              {selectedLang === "cpp" && (
                <CodeBlock
                  text={`int i = 0;
while (i < 10) {
    // code...
    ++i;
}`}
                  language="cpp"
                  showLineNumbers={true}
                  theme={nord}
                />
              )}

              {selectedLang === "javascript" && (
                <CodeBlock
                  text={`let i = 0;
while (i < 10) {
    // code...
    i++;
}`}
                  language="javascript"
                  showLineNumbers={true}
                  theme={nord}
                />
              )}

              {selectedLang === "python" && (
                <CodeBlock
                  text={`i = 0
while i < 10:
    # code...
    i += 1
`}
                  language="python"
                  showLineNumbers={true}
                  theme={nord}
                />
              )}

              {selectedLang === "php" && (
                <CodeBlock
                  text={`$i = 0;
while ($i < 10) {
    // code...
    $i++;
}`}
                  language="php"
                  showLineNumbers={true}
                  theme={nord}
                />
              )}

              {selectedLang === "csharp" && (
                <CodeBlock
                  text={`int i = 0;
while (i < 10) {
    // code...
    i++;
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
