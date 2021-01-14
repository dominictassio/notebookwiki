import Layout from "../components/layout";
import Loading from "../components/loading";
import NotebookPage from "../components/notebook-page";

const IndexPage = () => (
  <Layout title="Home">
    <div className="flex justify-center items-center">
      <NotebookPage>
        <div className="flex justify-center">
          <Loading />
        </div>
      </NotebookPage>
    </div>
  </Layout>
);

export default IndexPage;
