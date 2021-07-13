import { moviesApi, tvApi } from '../../api';
import React from 'react';
import SearchPresenter from './SearchPresenter';

export default class SearchContainer extends React.Component {
  state = {
    moiveResults: null,
    showResults: null,
    searchTerm: "",
    error: null,
    loading: false
  };

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if(searchTerm !== "") {
      this.searchByTerm();
    }
  }

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading : true });
    try {
      const {data : {results: moiveResults}} = await moviesApi.search(searchTerm);
      const {data : {results: showResults}} = await tvApi.search(searchTerm);
      this.setState = ({ 
        moiveResults ,
        showResults
      });
    } catch {
      this.setState({
        error: "영화를 찾지 못했습니다."
      });
    } finally {
      this.setState({ loading : false });
    }
  }

  render() {
    const { moiveResults, showResults, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
      moiveResults = {moiveResults}
      showResults = {showResults}
      searchTerm = {searchTerm}
      error = {error}
      loading = {loading}
      handleSubmit = {this.handleSubmit}
      />
    );
  }
}
