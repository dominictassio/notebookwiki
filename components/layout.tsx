import type { ReactNode } from "react";
import Head from "next/head";
import Container from "./container";
import Nav from "./nav";

const Layout = ({
  children,
  title,
}: {
  children?: ReactNode;
  title: string;
}) => (
  <>
    <Head>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📝</text></svg>"
      ></link>
      <title>notebookwiki - {title}</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <header>
      <Nav icon="📝" title="notebookwiki" />
    </header>
    <main>{children}</main>
    <footer>
      <Container>
        <div className="flex items-center justify-center h-16">
          <span>Made with ❤ by Dominic Tassio</span>
        </div>
      </Container>
    </footer>
  </>
);

export default Layout;
