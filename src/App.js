import React, { Component } from 'react';
import Booking from './Booking';
import Meal from './Meal';
import Error from './Error';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalMeal: [],
      totalError: []
    };
  }

  handleSubmit = (name, daterange) => {
    var nameD = name.split('\n');
    var dateD = daterange
      .split('\n')
      .join()
      .split(' to ')
      .join()
      .split(',');
    var userArr = [];
    var j = 0;
    //UserArr having each user object-name, startdate,enddate
    for (let i = 0; i < nameD.length; i++) {
      userArr.push({ name: nameD[i], startD: dateD[j++], endD: dateD[j++] });
    }

    var resultUser = [];
    var ErrorUser = [];
    //check if date is valid or not
    for (let i = 0; i < userArr.length; i++) {
      var startDate = new Date(userArr[i].startD);
      var endDate = new Date(userArr[i].endD);
      if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime())) {
        if (startDate < endDate) {
          resultUser.push(userArr[i]);
          continue;
        }
      }
      ErrorUser.push(userArr[i].name);
    }

    this.setState({
      totalMeal: resultUser,
      totalError: ErrorUser
    });
  };

  render() {
    var mealDetail = [];
    this.state.totalMeal.forEach(item => {
      var sD = new Date(...item.startD.split('-'));
      var eD = new Date(...item.endD.split('-'));
      var timeDiff = Math.abs(sD.getTime() - eD.getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

      var currD = sD;
      for (let i = 0; i <= diffDays; i++) {
        var month = currD.getMonth() + 1; //months from 1-12
        var day = currD.getDate();
        var year = currD.getFullYear();
        var newdate = year + '-' + month + '-' + day;
        mealDetail.push({ name: item.name, date: newdate });
        currD = new Date(currD);
        currD.setDate(currD.getDate() + 1);
      }
    });

    mealDetail.sort((a, b) => {
      return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
    });

    var sortedMeal = mealDetail.map(({ name, date }) => {
      return <Meal hackername={name} date={date} />;
    });

    var errorDetail = this.state.totalError.map(item => {
      return <Error hackername={item} />;
    });

    return (
      <div className="App">
        <h3 className="header">Hacker Hostel</h3>
        <Booking handleSubmit={this.handleSubmit} />
        {errorDetail}
        <ol>{sortedMeal}</ol>
      </div>
    );
  }
}

export default App;
