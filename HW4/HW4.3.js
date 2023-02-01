function months() {
    let browserLang = navigator.language; // забираем язык браузера который выставлен у тебя (англ, русский)
    const month = Intl.DateTimeFormat(browserLang, { month: "long" });
    return Array.from({ length: 12 }, (_, i) => month.format(new Date(0, 0).setMonth(i)));
  } 





  let MonthException= class {
    construktor(message){
        this.name=MonthException
        const month = Intl.DateTimeFormat(browserLang, { month: "long" });
    return Array.from({ length: 12 }, (_, i) => month.format(new Date(0, 0).setMonth(i)))
    }
       
    }