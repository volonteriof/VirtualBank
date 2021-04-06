import React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Info from "../components/info/info"
import { objOneInfo } from "../components/info/data"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Info {...objOneInfo} />
    </Layout>
  )
}
