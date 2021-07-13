import React from 'react';
import HomePresenter from './HomePresenter';
import { moviesApi } from '../../api';

export default class HomeContainer extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };

  componentDidMount = async() => {
    try {
      const {
        data: { results: nowPlaying }
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming }
      } = await moviesApi.upcoming();
      const {
        data: { results: popular }
      } = await moviesApi.popular();
      this.setState({
        nowPlaying,
        upcoming,
        popular
      });
    } catch {
      this.setState({
        error: "영화를 찾지 못했습니다."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
      nowPlaying = {nowPlaying}
      upcoming = {upcoming}
      popular = {popular}
      error = {error}
      loading = {loading}
      />
    );
  }
}