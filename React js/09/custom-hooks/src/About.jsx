import React from 'react'
import useFetch from './useFetch'

const About = () => {
 const [data] =useFetch("https://api.mascarpool.com/api/variants")

  return (
    <>
        {data &&
        data.body.map((item) => {
          return <p key={item.id}>{item.name}
          <br />{item.model}</p>;
        })}

    </>
  )
}
export default About