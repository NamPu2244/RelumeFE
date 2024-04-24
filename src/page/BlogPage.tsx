import { useState , useEffect } from "react"
import React  from 'react'
import blogApi from '../api/BlogApi'
import {apiKey} from '../api/ApiKey'
import { useDispatch, UseDispatch } from "react-redux"
import {addNews} from '../reducer/Reducer'

import NewsListing from "../component/organisms/blogPage/NewsListing"
import { Box } from "@mui/material"

function BlogPage() {


  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNews = async () => {
      const res = await blogApi.get(`/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`)

      setTimeout(() => {
        dispatch(addNews(res.data))
      },500)
    }

    fetchNews();
  }, [])

  return (
    <div>
      <Box sx={{ my: 14 }}>
        <NewsListing/>
      </Box>
      
    </div>
  )
}

export default BlogPage