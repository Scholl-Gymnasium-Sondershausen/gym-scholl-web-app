import React, { Component, Fragment } from 'react'
import Layout from '../component/Layout/Layout';
import Nabbar from '../component/Nabbar';
import { StaticSiteBanner } from '../component/Banner';
import ReactMarkdown from 'react-markdown';
import Data from '../data.json';
import withQueryParams from "react-router-query-params";
import { Helmet } from 'react-helmet'

class EventsDetail extends Component {

  _isMounted = false;
  constructor() {
    super();

    this.state = {
      description: null
    }
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this.getContent()
  }

  getContent() {
    fetch( "https://" + Data[0].config.cmsHost + "/Events/" + this.props.match.params.id )
      .then( res => res.json() )
      .then( ( data ) => {
        if ( this._isMounted )
          this.setState( {description: data.description, title: data.Title, image: (data.Images !== undefined && data.Images.length > 0) ? data.Images[0].url : undefined} )
      } )
  }

  render() {

    return (
      <Fragment>
        <Helmet>
          <title>{ "Impressum" }</title>
        </Helmet>
        <Layout>
          <Nabbar/>
          <StaticSiteBanner image={"https://" + Data[0].config.cmsHost + this.state.image} title={this.state.title}/>
          <section className="blog-grid-one-content p-top-130 p-bottom-130">
            <div className="container">
              <div className="row">
                <div className={"col-12"}>
                  <ReactMarkdown source={this.state.description} escapeHtml={false}/>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </Fragment>
    )
  }
}

export default withQueryParams( {
                                  stripUnknownKeys: false
                                } )(EventsDetail);
