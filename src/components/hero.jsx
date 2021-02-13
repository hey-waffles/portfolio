import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StyledHero, SplashImageObj } from "gatsby-theme-scarlet/src/components/styles"
import { AnimatedWave } from "gatsby-theme-scarlet/src/components"
import { Col, Container, Row } from "react-bootstrap";
import RisingStrong from "./RisingStrong";
import Img from "gatsby-image"
import ReactAnime from "react-animejs";
const { Anime } = ReactAnime;

function Hero() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "placeholder.png" }) {
        childImageSharp {
          fixed(width: 972, height: 972) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <StyledHero>
      <div style={{position: "absolute", display: "flex", justifyContent: "center", width: "100%", color: "whitesmoke"}}>
        <h1 style={{fontSize: "3em", paddingRight: "1em"}}>Hey!<br/>I'm <RisingStrong text="Laura!"/></h1>
        <Anime initial={[
          {
            targets: '.gatsby-image-wrapper',
            translateX: ["500px","0px"],
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 3500,
            delay: 2250
          }
        ]}>
          <Img
            id="profile-image"
            fixed={data.file.childImageSharp.fixed}
            alt={"imageAlt"}
            // style={{ margin: "0 auto", height: "100%" }}
            // imgStyle={SplashImageObj}
          />
        </Anime>
      </div>
      <AnimatedWave enableWave bottom={true} />
    </StyledHero>
  );
}

export default Hero;