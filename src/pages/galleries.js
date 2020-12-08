import React from "react"

import Layout from "../components/layout"
import GalleryCard from "../components/galleryCard.js/galleryCard"
const Galleries = () => {
  return (
    <Layout>
      <h1>Galleries</h1>
      <GalleryCard
        galleryTitle="FOOD"
        src="https://placedog.net/501"
        galleryName="/photos"
      />
      <GalleryCard
        galleryTitle="ANIMALS"
        src="https://placedog.net/502"
        galleryName="/photos"
      />
      <GalleryCard
        galleryTitle="NATURE"
        src="https://placedog.net/503"
        galleryName="/photos"
      />
    </Layout>
  )
}

export default Galleries
