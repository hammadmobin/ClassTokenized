import React from 'react';
import axios from 'axios';
import Course from '../components/Course';
import MediaCard from'../components/Shared/CardComponent'

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/courses`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div>
        {
          this.state.persons
            .map(person =>
              <MediaCard key={person.id} title={person.title} />
            )
        }
      </div>
    )
  }
}
