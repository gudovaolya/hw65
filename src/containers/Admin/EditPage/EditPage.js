import React, {Component} from 'react';
import axios from 'axios';
import Loader from '../../../components/UI/Loader/Loader';
import './EditPage.css';

class EditPage extends Component {

    state = {
        page: {
            title: '',
            subtitle:'',
            content: '',
            id: 'about'
        },
        changeSelectPage: false,
        loading: true
    };


    showValueFields = () => {
        const id = this.state.page.id;
        const page = {...this.state.page};
        if (this.state.changeSelectPage){
            this.setState({changeSelectPage: false, loading: true})
        }
        axios.get(`/pages/${id}.json`).then(response => {
            page.title = response.data.title;
            page.subtitle = response.data.subtitle;
            page.content = response.data.content;
            this.setState({page, loading: false});
        });
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
        const id = this.state.page.id;
        const updatePage = {
            title: this.state.page.title,
            subtitle: this.state.page.subtitle,
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
        if (!this.state.loading){
            return (
                <div className="form-block container content">
                    <h1 className="form-block__title">Edit Page</h1>
                    <form>
                        <div className="form-row">
                            <label htmlFor="id">Select page:</label>
                            <select  value={this.state.page.id}
                                     onChange={(event) => this.changeValues(event)}
                                     name="id"
                            >
                                <option value="about">about</option>
                                <option value="contacts">contacts</option>
                                <option value="history">history</option>
                                <option value="partners">partners</option>
                                <option value="careers">careers</option>
                            </select>
                        </div>
                        <div className="form-row">
                            <label>Edit title page:</label>
                            <input
                                className="field"
                                type="text"
                                name="title"
                                onChange={(event) => this.changeValues(event)}
                                value={this.state.page.title}
                            />
                        </div>
                        <div className="form-row">
                            <label>Edit subtitle page:</label>
                            <input
                                className="field"
                                type="text"
                                name="subtitle"
                                onChange={(event) => this.changeValues(event)}
                                value={this.state.page.subtitle}
                            />
                        </div>
                        <div className="form-row">
                           <label>Edit content page (you can use HTML tags):</label>
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