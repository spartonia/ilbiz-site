import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";

import TermsAndConditions from "sections/terms-conditions";


export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
         <TermsAndConditions/>
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
