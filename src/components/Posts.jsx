import React, { useEffect, useState } from 'react'

function Posts() {

    const [Posts,setPosts]=useState();
    useEffect(()=>{
        fetch('//localhost:3000/posts')
        then((data)=>{data.json})
        then((data =>setPosts(data))).
        catch(err =>console.log(err))
    })

  return (
    <div>


    </div>
  )
}

export default Posts