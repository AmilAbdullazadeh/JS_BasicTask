// 1
function Get_Fam(p_emp, p_job_title, p_department, p_salary) {
    console.log(`${p_department} departamentinde ${p_job_title} olaraq çalışan ${p_emp}, ${p_salary} - AZN maaş alır`);
}
Get_Fam("Aslan", "Front-end Developer", "IT", "2500");


// 2
var name = "Samir";
lastname;

// 3
(
    function() {
        var a = b = 5;
        // var a;
        // b = 5;
    }
)();
console.log(a);
console.log(b);

for (let i = 10; i < 0; i--) {
    console.log(i);
}
