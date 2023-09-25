import React from "react";
import Row from "../containers/RowContainer";
import BlogList from "../templates/blog-list";
import { getAllPosts } from "../lib/api";
import MainWrapperContainer from "../containers/MainWrapperContainer";
import SeoContainer from "../containers/SeoContainer";
import { slugPrefix } from "../lib/utils";
import mainConfigs from "../configs/main-infos.json";

const Home = ({ posts }) => (
  <MainWrapperContainer rowWidth={960}>
    <SeoContainer
      killSeo={false}
      data={{
        slug: mainConfigs.pages.index.slug,
        title: `${mainConfigs.pages.index.title} - ${mainConfigs.business.brandName}`,
        description: mainConfigs.pages.index.description,
        author: mainConfigs.website.author,
        siteUrl: mainConfigs.website.siteUrl,
        brandName: mainConfigs.business.brandName,
        brandEmail: mainConfigs.business.brandEmail,
        brandLogo: mainConfigs.business.brandLogo,
        brandPhone: mainConfigs.business.brandPhone,
        brandDescription: mainConfigs.business.brandDescription,
        brandCardImage: mainConfigs.business.brandCardImage,
        featuredImage: `${mainConfigs.website.siteUrl}${slugPrefix}/favicon-32x32.png`,
        datePublished: mainConfigs.website.datePublished,
        i18n: mainConfigs.website.i18n,
        keywords: mainConfigs.website.keywords,
        questions: mainConfigs.website.questions,
        topology: "pages",
        articleUrl: `${mainConfigs.website.siteUrl}/${mainConfigs.pages.index.slug}`,
        themeColor: "#d3d3d3",
        sameAs: mainConfigs.business.sameAs,
        twitter: mainConfigs.business.twitterCard,
      }}
    />
    <h2>Início: Sumário</h2>
    <div className='wrapper-box'>
      <Row opt={{ isBoxed: true }}>
        <p>Bem-vindo ao mundo da fotografia 
          Naice Peixoto, onde as histórias se 
          transformam em memórias! 
        </p><p>
          Eu e a minha equipe somos apaixonados por capturar momentos especiais 
          e transformá-los 
          em lembranças eternas. Seja para um casamento grandioso, 
          um elopement íntimo, um destination wedding dos sonhos, 
          ou simplesmente um ensaio pré-wedding cheio de amor, 
          estamos aqui para tornar cada momento inesquecível. 
          Viajamos para onde sua história nos levará, e esperamos que seja a 
          sua próxima história a ser contada através das nossas lentes.
        </p>
        <div className='hero-txt'>
          <ul>
            <li>Casamentos</li>
            <li>Elopment</li>
            <li>Destination Wedding</li>
            <li>Pré Wedding </li>
            <li>Ensaio casal </li>
            <li>Debutante</li>
          </ul>
        </div>
      </Row>
    </div>
    <h2>Últimos Ensaios</h2>
    <div className='wrapper-box'>
      <div className='post'>
        <BlogList posts={posts} />
      </div>
    </div>
  </MainWrapperContainer>
);
export default Home;
export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
