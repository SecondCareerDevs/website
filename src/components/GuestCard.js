import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { withPrefix } from 'gatsby'
import { COLORS } from '../constants'
import { bs } from '../utils'

const IMAGE_SIZE = '125px'

const linkStyles = {
  display: 'block',
  transition: 'opacity 0.3s ease',

  '&:hover': {
    opacity: 0.8,
  },
}

const GuestCard = ({ guest: { imgUrl, name, slug, twitter } }) => {
  const ImageWrap = slug ? Link : Fragment
  const imageWrapProps = slug
    ? { css: linkStyles, to: `/episodes/${slug}` }
    : {}

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
        <ImageWrap {...imageWrapProps}>
          {imgUrl ? (
            <img
              css={css`
                display: block;
                width: ${IMAGE_SIZE};
                height: auto;
                border-radius: 50%;
              `}
              src={withPrefix(imgUrl)}
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
        </ImageWrap>
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

GuestCard.propTypes = {
  guest: PropTypes.object.isRequired,
}

export default GuestCard
