import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import User from '../models/User'
import dbConnect from '../lib/dbConnect'
import { createUser } from '../lib/user'
import { useEffect } from 'react'

const index = ({user}) => {

  //const user = useUser()

    createUser({ username: "renjith", password: "password"})
  

  console.log(user)

  return (
      <Layout>
          <h6>{user?.username}</h6>
      </Layout>
  )
}

/* Retrieves pet(s) data from mongodb database */
export async function getStaticProps() {
  await dbConnect()
  const user = { username : 'Renjith'}
  return { props: {user} }
}

export default index
