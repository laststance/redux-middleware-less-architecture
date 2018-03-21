// @flow
import React, { Component } from 'react'
import axios from 'axios'

type Props = {}

class Github extends Component<Props> {
  async componentDidMount() {
    const query = 'react'
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=${query}`
    )

    console.log(res)
  }

  render() {
    return <div>github</div>
  }
}

export default Github
