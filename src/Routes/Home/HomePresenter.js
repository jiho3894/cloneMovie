import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Error from 'Components/Error';
import Poster from 'Components/Poster';

const Container = styled.div`
  padding: 0 10px;
`;

const HomePresenter = ({ nowPlaying, 
  upcoming, 
  popular, 
  error, 
  loading }) => loading ? (<Loader/>) :
  (<Container>
    <Helmet title="Movies | Nomflix"/>
    {nowPlaying && nowPlaying.length > 0 && (
      <Section title="TV 프로그램">
        {nowPlaying.map(movie => (
          <Poster
          key={movie.id}
          id={movie.id}
          imageUrl={movie.poster_path}
          title={movie.original_title}
          rating={movie.vote_average}
          year={movie.release_date.substring(0, 4)}
          isMovie={true}
        />  
        ))}
      </Section>
    )}
    {upcoming && upcoming.length > 0 && (
      <Section title="영화 프로그램">
        {upcoming.map(movie => (
          <Poster
          key={movie.id}
          id={movie.id}
          imageUrl={movie.poster_path}
          title={movie.original_title}
          rating={movie.vote_average}
          year={movie.release_date.substring(0, 4)}
          isMovie={true}
        />  
        ))}
      </Section>
    )}
    {popular && popular.length > 0 && (
      <Section title="인기 영화">
        {popular.map(movie => (
          <Poster
          key={movie.id}
          id={movie.id}
          imageUrl={movie.poster_path}
          title={movie.original_title}
          rating={movie.vote_average}
          year={movie.release_date}
          isMovie={true}
        />  
        ))}
      </Section>
    )}
    {error && <Error text={error}/>}
  </Container>);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
}

export default HomePresenter;