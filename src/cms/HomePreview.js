import React from 'react'
import GridContent from '../components/UI/grid-content'
import PreviewArticle from '../components/UI/news/article-preview'
import FoundationButton from '../components/UI/snow-leopard-button'
import Landing from '../components/UI/above-the-fold'
import {
  FinanceIcon,
  ProjectIcon,
  TechIcon,
} from '../components/graphics/icons'

const articles = [
  {
    title: 'The article previews will appear here.',
    date: new Date(),
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ullamcorper augue. Maecenas eu porttitor libero, nec egestas ante. Sed eleifend ultrices velit in molestie. Nulla at tellus id dui bibendum eleifend nec nec turpis. Morbi cursus sed augue pellentesque convallis. Mauris id magna malesuada, condimentum libero quis, varius libero. Integer non diam mollis mauris blandit molestie et sit amet sem. Cras quis sem vel quam pulvinar malesuada. Morbi cursus sed augue pellentesque convallis. Mauris id magna malesuada, condimentum libero quis, varius libero. Integer non diam mollis mauris blandit molestie et sit amet sem. Cras quis sem vel quam pulvinar malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ullamcorper augue. Maecenas eu porttitor libero, nec egestas ante. Sed eleifend ultrices velit in molestie.',
    slug: '/',
  },
  {
    title:
      'To edit the articles, go back to the main menu and click on news...',
    date: new Date(),
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ullamcorper augue. Maecenas eu porttitor libero, nec egestas ante. Sed eleifend ultrices velit in molestie. Nulla at tellus id dui bibendum eleifend nec nec turpis. Morbi cursus sed augue pellentesque convallis. Mauris id magna malesuada, condimentum libero quis, varius libero. Integer non diam mollis mauris blandit molestie et sit amet sem. Cras quis sem vel quam pulvinar malesuada. Morbi cursus sed augue pellentesque convallis. Mauris id magna malesuada, condimentum libero quis, varius libero. Integer non diam mollis mauris blandit molestie et sit amet sem. Cras quis sem vel quam pulvinar malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ullamcorper augue. Maecenas eu porttitor libero, nec egestas ante. Sed eleifend ultrices velit in molestie.',
    slug: '/',
  },
]

const HomePreview = ({ data }) => {
  const { introduction, about, leopard, news, strategy } = data

  return (
    <>
      <Landing />
      <GridContent
        id="introduction"
        layout="--center-4"
        mode={introduction.mode}
        background={introduction.image}
      >
        <h4>{introduction.section}</h4>
        <h1>{introduction.title}</h1>
        <p className="markdown">{introduction.body}</p>
      </GridContent>
      <GridContent
        id="strategy"
        layout="--center-4"
        mode={strategy.page_1.mode}
        background={strategy.image}
      >
        <h4>{strategy.section}</h4>
        <h1>{strategy.page_1.title}</h1>
        <p className="markdown">{strategy.page_1.body}</p>
      </GridContent>
      <GridContent
        id="strategy-2"
        layout="--center-4"
        mode={strategy.page_2.mode}
        background={strategy.image}
      >
        <h4>{strategy.section}</h4>
        <p className="markdown">{strategy.page_2.heading}</p>
        {strategy.page_2.bullets.map((bullet, i) => {
          return (
            <span className="row" key={i}>
              {bullet.icon === 'tech' && <TechIcon />}
              {bullet.icon === 'finance' && <FinanceIcon />}
              {bullet.icon === 'project' && <ProjectIcon />}

              <p>{bullet.body}</p>
            </span>
          )
        })}
        <p className="markdown">{strategy.page_2.body}</p>
        <a href={strategy.button.link}>{strategy.button.label}</a>
      </GridContent>
      <GridContent
        id="news"
        layout="--center-4"
        mode={news.mode}
        background={news.image}
      >
        <h4>{news.section}</h4>
        {articles.map((article, i) => {
          return (
            <div key={i}>
              <PreviewArticle article={article} />
            </div>
          )
        })}
        <p>
          For more information contact:{' '}
          <a href={news.contact.link}>{news.contact.label}</a>
        </p>
      </GridContent>
      <GridContent
        id="about"
        layout="--center-4"
        mode={about.mode}
        background={about.image}
      >
        <h4>{about.section}</h4>
        <h1>{about.title}</h1>
        <p className="markdown">{about.body}</p>
        <a href={about.button.link}>{about.button.label}</a>
      </GridContent>
      <GridContent
        id="snow-leopard"
        layout="--center-4"
        mode={leopard.mode}
        background={leopard.image}
      >
        <h4>{leopard.section}</h4>
        <h1>{leopard.title}</h1>
        <p className="markdown">{leopard.body}</p>
        <FoundationButton button={leopard.button} />
      </GridContent>
    </>
  )
}

const FooterPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  return <HomePreview data={data} />
}

export default FooterPreview
