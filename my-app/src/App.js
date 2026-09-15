import React, { Component } from 'react';

import BpkButton from '@skyscanner/backpack-web/bpk-component-button';

import BpkText from '@skyscanner/backpack-web/bpk-component-text';

import BpkCalendar, {
  CALENDAR_SELECTION_TYPE,
} from '@skyscanner/backpack-web/bpk-component-calendar';

import format from 'date-fns/format';

const formatDateFull = (date) =>
  format(date, 'EEEE, do MMMM yyyy');

const formatMonth = (date) =>
  format(date, 'MMMM yyyy');

const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true,
  },
  {
    name: 'Monday',
    nameAbbr: 'Mon',
    index: 1,
    isWeekend: false,
  },
  {
    name: 'Tuesday',
    nameAbbr: 'Tue',
    index: 2,
    isWeekend: false,
  },
  {
    name: 'Wednesday',
    nameAbbr: 'Wed',
    index: 3,
    isWeekend: false,
  },
  {
    name: 'Thursday',
    nameAbbr: 'Thu',
    index: 4,
    isWeekend: false,
  },
  {
    name: 'Friday',
    nameAbbr: 'Fri',
    index: 5,
    isWeekend: false,
  },
  {
    name: 'Saturday',
    nameAbbr: 'Sat',
    index: 6,
    isWeekend: true,
  },
];

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedDate: null,
      currentMonth: new Date(),
    };
  }

  handleDateSelect = (date) => {
    this.setState({
      selectedDate: date,
    });
  };

  handleMonthChange = (event, { month }) => {
    if (month instanceof Date && !Number.isNaN(month.getTime())) {
      this.setState({
        currentMonth: month,
      });
    }
  };

  render() {
    const { selectedDate, currentMonth } = this.state;

    return (
      <div className="App">
        <BpkText tagName="h1" textStyle="xxl">
          Flight Schedule
        </BpkText>

        <BpkCalendar
          id="calendar"
          daysOfWeek={daysOfWeek}
          weekStartsOn={0}
          changeMonthLabel="Change month"
          nextMonthLabel="Next month"
          previousMonthLabel="Previous month"
          formatDateFull={formatDateFull}
          formatMonth={formatMonth}
          onDateSelect={this.handleDateSelect}
          onMonthChange={this.handleMonthChange}
          initiallyFocusedDate={currentMonth}
          selectionConfiguration={{
            type: CALENDAR_SELECTION_TYPE.single,
            date: selectedDate,
          }}
        />

        <BpkButton
          onClick={() => alert('Date selected!')}
        >
          Continue
        </BpkButton>
      </div>
    );
  }
}