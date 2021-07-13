import { moviesApi, tvApi } from 'api';
import React from 'react';
import DetailPresenter from './DetailPresenter';

export default class DetailContainer extends React.Component{
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  componentDidMount = async() => {
    const { match : { params: {id}}, 
    history: { push } ,
    location: { pathname }}= this.props;
    const { isMovie } = this.state;
    this.isMovie = pathname.includes("/movie/");
    const parseId = Number(id);
    if(!Number(parseId)) {
      return push("/");
    }
    let result = null;
    try {
      if (isMovie) {
        ({data: result} = await moviesApi.movieDetail(parseId));
      } else {
        ({data: result} = await tvApi.showDetail(parseId));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  } 

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter
    result = {result}
    error = {error}
    loading = {loading}
    />;
  }
}