enum weekDays {
  mo = "Thu 2",
  tu = "Thu 3",
  we = "Thu 4",
  th = "Thu 5",
  fr = "Thu 6",
  sa = "Thu 7",
  su = "Chu Nhat",
}
for (let e in weekDays) {
  console.log(weekDays[e as keyof typeof weekDays]);
}
