import { Breadcrumbs, Footer, Header, Icons } from '../../index';
import { Main } from '../main/main';

export default function Catalog() {

  return (
    <>
      <Icons/>
      <div className="wrapper">
        <Header/>
        <main className="page-content">
          <div className="container">
            <h1 className="page-content__title title title--bigger">
              Каталог гитар
            </h1>
            <Breadcrumbs />
            <Main/>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
