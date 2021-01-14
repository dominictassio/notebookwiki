import cx from "classnames";
import Head from "next/head";
import { FunctionComponent } from "react";
import Container from "./container";
import Nav from "./nav";

type LayoutProps = {
  expand?: boolean;
  title: string;
};

type LayoutComponent = FunctionComponent<LayoutProps>;

const Layout: LayoutComponent = ({ children, expand, title }) => (
  <>
    <Head>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📝</text></svg>"
      />
      <title>notebookwiki - {title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <section className={cx("flex flex-col", { "h-screen": expand })}>
      <header>
        <Nav icon="📝" title="notebookwiki" />
      </header>
      <main className={cx({ "flex-grow": expand })}>{children}</main>
      <footer>
        <Container>
          <div className="flex items-center justify-center h-16">
            <span>Made with ❤ by Dominic Tassio</span>
          </div>
        </Container>
      </footer>
    </section>
  </>
);

export default Layout;
