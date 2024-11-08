document.addEventListener('DOMContentLoaded', () => {
    const bmiForm = document.getElementById('bmiForm');
    const bmiResult = document.getElementById('bmiResult');

    bmiForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const height = parseFloat(document.getElementById('height').value) / 100; // Đổi chiều cao từ cm sang m
        const weight = parseFloat(document.getElementById('weight').value);

        if (height && weight) {
            const bmi = weight / (height * height);
            bmiResult.textContent = `Chỉ số BMI của bạn là: ${bmi.toFixed(2)}`;
        } else {
            bmiResult.textContent = "Vui lòng nhập chiều cao và cân nặng hợp lệ.";
        }
    });
});
