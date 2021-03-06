import React, { Component } from 'react'
import { Fragment } from 'react';
import Layout from '../component/Layout/Layout';
import Blog2 from '../container/Blog2/Index';
import Nabbar from '../component/Nabbar';
import {BlogBanner} from '../component/Banner';

class Home extends Component {
    render() {        
                
        return (
            <Fragment>
                <Layout>
                    <Nabbar /> 
                    <BlogBanner />        
                    <Blog2 />
                </Layout>
            </Fragment>
        )
    }
}
export default Home;