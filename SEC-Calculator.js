function doCalculator(assessmentPeriod,category, years, wage, birthyear, birthMonth){ years = years / 12; if(  (  assessmentPeriod == 'Jan 2012 - Jun 2012' || assessmentPeriod == 'Jul 2012 - Dec 2012' || assessmentPeriod == 'Jan 2013 - Jun 2013' || assessmentPeriod == 'Jul 2013 - Dec 2013' || assessmentPeriod == 'Jan 2014 - Jun 2014' || assessmentPeriod == 'Jul 2014 - Dec 2014'  )  &&  category == 'Regular SEC rates for EEs'  && years > 50 && wage <= 3000 ){ return Math.round(0.08 * wage); }
if(  (  assessmentPeriod == 'Jan 2012 - Jun 2012' || assessmentPeriod == 'Jul 2012 - Dec 2012' || assessmentPeriod == 'Jan 2013 - Jun 2013' || assessmentPeriod == 'Jul 2013 - Dec 2013' || assessmentPeriod == 'Jan 2014 - Jun 2014' || assessmentPeriod == 'Jul 2014 - Dec 2014'  )  &&  category == 'Regular SEC rates for EEs'  && years > 50 && wage > 3000 && wage < 4000 ){ return Math.round(960 - (0.24 * wage)); }
if(  (  assessmentPeriod == 'Jan 2012 - Jun 2012' || assessmentPeriod == 'Jul 2012 - Dec 2012' || assessmentPeriod == 'Jan 2013 - Jun 2013' || assessmentPeriod == 'Jul 2013 - Dec 2013' || assessmentPeriod == 'Jan 2014 - Jun 2014' || assessmentPeriod == 'Jul 2014 - Dec 2014'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >= 13 && wage <= 1500 ){ return Math.round(0.16 * wage); }
if(  (  assessmentPeriod == 'Jan 2012 - Jun 2012' || assessmentPeriod == 'Jul 2012 - Dec 2012' || assessmentPeriod == 'Jan 2013 - Jun 2013' || assessmentPeriod == 'Jul 2013 - Dec 2013' || assessmentPeriod == 'Jan 2014 - Jun 2014' || assessmentPeriod == 'Jul 2014 - Dec 2014'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >= 13 && wage > 1500 && wage <= 3000 ){ return Math.round(240); }
if(  (  assessmentPeriod == 'Jan 2012 - Jun 2012' || assessmentPeriod == 'Jul 2012 - Dec 2012' || assessmentPeriod == 'Jan 2013 - Jun 2013' || assessmentPeriod == 'Jul 2013 - Dec 2013' || assessmentPeriod == 'Jan 2014 - Jun 2014' || assessmentPeriod == 'Jul 2014 - Dec 2014'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years>= 13 && wage > 3000 && wage < 4000 ){ return Math.round(960 - (0.24 * wage)); }
if(  (  assessmentPeriod == 'Jan 2015 - Jun 2015' || assessmentPeriod == 'Jul 2015 - Dec 2015'  )  &&  category == 'Regular SEC rates for EEs'  && years > 50 && years < 65 && wage <= 3000 ){ return Math.round(0.085 * wage); }
if(  (  assessmentPeriod == 'Jan 2015 - Jun 2015' || assessmentPeriod == 'Jul 2015 - Dec 2015'  )  &&  category == 'Regular SEC rates for EEs'  && years > 50 && years < 65 && wage > 3000 && wage <= 4000 ){ return Math.round(1020 - (0.255 * wage)); }
if(  (  assessmentPeriod == 'Jan 2015 - Jun 2015' || assessmentPeriod == 'Jul 2015 - Dec 2015'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >= 13 && years <= 50 && wage <= 1500 ){ return Math.round(0.16 * wage); }
if(  (  assessmentPeriod == 'Jan 2015 - Jun 2015' || assessmentPeriod == 'Jul 2015 - Dec 2015'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >= 13 && years <= 50 && wage > 1500 && wage <= 3000 ){ return Math.round(240); }
if(  (  assessmentPeriod == 'Jan 2015 - Jun 2015' || assessmentPeriod == 'Jul 2015 - Dec 2015'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >= 13 && years <= 50 && wage > 3000 && wage <= 4000 ){ return Math.round(960 - (0.24 * wage)); }
if(  (  assessmentPeriod == 'Jan 2015 - Jun 2015' || assessmentPeriod == 'Jul 2015 - Dec 2015'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years > 50 && years < 65 && wage <= 1500 ){ return Math.round(0.17 * wage); }
if(  (  assessmentPeriod == 'Jan 2015 - Jun 2015' || assessmentPeriod == 'Jul 2015 - Dec 2015'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years > 50 && years < 65 && wage > 1500 && wage <= 3000 ){ return Math.round(255); }
if(  (  assessmentPeriod == 'Jan 2015 - Jun 2015' || assessmentPeriod == 'Jul 2015 - Dec 2015'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years > 50 && years < 65 && wage > 3000 && wage <= 4000 ){ return Math.round(1020 - (0.255 * wage)); }
if(  (  assessmentPeriod == 'Jan 2015 - Jun 2015' || assessmentPeriod == 'Jul 2015 - Dec 2015'  )  &&  category == 'Regular SEC rates for EEs'  && years >= 65 && wage <= 3000 ){ return Math.round(0.115 * wage); }
if(  (  assessmentPeriod == 'Jul 2015 - Dec 2015' || assessmentPeriod == 'Jan 2015 - Jun 2015'  )  &&  category == 'Regular SEC rates for EEs'  && years >= 65 && wage > 3000 && wage <= 4000 ){ return Math.round(1380 - (0.345 * wage)); }
if(  (  assessmentPeriod == 'Jan 2015 - Jun 2015' || assessmentPeriod == 'Jul 2015 - Dec 2015'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >= 65 && wage <= 1500 ){ return Math.round(0.23 * wage); }
if(  (  assessmentPeriod == 'Jan 2015 - Jun 2015' || assessmentPeriod == 'Jul 2015 - Dec 2015'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >= 65 && wage > 1500 && wage <= 3000 ){ return Math.round(345); }
if(  (  assessmentPeriod == 'Jan 2015 - Jun 2015' || assessmentPeriod == 'Jul 2015 - Dec 2015'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >= 65 && wage > 3000 && wage <= 4000 ){ return Math.round(1380 - (0.345 * wage)); }
if(  (  assessmentPeriod == 'Jan 2015 - Jun 2015' || assessmentPeriod == 'Jul 2015 - Dec 2015'  )  &&  category == 'Regular SEC rates for EEs'  && years > 50 && years <= 65 && wage > 3000 && wage <= 4000 ){ return Math.round(1020 - (0.255 * wage)); }
if(  (  assessmentPeriod == 'Jan 2016 - Jun 2016' || assessmentPeriod == 'Jul 2016 - Dec 2016'  )  &&  category == 'Regular SEC rates for EEs'  && years > 50 && years < 65 && wage <= 3000 ){ return Math.round(0.08 * wage); }
if(  (  assessmentPeriod == 'Jan 2016 - Jun 2016' || assessmentPeriod == 'Jul 2016 - Dec 2016'  )  &&  category == 'Regular SEC rates for EEs'  && years > 50 && years < 65 && wage > 3000 && wage <= 4000 ){ return Math.round(960 - (0.24 * wage)); }
if(  (  assessmentPeriod == 'Jan 2016 - Jun 2016' || assessmentPeriod == 'Jul 2016 - Dec 2016'  )  &&  category == 'Regular SEC rates for EEs'  && years >= 65 && wage <= 3000 ){ return Math.round(0.11 * wage); }
if(  (  assessmentPeriod == 'Jan 2016 - Jun 2016' || assessmentPeriod == 'Jul 2016 - Dec 2016'  )  &&  category == 'Regular SEC rates for EEs'  && years >= 65 && wage > 3000 && wage <= 4000 ){ return Math.round(1320 - (0.33 * wage)); }
if(  (  assessmentPeriod == 'Jan 2016 - Jun 2016' || assessmentPeriod == 'Jul 2016 - Dec 2016'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >= 13 && years < 65 && wage <= 1500 ){ return Math.round(0.16 * wage); }
if(  (  assessmentPeriod == 'Jan 2016 - Jun 2016' || assessmentPeriod == 'Jul 2016 - Dec 2016'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >= 13 && years < 65 && wage > 1500 && wage <= 3000 ){ return Math.round(240); }
if(  (  assessmentPeriod == 'Jan 2016 - Jun 2016' || assessmentPeriod == 'Jul 2016 - Dec 2016'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >= 13 && years < 65 && wage > 3000 && wage <= 4000 ){ return Math.round(960 - (0.24 * wage)); }
if(  (  assessmentPeriod == 'Jan 2016 - Jun 2016' || assessmentPeriod == 'Jul 2016 - Dec 2016'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >= 65 && wage <= 1500 ){ return Math.round(0.22 * wage); }
if(  (  assessmentPeriod == 'Jan 2016 - Jun 2016' || assessmentPeriod == 'Jul 2016 - Dec 2016'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >= 65 && wage > 1500 && wage <= 3000 ){ return Math.round(330); }
if(  (  assessmentPeriod == 'Jan 2016 - Jun 2016' || assessmentPeriod == 'Jul 2016 - Dec 2016'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >= 65 && wage > 3000 && wage <= 4000 ){ return Math.round(1320 - (0.33 * wage)); }
if(  (  assessmentPeriod == 'Jan 2017 - Jun 2017' || assessmentPeriod == 'Jul 2017 - Dec 2017' || assessmentPeriod == 'Jan 2018 - Jun 2018' || assessmentPeriod == 'Jul 2018 - Dec 2018' || assessmentPeriod == 'Jan 2019 - Jun 2019' || assessmentPeriod == 'Jul 2019 - Dec 2019'  )  &&  category == 'Regular SEC rates for EEs'  && years >= 55 && years < 60 && wage <= 3000 ){ return Math.round(0.03 * wage); }
if(  (  assessmentPeriod == 'Jan 2017 - Jun 2017' || assessmentPeriod == 'Jul 2017 - Dec 2017' || assessmentPeriod == 'Jan 2018 - Jun 2018' || assessmentPeriod == 'Jul 2018 - Dec 2018' || assessmentPeriod == 'Jan 2019 - Jun 2019' || assessmentPeriod == 'Jul 2019 - Dec 2019'  )  &&  category == 'Regular SEC rates for EEs'  && years >= 60 && years < 65 && wage <= 3000 ){ return Math.round(0.05 * wage); }
if(  (  assessmentPeriod == 'Jan 2017 - Jun 2017'  )  &&  category == 'Regular SEC rates for EEs'  && years >= 65 && wage <= 3000 ){ return Math.round(0.11 * wage); }
if(  (  assessmentPeriod == 'Jan 2017 - Jun 2017' || assessmentPeriod == 'Jul 2017 - Dec 2017' || assessmentPeriod == 'Jan 2018 - Jun 2018' || assessmentPeriod == 'Jul 2018 - Dec 2018' || assessmentPeriod == 'Jan 2019 - Jun 2019' || assessmentPeriod == 'Jul 2019 - Dec 2019'  )  &&  category == 'Regular SEC rates for EEs'  && years >= 55 && years < 60 && wage > 3000 && wage <= 4000 ){ return Math.round(360 - (0.09 * wage)); }
if(  (  assessmentPeriod == 'Jan 2017 - Jun 2017' || assessmentPeriod == 'Jul 2017 - Dec 2017' || assessmentPeriod == 'Jan 2018 - Jun 2018' || assessmentPeriod == 'Jul 2018 - Dec 2018' || assessmentPeriod == 'Jan 2019 - Jun 2019' || assessmentPeriod == 'Jul 2019 - Dec 2019'  )  &&  category == 'Regular SEC rates for EEs'  && years >= 60 && years < 65 && wage > 3000 && wage <= 4000 ){ return Math.round(600 - (0.15 * wage)); }
if(  (  assessmentPeriod == 'Jan 2017 - Jun 2017'  )  &&  category == 'Regular SEC rates for EEs'  && years >= 65 && wage > 3000 && wage<= 4000 ){ return Math.round(1320 - (0.33 * wage)); }
if(  (  assessmentPeriod == 'Jan 2017 - Jun 2017' || assessmentPeriod == 'Jul 2017 - Dec 2017' || assessmentPeriod == 'Jan 2018 - Jun 2018' || assessmentPeriod == 'Jul 2018 - Dec 2018' || assessmentPeriod == 'Jan 2019 - Jun 2019' || assessmentPeriod == 'Jul 2019 - Dec 2019'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >= 13 && years < 65 && wage <= 1500 ){ return Math.round(0.16 * wage); }
if(  (  assessmentPeriod == 'Jan 2017 - Jun 2017'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >= 65 && wage <= 1500 ){ return Math.round(0.22 * wage); }
if(  (  assessmentPeriod == 'Jan 2017 - Jun 2017' || assessmentPeriod == 'Jul 2017 - Dec 2017' || assessmentPeriod == 'Jan 2018 - Jun 2018' || assessmentPeriod == 'Jul 2018 - Dec 2018' || assessmentPeriod == 'Jan 2019 - Jun 2019' || assessmentPeriod == 'Jul 2019 - Dec 2019'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >= 13 && years < 65 && wage > 1500 && wage <= 3000 ){ return Math.round(240); }
if(  (  assessmentPeriod == 'Jan 2017 - Jun 2017'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >= 65 && wage > 1500 && wage <= 3000 ){ return Math.round(330); }
if(  (  assessmentPeriod == 'Jan 2017 - Jun 2017' || assessmentPeriod == 'Jul 2017 - Dec 2017' || assessmentPeriod == 'Jan 2018 - Jun 2018' || assessmentPeriod == 'Jul 2018 - Dec 2018' || assessmentPeriod == 'Jan 2019 - Jun 2019' || assessmentPeriod == 'Jul 2019 - Dec 2019'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >= 13 && years < 65 && wage > 3000 && wage <= 4000 ){ return Math.round(960 - (0.24 * wage)); }
if(  (  assessmentPeriod == 'Jan 2017 - Jun 2017'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >= 65 && wage > 3000 && wage <= 4000 ){ return Math.round(1320 - (0.33 * wage)); }
if(  (  assessmentPeriod == 'Jul 2017 - Dec 2017' || assessmentPeriod == 'Jan 2018 - Jun 2018' || assessmentPeriod == 'Jul 2018 - Dec 2018' || assessmentPeriod == 'Jan 2019 - Jun 2019' || assessmentPeriod == 'Jul 2019 - Dec 2019'  )  &&  category == 'Regular SEC rates for EEs'  && years >=65 && years <67 && wage <=3000 ) { if(  birthyear >= 1952  ){ if( birthyear == 1952 ){if(  birthMonth >= 7  ) { return Math.round(0.08*wage); }  } else{ return Math.round(0.08*wage); } }  }
if(  (  assessmentPeriod == 'Jul 2017 - Dec 2017' || assessmentPeriod == 'Jan 2018 - Jun 2018' || assessmentPeriod == 'Jul 2018 - Dec 2018' || assessmentPeriod == 'Jan 2019 - Jun 2019' || assessmentPeriod == 'Jul 2019 - Dec 2019'  )  &&  category == 'Regular SEC rates for EEs'  && years >=65 && years <67 && wage>3000 && wage <=4000 ) { if(  birthyear >= 1952  ){ if( birthyear == 1952 ){if(  birthMonth >= 7  ) { return Math.round(960-(0.24*wage)); }  } else{ return Math.round(960-(0.24*wage)); } }  }
if(  (  assessmentPeriod == 'Jul 2017 - Dec 2017' || assessmentPeriod == 'Jan 2018 - Jun 2018' || assessmentPeriod == 'Jul 2018 - Dec 2018' || assessmentPeriod == 'Jan 2019 - Jun 2019' || assessmentPeriod == 'Jul 2019 - Dec 2019'  )  &&  category == 'Regular SEC rates for EEs'  && years >=65 && years<67 && wage <=3000 ) { if(  birthyear <= 1952  ){ if( birthyear == 1952 ){if(  birthMonth <= 6  ) { return Math.round(0.11*wage); }  } else{ return Math.round(0.11*wage); }  } }
if(  (  assessmentPeriod == 'Jul 2017 - Dec 2017' || assessmentPeriod == 'Jan 2018 - Jun 2018' || assessmentPeriod == 'Jul 2018 - Dec 2018' || assessmentPeriod == 'Jan 2019 - Jun 2019' || assessmentPeriod == 'Jul 2019 - Dec 2019'  )  &&  category == 'Regular SEC rates for EEs'  && years >=65 && years <67 && wage >3000 && wage <=4000 ) { if(  birthyear <= 1952  ){ if( birthyear == 1952 ){if(  birthMonth <= 6  ) { return Math.round(1320-(0.33*wage)); }  } else{ return Math.round(1320-(0.33*wage)); }  } }
if(  (  assessmentPeriod == 'Jul 2017 - Dec 2017' || assessmentPeriod == 'Jan 2018 - Jun 2018' || assessmentPeriod == 'Jul 2018 - Dec 2018' || assessmentPeriod == 'Jan 2019 - Jun 2019' || assessmentPeriod == 'Jul 2019 - Dec 2019'  )  &&  category == 'Regular SEC rates for EEs'  && years >=67 && wage <=3000 ){ return Math.round(0.11*wage); }
if(  (  assessmentPeriod == 'Jul 2017 - Dec 2017' || assessmentPeriod == 'Jan 2018 - Jun 2018' || assessmentPeriod == 'Jul 2018 - Dec 2018' || assessmentPeriod == 'Jan 2019 - Jun 2019' || assessmentPeriod == 'Jul 2019 - Dec 2019'  )  &&  category == 'Regular SEC rates for EEs'  && years >=67 && wage >3000 && wage <=4000 ){ return Math.round(1320-(0.33*wage)); }
if(  (  assessmentPeriod == 'Jul 2017 - Dec 2017' || assessmentPeriod == 'Jan 2018 - Jun 2018' || assessmentPeriod == 'Jul 2018 - Dec 2018' || assessmentPeriod == 'Jan 2019 - Jun 2019' || assessmentPeriod == 'Jul 2019 - Dec 2019'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >=65 && years <67 && wage <=1500 ) { if(  birthyear >= 1952  ){ if( birthyear == 1952 ){if(  birthMonth >= 7  ) { return Math.round(0.16*wage); }  } else{ return Math.round(0.16*wage); } }  }
if(  (  assessmentPeriod == 'Jul 2017 - Dec 2017' || assessmentPeriod == 'Jan 2018 - Jun 2018' || assessmentPeriod == 'Jul 2018 - Dec 2018' || assessmentPeriod == 'Jan 2019 - Jun 2019' || assessmentPeriod == 'Jul 2019 - Dec 2019'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >=65 && years <67 && wage >1500 && wage <=3000 ) { if(  birthyear >= 1952  ){ if( birthyear == 1952 ){if(  birthMonth >= 7  ) { return Math.round(240); }  } else{ return Math.round(240); } }  }
if(  (  assessmentPeriod == 'Jul 2017 - Dec 2017' || assessmentPeriod == 'Jan 2018 - Jun 2018' || assessmentPeriod == 'Jul 2018 - Dec 2018' || assessmentPeriod == 'Jan 2019 - Jun 2019' || assessmentPeriod == 'Jul 2019 - Dec 2019'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >=65 && years<67 && wage >3000 && wage <=4000 ) { if(  birthyear >= 1952  ){ if( birthyear == 1952 ){if(  birthMonth >= 7  ) { return Math.round(960-(0.24*wage)); }  } else{ return Math.round(960-(0.24*wage)); } }  }
if(  (  assessmentPeriod == 'Jul 2017 - Dec 2017' || assessmentPeriod == 'Jan 2018 - Jun 2018' || assessmentPeriod == 'Jul 2018 - Dec 2018' || assessmentPeriod == 'Jan 2019 - Jun 2019' || assessmentPeriod == 'Jul 2019 - Dec 2019'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >=65 && years <67 && wage <=1500 ) { if(  birthyear <= 1952  ){ if( birthyear == 1952 ){if(  birthMonth <= 6  ) { return Math.round(0.22*wage); }  } else{ return Math.round(0.22*wage); }  } }
if(  (  assessmentPeriod == 'Jul 2017 - Dec 2017' || assessmentPeriod == 'Jan 2018 - Jun 2018' || assessmentPeriod == 'Jul 2018 - Dec 2018' || assessmentPeriod == 'Jan 2019 - Jun 2019' || assessmentPeriod == 'Jul 2019 - Dec 2019'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >=65 && years <67 && wage >1500 && wage <=3000 ) { if(  birthyear <= 1952  ){ if( birthyear == 1952 ){if(  birthMonth <= 6  ) { return Math.round(330); }  } else{ return Math.round(330); }  } }
if(  (  assessmentPeriod == 'Jul 2017 - Dec 2017' || assessmentPeriod == 'Jan 2018 - Jun 2018' || assessmentPeriod == 'Jul 2018 - Dec 2018' || assessmentPeriod == 'Jan 2019 - Jun 2019' || assessmentPeriod == 'Jul 2019 - Dec 2019'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >=65 && years <67 && wage >3000 && wage <=4000 ) { if(  birthyear <= 1952  ){ if( birthyear == 1952 ){if(  birthMonth <= 6  ) { return Math.round(1320-(0.33*wage)); }  } else{ return Math.round(1320-(0.33*wage)); }  } }
if(  (  assessmentPeriod == 'Jul 2017 - Dec 2017' || assessmentPeriod == 'Jan 2018 - Jun 2018' || assessmentPeriod == 'Jul 2018 - Dec 2018' || assessmentPeriod == 'Jan 2019 - Jun 2019' || assessmentPeriod == 'Jul 2019 - Dec 2019'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >=67 && wage <=1500 ){ return Math.round(0.22*wage); }
if(  (  assessmentPeriod == 'Jul 2017 - Dec 2017' || assessmentPeriod == 'Jan 2018 - Jun 2018' || assessmentPeriod == 'Jul 2018 - Dec 2018' || assessmentPeriod == 'Jan 2019 - Jun 2019' || assessmentPeriod == 'Jul 2019 - Dec 2019'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >=67 && wage >1500 && wage <=3000 ){ return Math.round(330); }
if(  (  assessmentPeriod == 'Jul 2017 - Dec 2017' || assessmentPeriod == 'Jan 2018 - Jun 2018' || assessmentPeriod == 'Jul 2018 - Dec 2018' || assessmentPeriod == 'Jan 2019 - Jun 2019' || assessmentPeriod == 'Jul 2019 - Dec 2019'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >=67 && wage >3000 && wage <=4000 ){ return Math.round(1320-(0.33*wage)); }
if(  (  assessmentPeriod == 'Jan 2020 - Jun 2020' || assessmentPeriod == 'Jul 2020 - Dec 2020'  )  &&  category == 'Regular SEC rates for EEs'  && years >=55 && years <60 && wage <=3000 ){ return Math.round(0.03 * wage); }
if(  (  assessmentPeriod == 'Jan 2020 - Jun 2020' || assessmentPeriod == 'Jul 2020 - Dec 2020'  )  &&  category == 'Regular SEC rates for EEs'  && years >=60 && years <65 && wage <=3000 ){ return Math.round(0.05 * wage); }
if(  (  assessmentPeriod == 'Jan 2020 - Jun 2020' || assessmentPeriod == 'Jul 2020 - Dec 2020'  )  &&  category == 'Regular SEC rates for EEs'  && years >=65 && years <67 && wage <=3000 ){ return Math.round(0.08 * wage); }
if(  (  assessmentPeriod == 'Jan 2020 - Jun 2020' || assessmentPeriod == 'Jul 2020 - Dec 2020'  )  &&  category == 'Regular SEC rates for EEs'  && years >=65 && years <67 && wage <=3000 ) { if(  birthyear <= 1952  ){ if( birthyear == 1952 ){if(  birthMonth <= 6  ) { return Math.round(0.11 * wage); }  } else{ return Math.round(0.11 * wage); }  } }
if(  (  assessmentPeriod == 'Jan 2020 - Jun 2020' || assessmentPeriod == 'Jul 2020 - Dec 2020'  )  &&  category == 'Regular SEC rates for EEs'  && years >=67 && wage <=3000 ){ return Math.round(0.11 * wage); }
if(  (  assessmentPeriod == 'Jan 2020 - Jun 2020' || assessmentPeriod == 'Jul 2020 - Dec 2020'  )  &&  category == 'Regular SEC rates for EEs'  && years >=55 && years <60 && wage >3000 && wage <=4000 ){ return Math.round(360 - (0.09 * wage)); }
if(  (  assessmentPeriod == 'Jan 2020 - Jun 2020' || assessmentPeriod == 'Jul 2020 - Dec 2020'  )  &&  category == 'Regular SEC rates for EEs'  && years >=60 && years <65 && wage > 3000 && wage <=4000 ){ return Math.round(600 - (0.15 * wage)); }
if(  (  assessmentPeriod == 'Jan 2020 - Jun 2020' || assessmentPeriod == 'Jul 2020 - Dec 2020'  )  &&  category == 'Regular SEC rates for EEs'  && years >=65 && years <67 && wage >3000 && wage <=4000 ){ return Math.round(960 - (0.24 * wage)); }
if(  (  assessmentPeriod == 'Jan 2020 - Jun 2020' || assessmentPeriod == 'Jul 2020 - Dec 2020'  )  &&  category == 'Regular SEC rates for EEs'  && years >=65 && years <67 && wage >3000 && wage <=4000 ) { if(  birthyear <= 1952  ){ if( birthyear == 1952 ){if(  birthMonth <= 6  ) { return Math.round(1320 - (0.33 * wage)); }  } else{ return Math.round(1320 - (0.33 * wage)); }  } }
if(  (  assessmentPeriod == 'Jan 2020 - Jun 2020' || assessmentPeriod == 'Jul 2020 - Dec 2020'  )  &&  category == 'Regular SEC rates for EEs'  && years >=67 && wage >3000 && wage <=4000 ){ return Math.round(1320 - (0.33 * wage)); }
if(  (  assessmentPeriod == 'Jan 2020 - Jun 2020' || assessmentPeriod == 'Jul 2020 - Dec 2020'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >=13 && years <65 && wage <=1500 ){ return Math.round(0.16 * wage); }
if(  (  assessmentPeriod == 'Jan 2020 - Jun 2020' || assessmentPeriod == 'Jul 2020 - Dec 2020'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >=65 && years <67 && wage <=1500 ){ return Math.round(0.16 * wage); }
if(  (  assessmentPeriod == 'Jan 2020 - Jun 2020' || assessmentPeriod == 'Jul 2020 - Dec 2020'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >=65 && years <67 && wage <=1500 ) { if(  birthyear <= 1952  ){ if( birthyear == 1952 ){if(  birthMonth <= 6  ) { return Math.round(0.22 * wage); }  } else{ return Math.round(0.22 * wage); }  } }
if(  (  assessmentPeriod == 'Jan 2020 - Jun 2020' || assessmentPeriod == 'Jul 2020 - Dec 2020'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >=67 && wage <=1500 ){ return Math.round(0.22 * wage); }
if(  (  assessmentPeriod == 'Jan 2020 - Jun 2020' || assessmentPeriod == 'Jul 2020 - Dec 2020'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >=13 && years <65 && wage >1500 && wage <=3000 ){ return Math.round(240); }
if(  (  assessmentPeriod == 'Jan 2020 - Jun 2020' || assessmentPeriod == 'Jul 2020 - Dec 2020'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >=65 && years <67 && wage >1500 && wage <=3000 ){ return Math.round(240); }
if(  (  assessmentPeriod == 'Jan 2020 - Jun 2020' || assessmentPeriod == 'Jul 2020 - Dec 2020'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >=65 && years <67 && wage >1500 && wage <=3000 ) { if(  birthyear <= 1952  ){ if( birthyear == 1952 ){if(  birthMonth <= 6  ) { return Math.round(330); }  } else{ return Math.round(330); }  } }
if(  (  assessmentPeriod == 'Jan 2020 - Jun 2020' || assessmentPeriod == 'Jul 2020 - Dec 2020'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >=67 && wage >1500 && wage <=3000 ){ return Math.round(330); }
if(  (  assessmentPeriod == 'Jan 2020 - Jun 2020' || assessmentPeriod == 'Jul 2020 - Dec 2020'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >=13 && years <65 && wage >3000 && wage <=4000 ){ return Math.round(960 - (0.24 * wage)); }
if(  (  assessmentPeriod == 'Jan 2020 - Jun 2020' || assessmentPeriod == 'Jul 2020 - Dec 2020'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >=65 && years <67 && wage >3000 && wage <=4000 ){ return Math.round(960 - (0.24 * wage)); }
if(  (  assessmentPeriod == 'Jan 2020 - Jun 2020' || assessmentPeriod == 'Jul 2020 - Dec 2020'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >=65 && years <67 && wage >3000 && wage <= 4000 ) { if(  birthyear <= 1952  ){ if( birthyear == 1952 ){if(  birthMonth <= 6  ) { return Math.round(1320 - (0.33 * wage)); }  } else{ return Math.round(1320 - (0.33 * wage)); }  } }
if(  (  assessmentPeriod == 'Jan 2020 - Jun 2020' || assessmentPeriod == 'Jul 2020 - Dec 2020'  )  &&  category == 'Enhanced SEC rates (Disability)'  && years >=67 && wage >3000 && wage <=4000 ){ return Math.round(1320 - (0.33 * wage)); } return 0; }