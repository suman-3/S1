import React from 'react'
import MaxWidthWrapper from '../Wrapper/MaxWidthWrapper'

const AboutUs = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="h3 font-bold mt-5 mb-10">About Us</h1>
        <p className="text-lg mb-10 max-w-3xl">
          We are a team of developers and designers who love to build and create
          things. We are passionate about open source and love to contribute to
          the community. We are always looking for new opportunities to learn and
          grow.
        </p>
      </div>
    </MaxWidthWrapper>
  )
}

export default AboutUs