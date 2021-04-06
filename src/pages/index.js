import React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Info from "../components/info/info"
import { objOne, objTwo, objThree } from "../components/info/data"
import Services from "../components/services/services"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Info {...objOne} />
      <Info {...objTwo} />
      <Services />
      <Info {...objThree} />
    </Layout>
  )
}
