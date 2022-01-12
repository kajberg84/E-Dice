export const users = [
  {
    id: 1,
    fname: "Ida",
    lname: "Idasson",
    adress: "Idavägen 2",
    postnr: 11111,
    city: "Idastad",
    phone: "070-0000000",
    email: "Ida@Ida.com",
    userlevel: "basic",
    password: "Ida1",
    created: "2022-01-12",
  },
  {
    id: 2,
    fname: "Kaj",
    lname: "Kajson",
    adress: "Kajvägen 2",
    postnr: 11111,
    city: "Kajstad",
    phone: "070-0000001",
    email: "Kaj@Kaj.com",
    userlevel: "basic",
    password: "Kaj1",
    created: "2022-01-12",
  },
  {
    id: 3,
    fname: "Mattis",
    lname: "Mattisson",
    adress: "Mattisvägen 2",
    postnr: 11111,
    city: "Mattisstad",
    phone: "070-0000002",
    email: "Mattis@Mattis.com",
    userlevel: "basic",
    password: "Mattis1",
    created: "2022-01-12",
  },
];

const getUser = (email, password) => {
  const user = users.filter(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    const { password, created, ...userInfo } = user;
    return userInfo;
  } else {
    return {};
  }
};

// getuser(email, password)
// kolla mot voran egna users att denna finns och returnera ett objekt.

/*
user = {
  id: xxx,
  fname: xxx,
  lname: xxx,
  adress: xxx,
  postnr: xxx,
  city: xxx,
  phone: xxx,
  email: xxx,
  password: xxx,
  userlevel: xxx,
  created: xxx,
  
}


*/
