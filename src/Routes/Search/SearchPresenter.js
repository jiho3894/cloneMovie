import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Loader from 'Components/Loader';
import Section from 'Components/Section';
import Error from 'Components/Error';
import Poster from 'Components/Poster';

const Container = styled.div`
  padding: 0 10px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all:unset;
  font-size: 30px;
  width: 500px;
`;

const SearchPresenter = ({ 
  movieResults, 
  tvResults, 
  error, 
  loading, 
  searchTerm, 
  updateTerm,
  handleSubmit }) => (
    <Container>
      <Helmet>
        <title>Search | Nomflix</title>
      </Helmet>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Search..." value={searchTerm} onChange={updateTerm}/>
      </Form>
      {loading ? (<Loader/>) : (
        <>
          {movieResults && movieResults.length > 0 && (
            <Section title="Movie Results">
            {movieResults.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date ? movie.release_date.substring(0, 4) : ""}
                isMovie={true}
              />
            ))}
          </Section>
          )}
          {tvResults && tvResults.length > 0 && (
            <Section title="TV Show Results">
            {tvResults.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date ? show.first_air_date.substring(0, 4) : ""}
              />
            ))}
          </Section>
          )}
          {error && <Error text={error} />}
          {movieResults &&
            tvResults &&
            movieResults.length === 0 &&
            tvResults.length === 0 && (
              <Error text="Nothing Found"/>
            )}
        </>
      )}
    </Container>
  );

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  showResults: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  searchTerm : PropTypes.string,
  handleSubmit : PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;