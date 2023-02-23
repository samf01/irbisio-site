import { GatsbySeo } from 'gatsby-plugin-next-seo'
import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import GridContent from '../components/UI/grid-content'
import background from '../../static/assets/background-test.jpg'
import snowLeopard from '../../static/assets/snow-leopard-bg.jpg'

import PreviewArticle from '../components/UI/news/article-preview'
import FoundationButton from '../components/UI/snow-leopard-button'

const Home = () => {
  const mockArticles = [
    {
      heading: 'Urban investment in the cleantech space reaches new highs.',
      extract:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ullamcorper augue. Maecenas eu porttitor libero, nec egestas ante. Sed eleifend ultrices velit in molestie. Nulla at tellus id dui bibendum eleifend nec nec turpis. Morbi cursus sed augue pellentesque convallis. Mauris id magna malesuada, condimentum libero quis, varius libero. Integer non diam mollis mauris blandit molestie et sit amet sem. Cras quis sem vel quam pulvinar malesuada.',
    },
    {
      heading: 'Urban investment in the cleantech space reaches new highs.',
      extract:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ullamcorper augue. Maecenas eu porttitor libero, nec egestas ante. Sed eleifend ultrices velit in molestie. Nulla at tellus id dui bibendum eleifend nec nec turpis. Morbi cursus sed augue pellentesque convallis. Mauris id magna malesuada, condimentum libero quis, varius libero. Integer non diam mollis mauris blandit molestie et sit amet sem. Cras quis sem vel quam pulvinar malesuada.',
    },
    {
      heading: 'Urban investment in the cleantech space reaches new highs.',
      extract:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ullamcorper augue. Maecenas eu porttitor libero, nec egestas ante. Sed eleifend ultrices velit in molestie. Nulla at tellus id dui bibendum eleifend nec nec turpis. Morbi cursus sed augue pellentesque convallis. Mauris id magna malesuada, condimentum libero quis, varius libero. Integer non diam mollis mauris blandit molestie et sit amet sem. Cras quis sem vel quam pulvinar malesuada.',
    },
  ]
  //Create pagination marker position: absolute on RHS.
  //Count the number of sections and get the key.
  //OnScroll, check which section getBoundingClientRect().top = 0;
  return (
    <Layout>
      <GatsbySeo title="Home Page" />
      <GridContent
        id="introduction"
        layout="--center-4"
        mode="dark-mode"
        background="grey"
      >
        <h4>Introduction</h4>
        <h1>
          Integrated cleantech investing to deliver predictable ROI and
          accelerate carbon net zero.
        </h1>
        <p>
          At Irbisio, we bring together technology expertise, project management
          skills and financial acumen into one integrated approach to
          investment.
          <br />
          <br />
          We carefully select, fund, manage and profitably exit cleantech
          investment projects, companies and programmes.
          <br />
          <br />
          We make investment in sustainability, sustainable.
        </p>
      </GridContent>
      <GridContent
        id="strategy"
        layout="--center-4"
        mode="light-mode"
        background={background}
      >
        <h4>Startegy</h4>
        <h1>
          Cleantech investing is no longer about speculative bets on possible
          winners...
        </h1>
        <p>
          ...but rather about sustainable investments in projects and programmes
          that are going to make a difference in the transition to carbon net
          zero, while creating value and delivering stable returns for
          investors.
        </p>
      </GridContent>
      <GridContent
        id="strategy-2"
        layout="--center-4"
        mode="dark-mode"
        background={background}
      >
        <h4>Startegy</h4>
        <h1>
          Cleantech investing is no longer about speculative bets on possible
          winners...
        </h1>
        <p>
          We integrate the core capabilities for successful and responsible
          cleantech investing:
        </p>
        <span className="row">
          <svg
            width="62"
            height="63"
            viewBox="0 0 62 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <path
              d="M25.4182 18.9795H18.5416V25.7688M25.4182 18.9795V9.52893H13.5012M25.4182 18.9795H36.8679M13.5012 9.52893C13.5012 11.4002 11.9842 12.9171 10.113 12.9171C8.24176 12.9171 6.72483 11.4002 6.72483 9.52897C6.72483 7.65773 8.24176 6.1408 10.113 6.1408C11.9842 6.1408 13.5012 7.65769 13.5012 9.52893ZM36.8679 18.9795H43.605V25.7688M36.8679 18.9795V7.77646M36.8679 7.77646C38.7392 7.77646 40.2561 6.25941 40.2561 4.38817C40.2561 2.51694 38.7392 1 36.8679 1C34.9967 1 33.4797 2.51694 33.4797 4.38817C33.4797 6.25941 34.9967 7.77646 36.8679 7.77646ZM18.5416 25.7688H7.77636M18.5416 25.7688V37.1017M7.77636 25.7688C7.77636 27.6401 6.25941 29.157 4.38817 29.157C2.51694 29.157 1 27.6401 1 25.7688C1 23.8976 2.51694 22.3807 4.38817 22.3807C6.25941 22.3807 7.77636 23.8976 7.77636 25.7688ZM18.5416 37.1017V44.0429H25.4182M18.5416 37.1017H9.2952V48.785M9.2952 48.785C7.42397 48.785 5.90703 50.302 5.90703 52.1732C5.90703 54.0444 7.42397 55.5614 9.2952 55.5614C11.1664 55.5614 12.6834 54.0444 12.6834 52.1732C12.6834 50.302 11.1664 48.785 9.2952 48.785ZM25.4182 44.0429V54.8604M25.4182 44.0429H36.8679M25.4182 54.8604C23.547 54.8604 22.0301 56.3773 22.0301 58.2485C22.0301 60.1198 23.547 61.6367 25.4182 61.6367C27.2895 61.6367 28.8064 60.1198 28.8064 58.2485C28.8064 56.3773 27.2895 54.8604 25.4182 54.8604ZM36.8679 44.0429H43.605V37.1017M36.8679 44.0429V53.2247H48.4344M48.4344 53.2247C48.4344 55.0959 49.9514 56.6129 51.8226 56.6129C53.6939 56.6129 55.2108 55.0959 55.2108 53.2247C55.2108 51.3535 53.6939 49.8365 51.8226 49.8365C49.9514 49.8365 48.4344 51.3535 48.4344 53.2247ZM43.605 37.1017H53.9256M43.605 37.1017V25.7688M53.9256 37.1017C53.9256 38.9729 55.4426 40.4898 57.3138 40.4898C59.185 40.4898 60.702 38.9729 60.702 37.1017C60.702 35.2304 59.185 33.7135 57.3138 33.7135C55.4426 33.7135 53.9256 35.2304 53.9256 37.1017ZM43.605 25.7688H52.7573V13.2676M52.7573 13.2676C54.6285 13.2676 56.1455 11.7507 56.1455 9.87947C56.1455 8.00823 54.6285 6.4913 52.7573 6.4913C50.886 6.4913 49.3691 8.00823 49.3691 9.87947C49.3691 11.7507 50.886 13.2676 52.7573 13.2676Z"
              stroke="#ffffff"
              strokeWidth="2"
            />
          </svg>
          <p>
            The Irbisio Technology Insights Team brings together some of the
            most knowledgeable leaders in energy technology and enables us to
            identify lucrative opportunities faster and execute on these.
          </p>
        </span>
        <span className="row">
          <svg
            width="61"
            height="59"
            viewBox="0 0 61 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <path
              d="M60.572 57.6257H0M10.4212 26.9047L19.6038 17.1941H31.9218L51.85 1.63661M51.85 1.63661L50.8957 7.95115M51.85 1.63661H45.4727M45.4727 17.6007H56.0774V57.6257H45.4727V17.6007ZM24.9836 28.132H35.5884V57.6257H24.9836V28.132ZM4.49455 35.4074H15.0993V57.6257H4.49455V35.4074Z"
              stroke="#ffffff"
              strokeWidth="2"
            />
          </svg>
          <p>
            The Irbisio Technology Insights Team brings together some of the
            most knowledgeable leaders in energy technology and enables us to
            identify lucrative opportunities faster and execute on these.
          </p>
        </span>
        <span className="row">
          <svg
            width="64"
            height="70"
            viewBox="0 0 64 70"
            className="icon"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.959 1.80151H9.58416C5.37744 1.80151 1.96722 5.21173 1.96722 9.41845V60.9862C1.96722 65.1929 5.37744 68.6031 9.58415 68.6031H55.2839C59.4906 68.6031 62.9008 65.1929 62.9008 60.9862V16.3211M48.959 1.80151V8.70421C48.959 12.9109 52.3692 16.3211 56.5759 16.3211H62.9008M48.959 1.80151L62.9008 16.3211"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M28.381 16.3239H44.7289M11.3447 16.3239L14.3455 19.2198L20.4655 13.6296"
              stroke="#ffffff"
              strokeWidth="2"
              strokeMiterlimit="16"
              strokeLinecap="round"
            />
            <path
              d="M27.8474 34.872H53.5234M11.3447 38.9556L15.4178 34.8733M19.6014 30.8975L15.4178 34.8733M15.4178 34.8733L19.6014 38.9556M15.4178 34.8733L11.3448 30.8968"
              stroke="#ffffff"
              strokeWidth="2"
              strokeMiterlimit="16"
              strokeLinecap="round"
            />
            <path
              d="M27.8474 54.6071H53.5234M11.3447 58.6907L15.4178 54.6084M19.6014 50.6326L15.4178 54.6084M15.4178 54.6084L19.6014 58.6907M15.4178 54.6084L11.3448 50.6319"
              stroke="#ffffff"
              strokeWidth="2"
              strokeMiterlimit="16"
              strokeLinecap="round"
            />
          </svg>
          <p>
            The Irbisio Technology Insights Team brings together some of the
            most knowledgeable leaders in energy technology and enables us to
            identify lucrative opportunities faster and execute on these.
          </p>
        </span>
        <p>
          Our integrated approach to cleantech investing means that we see
          through the programme cycle from identification of new game changing
          technologies to project execution and profitable exits.
        </p>
        <Link to="/strategy">Learn More</Link>
      </GridContent>
      <GridContent
        id="news"
        layout="--center-4"
        mode="light-mode"
        background={background}
      >
        <h4>News</h4>
        {mockArticles.map(article => {
          return <PreviewArticle key={article.heading} article={article} />
        })}
        <p>
          For more information contact:{' '}
          <a href="mailto:media@irbisio.com">media@irbisio.com</a>
        </p>
      </GridContent>
      <GridContent id="about" layout="--center-4" mode="dark-mode">
        <h4>About</h4>
        <h1>
          Founded in January 2023 to provide a new approach to cleantech
          investing.
        </h1>
        <p>
          Based on deep expertise and a focus on pragmatic projects that will
          accelerate carbon net zero while making returns for investors.
          <br />
          <br />
          Founded by a group of energy professionals, technical specialists and
          investment experts, Irbisio operates across Western Europe. Initial
          projects (include name examples or area of investment).
        </p>
        <Link to="/about">Learn More</Link>
      </GridContent>
      <GridContent
        id="snow-leopard"
        layout="--center-4"
        mode="snow-mode"
        background={snowLeopard}
      >
        <h4>Wild Cat Rescue Fund</h4>
        <h1>Protecting snow leopards, now, and for the future.</h1>
        <p>
          The Snow Leopard symbolises power, courage and intuition, but paired
          with an amazing analytical ability. This reflects the approach and
          attributes of Irbisio and we have chosen theSnow Leopard as our icon.
          <br />
          <br />
          We support Snow Leopard Trust and its aims to better understand and
          protect this endangered species in partnership with communities that
          share its habitat.
        </p>
        <FoundationButton />
      </GridContent>
    </Layout>
  )
}

export default Home
