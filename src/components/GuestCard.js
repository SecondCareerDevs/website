import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
      <div className="guest_card">
        <div className="guest_card-img-wrap">
          {imgUrl ? (
            <img className="guest_card-img" src={imgUrl} alt={name} />
          ) : (
            <div className="guest_card-fake-img" />
          )}
        </div>
        <div className="guest_card-name">{name}</div>
        {twitter && (
          <div className="guest_card-twitter">
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
