import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Footer from '../components/Footer'
import Header from './Header'
import Helmet from 'react-helmet'

const GlobalStyle = createGlobalStyle`
  html {
    color: #080808;
    background-color: #000;
  }

  body {
    font-family: "Raleway", "Roboto", "Helvetica", "Arial", sans-serif;
    margin: 0;
    background-color: #f8f8f8;
  }
`

// markup
export default function Page({
  pageName,
  children,
  expandedHeader,
  pageDescription,
}) {
  return (
    <Root>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <meta charSet="utf-8" />
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="Captivate, Lighting, DMX, Stage, Visuals, Visualizer, Music"
        />
        <meta name="author" content="Spenser Saling" />
        <meta lang="en" />

        <meta
          property="og:title"
          content="Captivate: Lighting & Visual Synth"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://captivatesynth.com" />
        <meta
          property="og:image"
          content="https://captivatesynth.com/static/icon.png"
        />
        <meta
          property="og:description"
          content="A revolutionary app for live-generating lighting and visuals that synchronize to music."
        />

        <title>Captivate Lighting and Visual Synth: {pageName}</title>
        <link rel="canonical" href="http://mysite.com/example" />

        {`<!-- Global site tag (gtag.js) - Google Analytics -->`}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZT94MKPHHM"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZT94MKPHHM');
          `}
        </script>
      </Helmet>
      <GlobalStyle />
      <Header expanded={expandedHeader} fixed />
      {children}
      <Footer />
    </Root>
  )
}

const Root = styled.main`
  position: relative;
`
