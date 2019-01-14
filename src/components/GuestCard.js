import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import { COLORS } from '../constants'
import { bs } from '../utils'

const IMAGE_SIZE = '125px'

class GuestCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imgUrl: props.imgUrl ? props.imgUrl : null,
    }
  }

  componentDidMount() {
    const { twitter } = this.props.guest

    if (!this.state.imgUrl && twitter) {
      this.abortController = new AbortController()
      const { signal } = this.abortController

      fetch(`https://guest-twitter-photos.now.sh/show?screen_name=${twitter}`, {
        signal,
      })
        .then(res => res.json())
        .then(guest => {
          const imgUrl = guest.profile_image_url_https.replace(
            '_normal',
            '_400x400'
          )

          this.setState({ imgUrl })
        })
        .then(() => {
          this.abortController = null
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.error(err)
        })
    }
  }

  componentWillUnmount() {
    if (this.abortController) {
      this.abortController.abort()
    }
  }

  render() {
    const { name, twitter } = this.props.guest
    const { imgUrl } = this.state

    return (
      <div
        css={css`
          display: inline-block;
          text-align: center;
          padding: ${bs(0.5)};
          margin-right: ${bs(2)};
          margin-bottom: ${bs(2)};
        `}
      >
        <div
          css={css`
            display: inline-block;
            margin-bottom: ${bs()};
          `}
        >
          {imgUrl ? (
            <img
              css={css`
                display: block;
                width: ${IMAGE_SIZE};
                height: auto;
                border-radius: 50%;
              `}
              src={imgUrl}
              alt={name}
            />
          ) : (
            <div
              css={css`
                width: ${IMAGE_SIZE};
                height: ${IMAGE_SIZE};
                background-color: ${COLORS.cloud};
                border-radius: 50%;
              `}
            />
          )}
        </div>
        <div>{name}</div>
        {twitter && (
          <div>
            <a href={`https://twitter.com/${twitter}`}>@{twitter}</a>
          </div>
        )}
      </div>
    )
  }
}

GuestCard.propTypes = {
  guest: PropTypes.object.isRequired,
}

export default GuestCard
