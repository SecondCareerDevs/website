import React, { Fragment } from 'react'
import GuestCard from '../components/GuestCard'
import PastGuests from '../components/PastGuests'
import SEO from '../components/seo'

const About = () => (
  <Fragment>
    <SEO title="About" keywords={['Second Career Devs', 'Career Changers']} />
    <h2>About</h2>

    <section>
      <p>
        Second Career Devs has a simple mission: find people who started their
        careers doing something else, tell their stories, and share their
        lessons.
      </p>

      <p>
        Many people start off their careers as something other than a software
        engineer. And yet, somehow, we've all found our way to the same field. I
        am convinced that these "roads less taken" have things to teach all of
        us, including the software engineers who always knew what they wanted to
        do.
      </p>
    </section>

    {/* Past Guests Go Here */}
    <PastGuests />

    <section>
      <h3>The Host - Kyle Shevlin</h3>

      <p>Hi everyone,</p>

      <p>
        My name is Kyle Shevlin and I am so glad that you found this podcast.
        Before I became a software engineer, I was a pastor. I spent four years
        teaching adults and children. While earning my masters degree, I taught
        myself how to code for fun and grew to love it. Years later, I noticed
        that I often used the skills I had earned as a pastor in my current job
        as a software developer. I realized that there were probably others like
        me, people who had gone through a drastic career change, but had
        insights and lessons that could have only been learned from their
        previous careers. This led to the creation of Second Career Devs.
      </p>

      <p>
        I hope that you get a lot of value out of listening to these episodes.
        The people I meet through this show are some of the most wonderful and
        inspiring people you'll ever meet.
      </p>

      <p>
        Never hesitate to reach out to me with questions or if you just want to
        say a kind word about the show. I would love to get to know you. My DMs
        are always open.
      </p>

      <p>Thanks again for listening,</p>

      <p>Kyle</p>

      <GuestCard
        guest={{
          name: 'Kyle Shevlin',
          twitter: 'kyleshevlin',
          imgUrl:
            'https://pbs.twimg.com/profile_images/786039150667411456/t_0mWTZk.jpg',
        }}
      />
    </section>
  </Fragment>
)

export default About
