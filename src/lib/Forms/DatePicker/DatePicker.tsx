import * as React from 'react';
import { cssClasses, dateFormat } from '../../internals';

import './DatePicker.css';

export interface IDatePickerProps {
  value: Date;
  onChange: (event) => void;
}
export interface IDatePickerState {
  pickerVisibility: boolean;
  innerValue: Date;
}

const SATURDAY = 6;

export default class DatePicker extends React.Component<IDatePickerProps, IDatePickerState> {
  constructor(props) {
    super(props);
    this.state = {
      pickerVisibility: false,
      innerValue: props.value
    };
    this.onDateClick              = this.onDateClick.bind(this);
    this.showPreviousMonth        = this.showPreviousMonth.bind(this);
    this.showNextMonth            = this.showNextMonth.bind(this);
    this.onNgClick                = this.onNgClick.bind(this);
    this.onOkClick                = this.onOkClick.bind(this);
    this.toggleCalendarVisibility = this.toggleCalendarVisibility.bind(this);
  }

  toggleCalendarVisibility(event) {
    this.setState((prevState: IDatePickerState) => ({
      pickerVisibility: !prevState.pickerVisibility
    }))
  }

  showPreviousMonth(event) {
    this.setState((prevState: IDatePickerState) => {
      const d = prevState.innerValue;
      return { innerValue: new Date(d.getFullYear(), d.getMonth() - 1, d.getDate()) };
    });
  }

  showNextMonth(event) {
    this.setState((prevState: IDatePickerState) => {
      const d = prevState.innerValue;
      return { innerValue: new Date(d.getFullYear(), d.getMonth() + 1, d.getDate()) };
    });
  }

  onDateClick(dateNum: number) {
    this.setState((prevState: IDatePickerState) => {
      const d = prevState.innerValue;
      return { innerValue: new Date(d.getFullYear(), d.getMonth(), dateNum) };
    });
  }

  onNgClick(event) {
    this.setState({
      pickerVisibility: false,
      innerValue: this.props.value
    });
  }

  onOkClick(event) {
    this.props.onChange(this.state.innerValue);
    this.setState({
      pickerVisibility: false
    });
  }

  buildWeeksArray() {
    const weeks: any[][] = [];
    const year  = this.state.innerValue.getFullYear();
    const month = this.state.innerValue.getMonth();

    let weekNumber = 0;
    weeks[weekNumber] = (new Array(7)).fill(null);
    for (let i = 1; i <= 31; ++i) {
      const day = (new Date(year, month, i)).getDay();
      weeks[weekNumber][day] = i;
      if (day === SATURDAY) {
        weekNumber += 1;
        weeks[weekNumber] = (new Array(7)).fill(null);
      }
    }
    return weeks;
  }

  buildCalender(weeks: any[][]) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <table className="DatePicker__calendar">
        <colgroup className="DatePicker__calendar-column--sunday"/>
        <colgroup className="DatePicker__calendar-column--monday"/>
        <colgroup className="DatePicker__calendar-column--tuesday"/>
        <colgroup className="DatePicker__calendar-column--wednesday"/>
        <colgroup className="DatePicker__calendar-column--thursday"/>
        <colgroup className="DatePicker__calendar-column--friday"/>
        <colgroup className="DatePicker__calendar-column--saturday"/>
        <thead className="DatePicker__calendar-header">
          <tr className="DatePicker__calendar-header-row">
            <th>
              <span className="DatePicker__calendar-chevron"
                onClick={this.showPreviousMonth}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 17.719 2.5 L 8 12.051 L 17.672 21.534"
                    style={{"fill": "none", "stroke": "rgba(0, 0, 0, 0.56)", "strokeWidth": 3}} />
                  <path d="M 24.407 18.581 C 24.407 18.581 24.407 18.581 24.407 18.581 Z"
                    style={{"fill": "none", "stroke": "black"}} />
                </svg>
              </span>
            </th>
            <th colSpan={5} className="DatePicker__calendar-target-month">
              {dateFormat(this.state.innerValue, 'MMM yyyy')}
            </th>
            <th>
              <span className="DatePicker__calendar-chevron"
                onClick={this.showNextMonth}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 17.719 21.534 L 8 11.983 L 17.672 2.5"
                    style={{"fill": "none", "stroke": "rgba(0, 0, 0, 0.56)", "strokeWidth": 3}}
                    transform="matrix(-1, 0, 0, -1, 25.719, 24.034)" />
                  <path d="M 24.407 18.581 C 24.407 18.581 24.407 18.581 24.407 18.581 Z"
                    style={{"fill": "none", "stroke": "black"}} />
                </svg>
              </span>
            </th>
          </tr>
          <tr className="DatePicker__calendar-header-row">
            {days.map(day => <th className="DatePicker__calendar-column" key={day}>{day}</th>)}
          </tr>
        </thead>
        <tbody className="DatePicker__calendar-body">
          {weeks.map((week, weekNumber) =>
            <tr className="DatePicker__calendar-date-row" key={weekNumber}>
              {week.map((date, day) => {
                const className = +this.state.innerValue.getDate() === +date
                  ? 'DatePicker__calendar-date DatePicker__calendar-date--selected'
                  : 'DatePicker__calendar-date';
                return (
                  <td className={className}
                    key={day}
                    onClick={this.onDateClick.bind(this, date)}>{date}</td>
                );
              })}
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    const bodyCssClasses = cssClasses({
      'DatePicker__body': true,
      'DatePicker__body--open': this.state.pickerVisibility
    });

    return (
      // <div tabIndex={0} className="DatePicker" onBlur={this.toggleCalendarVisibility}>
      <div tabIndex={0} className="DatePicker">
        {/* input form */}
        <div className="DatePicker__input" onClick={this.toggleCalendarVisibility}>
          {dateFormat(this.props.value, 'yyyy/MM/dd')}
          <span className="DatePicker__toggle-button">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="18" style={{"fill": "rgba(0, 0, 0, 0.54)"}} rx="2" ry="2"/>
              <rect x="5" y="9.004" width="14" height="10.996" style={{"fill": "rgb(255, 255, 255)"}}/>
              <rect x="6" y="2" width="2" height="2" style={{"fill": "rgba(0, 0, 0, 0.54)"}}/>
              <rect x="16" y="2" width="2" height="2" style={{"fill": "rgba(0, 0, 0, 0.54)"}}/>
              <rect x="7" y="11" width="3" height="3" style={{"fill": "rgba(0, 0, 0, 0.54)"}}/>
            </svg>
          </span>
        </div>

        {/* body */}
        <div className={bodyCssClasses}>
          {/*  header */}
          <div className="DatePicker__body-header">
            <span className="DatePicker__body-header-year">
              {dateFormat(this.state.innerValue, 'yyyy')}
            </span>
            <span className="DatePicker__body-header-date">
              {dateFormat(this.state.innerValue, 'EEE, MMM d')}
            </span>
          </div>
          {/* calendar */}
          {this.buildCalender(this.buildWeeksArray())}

          {/* buttons */}
          <div className="DatePicker__buttons">
            <button type="button"
              className="DatePicker__button DatePicker__button--ng"
              onClick={this.onNgClick}>NG</button>
            <button type="button"
              className="DatePicker__button DatePicker__button--ok"
              onClick={this.onOkClick}>OK</button>
          </div>
        </div>
      </div>
    );
  }
}

