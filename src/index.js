class D {
  constructor(...args) {
    this._date = new Date(...args);
  }

  // METHODS -~-~-~-~-~-~-~-~-~-~-~-~-~-~--~-~-~-~-~-~-~-~-~-~-~-~-~-~-
  when() {
    let buildStr = '';

    let ago = ' ago';
    let fromNow = ' from now';
    let today = 'Today';

    let years = (this.getFullYear - this._date.getFullYear);
    let months = (this.getMonth - this._date.getMonth);
    let days = (this.getDate - this._date.getDate);
    let hours = (this.getHours - this._date.getHours);
    let minutes = (this.getMinutes - this._date.getMinutes);
    let seconds = (this.getSeconds - this._date.getSeconds);

    if (this == this._date) {
      buildStr = today;
    }

    return buildStr;
  }

  // GETTERS -~-~-~-~-~-~-~-~-~-~-~-~-~-~--~-~-~-~-~-~-~-~-~-~-~-~-~-~-
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
    let monthName = '';

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
    return monthName;
  }

  // Short Month: Oct
  get mon() {
    return this.month.slice(0, 3);
  }

  // Full Day: Monday
  get day() {
    let dayNum = this._date.getDay();
    let dayName = '';

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
    return dayName;
  }

  // Short Day: Mon
  get dy() {
    return this.day.slice(0, 3);
  }

  // Date: 16
  get date() {
    return this._date.getDate();
  }

  // Date Padded: 03
  get datePadded() {
    let date = this.date;

    if (date >= 1 && date <= 9) {
      date = date.toString().padStart(2, '0');
    }

    return date;
  }

  // Date Ordinal: 1st, 2nd, 3rd, 4th
  get dateOrdinal() {
    let date = this.date;

    if (date > 3 && date < 21) {
      return date + 'th';
    }

    switch (date % 10) {
      case 1:
        return date + 'st';
      case 2:
        return date + 'nd';
      case 3: 
        return date + 'rd';
      default:
        return date + 'th';
    }
  }

  // Hour: 13
  get hours() {
    return this._date.getHours();
  }

  // Hour Padded: 04
  get hoursPadded() {
    let hour = this.hours;

    if (hour >= 0 && hour <= 9) {
      hour = hour.toString().padStart(2, '0');
    }

    return hour;
  }

  // Minutes: 29
  get mins() {
    return this._date.getMinutes();
  }

  // Minutes Padded: 05
  get minsPadded() {
    let min = this.mins;

    if (min >= 0 && min <= 9) {
      min = min.toString().padStart(2, '0');
    }

    return min;
  }

  // Seconds: 12
  get secs() {
    return this._date.getSeconds();
  }

  // Seconds Padded: 06
  get secsPadded() {
    let sec = this.secs;

    if (sec >= 0 && sec <= 9) {
      sec = sec.toString().padStart(2, '0');
    }

    return sec;
  }

  // METHODS -~-~-~-~-~-~-~-~-~-~-~-~-~-~--~-~-~-~-~-~-~-~-~-~-~-~-~-~-
  format(maskString) {
    let returnString;

    // if no arguments are passed, return this default date string
    if (typeof maskString === 'undefined') {
      returnString = `${this.month} ${this.date} ${this.year}`;
      return returnString;
    }

    let arr = Array.from(maskString);
    let returnArr = [];

    for (let i = 0; i < arr.length; i++) {
      let ch = arr[i]
      let newCh;

      switch(ch) {
        // year full
        case 'Y':
          newCh = this.year;
          break;
        // year short
        case 'y':
          newCh = this.yr;
          break;
        // month full
        case 'M':
          newCh = this.month;
          break;
        // month short
        case 'm':
          newCh = this.mon;
          break;
        // day full
        case 'X':
          newCh = this.day;
          break;
        // day short
        case 'x':
          newCh = this.dy;
          break;
        // date ordinal suffix
        case '#':
          newCh = this.dateOrdinal;
          break;
        // date padded
        case 'D':
          newCh = this.datePadded;
          break;
        // date
        case 'd':
          newCh = this.date;
          break;
        // hours padded
        case 'H':
          newCh = this.hoursPadded;
          break;
        // hours
        case 'h':
          newCh = this.hours;
          break;
        // minutes padded
        case 'I':
          newCh = this.minsPadded;
          break;
        // minutes
        case 'i':
          newCh = this.mins;
          break;
        // seconds padded
        case 'S':
          newCh = this.secsPadded;
          break;
        // seconds
        case 's':
          newCh = this.secs;
          break;
        default:
          returnArr.push(ch);
      }

      if (newCh === undefined) {

      } else {
        returnArr.push(newCh);
      } 
    }

    return returnArr.join('');
  }
}

let today = new D(2017, 0, 2, 3, 4, 5);
let another = new D(2022, 5, 13);

// January 02 2017
console.log(today.format());
console.log(today.format('M #'));
console.log(today.format('M:X:Y'));
console.log(today.format('H:I:S'));

console.log(another.when())
