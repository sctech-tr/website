var basemail = "c2N0ZWNoQHNjdGVjaC5xenouaW8=";
var realmail = atob(basemail);
document.getElementById("hahafuckyoubots").innerHTML = 
`
<a href="mailto:${realmail}">${realmail}</a>
`;