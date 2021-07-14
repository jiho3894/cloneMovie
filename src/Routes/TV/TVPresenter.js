import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Error from 'Components/Error';
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 0 10px;
`;

const TVPresenter = ({ topRated, 
  popular, 
  airingToday, 
  error, 
  loading }) => loading ? (<Loader/>) : 
  <Container>
    <Helmet>
      <title>TV | Nomflix</title>
    </Helmet>
    {topRated && topRated.length > 0 && (
      <Section title="Top Rated Shows">
      {topRated.map(show => (
        <Poster
          key={show.id}
          id={show.id}
          imageUrl={show.poster_path}
          title={show.original_name}
          rating={show.vote_average}
          year={show.first_air_date.substring(0, 4)}
        />
      ))}
    </Section>
    )}
    {popular && popular.length > 0 && (
      <Section title="Popular Shows">
      {popular.map(show => (
        <Poster
          key={show.id}
          id={show.id}
          imageUrl={show.poster_path}
          title={show.original_name}
          rating={show.vote_average}
          year={show.first_air_date.substring(0, 4)}
        />
      ))}
    </Section>
    )}
    {airingToday &&airingToday.length > 0 && (
      <Section title="Airing Today">
      {airingToday.map(show => (
        <Poster
          key={show.id}
          id={show.id}
          imageUrl={show.poster_path}
          title={show.original_name}
          rating={show.vote_average}
          year={show.first_air_date.substring(0, 4)}
        />
      ))}
    </Section>
    )}
    {error && <Error text={error}/>}
  </Container>

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
}

export default TVPresenter;