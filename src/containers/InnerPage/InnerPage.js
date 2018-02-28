import React, {Component, Fragment} from 'react';
import axios from 'axios';
import Loader from '../../components/UI/Loader/Loader';

class InnerPage extends Component {

    state = {
        currentPage: null,
        loading: true
    };

    componentDidMount(){
        const id = this.props.match.params.id;
        let currentPage = this.state.currentPage;
        axios.get(`/pages/${id}.json`).then(response =>{
            currentPage = {...response.data, id: id};
            this.setState({currentPage, loading: false});
        })

    };

    componentDidUpdate(){
        const id = this.props.match.params.id;
        let currentPage = this.state.currentPage;
        if (currentPage !== null && this.state.currentPage.id !== id && this.state.loading === false) {
            this.setState({loading: true});
            axios.get(`/pages/${id}.json`).then(response => {
                currentPage = {...response.data, id: id};
                this.setState({currentPage, loading: false})
            })
        }
    };


    render () {
        if (!this.state.loading) {
            return (
                <Fragment>
                    <h1>{this.state.currentPage.title}</h1>
                    <p>{this.state.currentPage.content}</p>
                </Fragment>
            )
        } else {
            return (
                <Loader />
            )
        }
    }
}

export default InnerPage;