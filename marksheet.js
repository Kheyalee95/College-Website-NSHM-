function generateMarksheet() {
    const name = document.getElementById("name").value.trim();
    const subject1 = parseFloat(document.getElementById("subject1").value);
    const subject2 = parseFloat(document.getElementById("subject2").value);
    const subject3 = parseFloat(document.getElementById("subject3").value);

    if (name && !isNaN(subject1) && !isNaN(subject2) && !isNaN(subject3)) {
        const totalMarks = subject1 + subject2 + subject3;
        const percentage = (totalMarks / 300) * 100;
        let grade = '';

        if (percentage >= 90) {
            grade = 'A';
        } else if (percentage >= 80) {
            grade = 'B';
        } else if (percentage >= 70) {
            grade = 'C';
        } else if (percentage >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        document.getElementById("studentName").innerText = name;
        document.getElementById("subject1Marks").innerText = subject1;
        document.getElementById("subject2Marks").innerText = subject2;
        document.getElementById("subject3Marks").innerText = subject3;
        document.getElementById("totalMarks").innerText = totalMarks;
        document.getElementById("percentage").innerText = percentage.toFixed(2);
        document.getElementById("grade").innerText = grade;

        document.getElementById("result").style.display = "block";
        document.getElementById("downloadButton").style.display = "block";
    } else {
        alert("Please fill out all fields correctly.");
    }
}

function downloadPDF() {
    const resultContent = document.getElementById("result");
    const opt = {
        margin: 1,
        filename: 'Marksheet.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    document.getElementById("downloadButton").style.display = "none";

    html2pdf().from(resultContent).set(opt).save().then(() => {
        document.getElementById("downloadButton").style.display = "block";
    });
}
