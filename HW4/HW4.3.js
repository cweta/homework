class MonthException {
    constructor(message) {
      this.name = "MonthException";
      this.message = message;
    }
  }
  function months() {
    let browserLang = navigator.language;
    const month = Intl.DateTimeFormat(browserLang, { month: "long" });
    return Array.from({ length: 12 }, (_, i) =>
      month.format(new Date(0, 0).setMonth(i))
    );
  }
  function showMonthName(month) {
    let monthName = this.months()[month - 1];
    if (monthName) {
      return monthName;
    } else {
      throw new MonthException("Incorrect month number");
    }
  }
  showMonthName(3)