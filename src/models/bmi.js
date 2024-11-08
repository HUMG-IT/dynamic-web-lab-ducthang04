// Hàm tính chỉ số BMI
function calculateBMI(weight, height) {
    // Công thức tính BMI
    const bmi = weight / ((height / 100) ** 2);
    // Giới hạn chỉ số BMI ở hai chữ số thập phân
    return parseFloat(bmi.toFixed(2));
}

// Hàm phân loại chỉ số BMI
function classifyBMI(bmi) {
    if (bmi < 18.5) {
        return "Gầy";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Bình thường";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Thừa cân";
    } else {
        return "Béo phì";
    }
}

// Xuất các hàm
module.exports = { calculateBMI, classifyBMI };
