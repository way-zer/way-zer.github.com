import React, { Component } from 'react'
import Head from 'next/head'
import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'
import Link from 'nextein/link'


const dashes = (str) => (str.toLowerCase().replace(' ', '-'))

class Index extends Component {

  render() {
    const { posts } = this.props
    return (
      <main>
        <Head>
          <title>Way-Zer's Blog</title>
          <link type="text/css" rel="stylesheet" href="/static/stylesheet.css" />
        </Head>
        <header>
          <h1 className="brand">Way-Zer</h1>
          <p className="welcome">Welcome to my Blog!</p>
        </header>
        <section>
          {
            posts.map(post => (
              <article key={`post-${dashes(post.data.title)}`}>
                <header>
                  <h2><Link {...post}><a>{post.data.title}</a></Link></h2>
                </header>
                <Content {...post} excerpt />
              </article>
            ))
          }
        </section>
      </main>
    )
  }
}

export default withPosts(Index)
