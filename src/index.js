class D {
  constructor(...args) {
    this._date = new Date(...args);
  }

  // Full Year: 2022
  get year() {
    return this._date.getFullYear();
  }

  // Short Year: 22
  get yr() {
    return this._date.
    pass
  }

  // Full Month: October
  get month() {
    let monthNum = this._date.getMonth();
    let monthName = ''

    switch(monthNum) {
      case 0:
        monthName = 'January';
        break;
      case 1:
        monthName = 'February';
        break;
      case 2:
        monthName = 'March';
        break;
      case 3:
        monthName = 'April';
        break;
      case 4:
        monthName = 'May';
        break;
      case 5:
        monthName = 'June';
        break;
      case 6:
        monthName = 'July';
        break;
      case 7:
        monthName = 'August';
        break;
      case 8:
        monthName = 'September';
        break;
      case 9:
        monthName = 'October';
        break;
      case 10:
        monthName = 'November';
        break;
      case 11:
        monthName = 'December';
        break;
    }
    return monthName
  }

  // Short Month: Oct
  get mon() {
    // return this._date.month; = undefined?
    return this.month.slice(0, 3);
  }

  // Full Day: Monday
  get day() {
    let dayNum = this._date.getDay();
    let dayName = ''

    switch(dayNum) {
      case 0:
        dayName = 'Sunday';
        break;
      case 1:
        dayName = 'Monday';
        break;
      case 2:
        dayName = 'Tuesday';
        break;
      case 3:
        dayName = 'Wednesday';
        break;
      case 4:
        dayName = 'Thursday';
        break;
      case 5:
        dayName = 'Friday';
        break;
      case 6:
        dayName = 'Saturday';
    }
    return dayName
  }

  // Short Day: Mon
  get dy() {
    return this.day.slice(0, 3);
  }

  // Date: 16
  get date() {
    return this._date.getDate();
  }

  // Hour: 13
  get hours() {
    return this._date.getHours();
  }

  // Minutes: 29
  get mins() {
    return this._date.getMinutes();
  }

  // Seconds: 3
  get secs() {
    return this._date.getSeconds();
  }
}

let today = new D();
console.log(today.mon);
console.log(today.dy);
