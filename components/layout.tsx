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
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <header>
      <Nav icon="📝" title="notebookwiki" />
    </header>
    <main>{children}</main>
    <footer>
      <Container>
        <span>Made with ❤ by Dominic Tassio</span>
      </Container>
    </footer>
  </>
);

export default Layout;
