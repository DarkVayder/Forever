import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {backendUrl} from '../App'
const List = () => {

  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      console.log(response.data);
      
    } catch (error) {
      console.error('Error fetching list:', error)
      setList([])
    }
  }

  useEffect(() => {
    fetchList()
  },[])

  return (
    <div>
      <h1>List</h1>
    </div>
  )
}

export default List
