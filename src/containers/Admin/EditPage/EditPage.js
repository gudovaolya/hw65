import React, {Component} from 'react';
import axios from 'axios';
import Loader from '../../../components/UI/Loader/Loader';
import './EditPage.css';

class EditPage extends Component {

    state = {
        page: {
            title: '',
            content: '',
            id: 'about'
        },
        changeSelectPage: false,
        loading: true
    };


    showValueFields = () => {
        const id = this.state.page.id;
        const page = {...this.state.page};
        this.setState({loading: false})
        axios.get(`/pages/${id}.json`).then(response => {
            page.title = response.data.title;
            page.content = response.data.content;
            this.setState({page, loading: true});
        });
        if (this.state.changeSelectPage){
            this.setState({changeSelectPage: false})
        }
    };

    changeValues = (event) => {
        const page = {...this.state.page, [event.target.name]: event.target.value};
        if (event.target.name === 'id'){
            this.setState({changeSelectPage: true})
        }
        this.setState({page});
    };

    editPageHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const id = this.state.page.id;
        const updatePage = {
            title: this.state.page.title,
            content: this.state.page.content
        };
        axios.patch(`/pages/${id}.json`, updatePage).then(response => {
            this.setState({loading: false});
        }).finally(() => {
            this.props.history.push(`/pages/${id}`);
        })
    };

    componentDidMount () {
       this.showValueFields();
    };

    componentDidUpdate () {
        if (this.state.changeSelectPage){
            this.showValueFields();
        }
    };


    render () {
        console.log(this.state.page);
        if (this.state.loading){
            return (
                <div className="form-block container content">
                    <h1 className="form-block__title">Edit Page</h1>
                    <form>
                        <div className="form-row">
                            <label htmlFor="id">Select page</label>
                            <select  value={this.state.page.id}
                                     onChange={(event) => this.changeValues(event)}
                                     name="id"
                            >
                                <option value="about">about</option>
                                <option value="contacts">contacts</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <input
                                className="field"
                                type="text"
                                name="title"
                                placeholder="Enter title"
                                onChange={(event) => this.changeValues(event)}
                                value={this.state.page.title}
                            />
                        </div>
                        <div className="form-row">
                           <textarea
                               className="field field-area"
                               name="content"
                               placeholder="Enter content"
                               onChange={(event) => this.changeValues(event)}
                               value={this.state.page.content}
                           />
                        </div>
                        <div className="form-row-btn">
                            <button className="form-btn" onClick={this.editPageHandler}>Edit</button>
                        </div>
                    </form>
                </div>
            )
        } else {
            return (
                <Loader />
            )
        }

    }
}

export default EditPage;