import React, { Component, Fragment } from 'react'
import Layout from '../component/Layout/Layout';

import FullCalendar from '@fullcalendar/react'
import deLocale from '@fullcalendar/core/locales/de';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import bootstrapPlugin from '@fullcalendar/bootstrap';


import Nabbar from "../component/Nabbar";
import { BlogBanner, MainBanner } from "../component/Banner";
import Data from "../data";
import moment from "moment";


class Events extends Component {


  _isMounted = false;
  constructor() {
    super();
    this.state = {
      calendarWeekends: true,
      calendarEvents: [ // initial event data
        { title: 'Event Now', start: new Date() }
      ]
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this.getEvents()
  }

  getEvents() {
    fetch( "https://" + Data[0].config.cmsHost + "/Events" )
      .then( res => res.json() )
      .then( ( data ) => {
        console.log(data)
        data = data.map((item) => {
          let format = ((item.wholeDay !== undefined && item.wholeDay) ? "YYYY-MM-DD" : "")
          let start = moment(new Date(item.StartDate)).format(format)
          let end = moment(new Date(item.EndDate)).format(format)
          return { title: item.Title, start: start, end: end, url: "/events/" + item.id }
        })
        console.log(data)
        if ( this._isMounted )
          this.setState( {calendarEvents: data} )
      } )
  }

  render() {

    return (
      <Fragment>
        <Layout>
          <Nabbar />
          <BlogBanner />
          <div className={"container"}>
            <div className='demo-app'>
              <div className='demo-app-top'>
                <button onClick={ this.toggleWeekends }>toggle weekends</button>&nbsp;
                <button >go to a date in the past</button>&nbsp;
                (also, click a date/time to add an event)
              </div>
              <div className='demo-app-calendar'>
                <FullCalendar
                  defaultView="dayGridMonth"
                  header={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                  }}
                  plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrapPlugin ]}
                  weekends={ this.state.calendarWeekends }
                  events={ this.state.calendarEvents }
                  dateClick={ this.handleDateClick }
                  locale={deLocale}
                  themeSystem={"bootstrap"}
                  selectable={true}
                  eventClick={this.handleDateClick}
                />
              </div>
            </div>
          </div>
        </Layout>
      </Fragment>
    )
  }
  toggleWeekends = () => {
    this.setState({ // update a property
                    calendarWeekends: !this.state.calendarWeekends
                  })
  }

  handleDateClick = (arg) => {
    console.log(arg)

  }
}

export default Events;
