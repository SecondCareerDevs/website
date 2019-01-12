import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { COLORS } from '../constants'

const baseItemStyles = css`
  display: inline-block;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  margin-right: 3px;
  margin-bottom: 3px;
`

const hoverOrActiveStyle = css`
  background-color: ${COLORS.red};
  color: ${COLORS.white};
`

const itemStyles = css`
  ${baseItemStyles};
  background-color: ${COLORS.orange};
  color: ${COLORS.white};
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    ${hoverOrActiveStyle};
  }
`

const nonLinkItemStyles = css`
  ${baseItemStyles};
  ${hoverOrActiveStyle};
`

const Pagination = ({ index: currentPageIndex, totalPages }) => {
  const currentPageNumber = currentPageIndex + 1
  const prevPageNumber = currentPageNumber - 1
  const nextPageNumber = currentPageNumber + 1

  return (
    <div>
      {currentPageIndex !== 0 ? (
        <Link
          css={itemStyles}
          to={
            prevPageNumber === 0
              ? '/episodes'
              : `/episodes/page-${prevPageNumber}`
          }
        >
          Previous
        </Link>
      ) : null}

      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNumber = index + 1

        return index === currentPageIndex ? (
          <div css={nonLinkItemStyles} key={index}>
            {pageNumber}
          </div>
        ) : (
          <Link
            css={itemStyles}
            key={index}
            to={index === 0 ? '/episodes' : `/episodes/page-${pageNumber}`}
          >
            {pageNumber}
          </Link>
        )
      })}

      {currentPageIndex !== totalPages - 1 ? (
        <Link css={itemStyles} to={`/episodes/page-${nextPageNumber}`}>
          Next
        </Link>
      ) : null}
    </div>
  )
}

export default Pagination
