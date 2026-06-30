function calculateGrade() {

    let studentName = document.getElementById("studentName").value.trim();

    let english = Number(document.getElementById("english").value);
    let maths = Number(document.getElementById("maths").value);
    let science = Number(document.getElementById("science").value);
    let social = Number(document.getElementById("social").value);
    let computer = Number(document.getElementById("computer").value);

    // Validate Student Name
    if (studentName === "") {
        document.getElementById("result").innerHTML =
            "<span style='color:red;'>Please enter the student name.</span>";
        return;
    }

    // Validate Marks
    if (
        english < 0 || english > 100 ||
        maths < 0 || maths > 100 ||
        science < 0 || science > 100 ||
        social < 0 || social > 100 ||
        computer < 0 || computer > 100
    ) {
        document.getElementById("result").innerHTML =
            "<span style='color:red;'>Please enter marks between 0 and 100 for all subjects.</span>";
        return;
    }

    let total = english + maths + science + social + computer;
    let average = total / 5;

    let grade;

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "F (Fail)";
    }

    document.getElementById("result").innerHTML = `
        <h2>Student Result</h2>
        <p><strong>Student Name:</strong> ${studentName}</p>
        <hr>

        <p><strong>English:</strong> ${english}</p>
        <p><strong>Mathematics:</strong> ${maths}</p>
        <p><strong>Science:</strong> ${science}</p>
        <p><strong>Social Science:</strong> ${social}</p>
        <p><strong>Computer Science:</strong> ${computer}</p>

        <hr>

        <p><strong>Total Marks:</strong> ${total} / 500</p>
        <p><strong>Average:</strong> ${average.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
    `;
}