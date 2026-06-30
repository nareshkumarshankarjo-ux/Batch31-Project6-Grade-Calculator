function calculateGrade() {

    let studentName = document.getElementById("studentName").value.trim();

    let english = Number(document.getElementById("english").value);
    let maths = Number(document.getElementById("maths").value);
    let science = Number(document.getElementById("science").value);
    let social = Number(document.getElementById("social").value);
    let computer = Number(document.getElementById("computer").value);

    // Validate student name
    if(studentName === ""){
        alert("Please enter Student Name.");
        return;
    }

    // Validate subject marks
    let marks = [english, maths, science, social, computer];

    for(let i = 0; i < marks.length; i++){

        if(isNaN(marks[i]) || marks[i] < 0 || marks[i] > 100){
            alert("Please enter valid marks between 0 and 100 for all subjects.");
            return;
        }
    }

    let total = english + maths + science + social + computer;

    let average = total / 5;

    let grade;

    if(average >= 90){
        grade = "A+";
    }
    else if(average >= 80){
        grade = "A";
    }
    else if(average >= 70){
        grade = "B";
    }
    else if(average >= 60){
        grade = "C";
    }
    else if(average >= 50){
        grade = "D";
    }
    else{
        grade = "F (Fail)";
    }

    document.getElementById("result").innerHTML = `
        <h2>Student Report Card</h2>
        <hr><br>

        <p><strong>Student Name :</strong> ${studentName}</p>

        <br>

        <table style="width:100%; border-collapse:collapse;">
            <tr>
                <th>Subject</th>
                <th>Marks</th>
            </tr>

            <tr>
                <td>English</td>
                <td>${english}</td>
            </tr>

            <tr>
                <td>Mathematics</td>
                <td>${maths}</td>
            </tr>

            <tr>
                <td>Science</td>
                <td>${science}</td>
            </tr>

            <tr>
                <td>Social Science</td>
                <td>${social}</td>
            </tr>

            <tr>
                <td>Computer Science</td>
                <td>${computer}</td>
            </tr>
        </table>

        <br>

        <p><strong>Total Marks :</strong> ${total} / 500</p>

        <p><strong>Average :</strong> ${average.toFixed(2)}%</p>

        <p><strong>Grade :</strong> ${grade}</p>
    `;
}

function clearForm(){

    document.getElementById("studentName").value="";

    document.getElementById("english").value="";
    document.getElementById("maths").value="";
    document.getElementById("science").value="";
    document.getElementById("social").value="";
    document.getElementById("computer").value="";

    document.getElementById("result").innerHTML="";

    document.getElementById("studentName").focus();
}
