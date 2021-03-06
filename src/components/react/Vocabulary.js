import React, { Component } from 'react'
import { connect } from 'react-redux'
import withView from './@View'
import mapState from '@/utils/mapState'

import WordCard from './Word-Card'
import Empty from './Empty'

@withView
@connect(mapState)
class Vocabulary extends Component {
  constructor() {
    super()
    this.state = {
      filter: {
        keyword: '',
        stage: 0
      },

      wordsCount: 0,
      historyWordsCount: 0
    }
  }

  async componentDidMount() {
    const { dispatch, vocabulary, currentLink } = this.props
  }

  render() {
    const { dispatch, vocabulary, currentLink, filter } = this.props

    const vocabularyFiltered = vocabulary.filter(vocabulary => {
      const reg = new RegExp(filter.keyword, 'g')
      return (vocabulary.s === filter.stage || filter.stage === 0) && reg.test(vocabulary.t)
    })

    return vocabularyFiltered.length ? vocabularyFiltered.map(vocabulary => <WordCard key={vocabulary.t} word={vocabulary} />) : null
  }
}

export default Vocabulary
