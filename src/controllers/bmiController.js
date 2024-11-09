/**
 * Module xử lý yêu cầu tính toán chỉ số BMI từ client và trả về kết quả với phân loại BMI.
 * 
 * Các chức năng chính:
 * - Nhận chiều cao và cân nặng từ client thông qua `req.body.height` và `req.body.weight`.
 * - Tính toán chỉ số BMI.
 * - Phân loại BMI dựa trên giá trị tính được.
 * - Trả về phản hồi JSON chứa chỉ số BMI và phân loại BMI.
 */

/**
 * Hàm `calculateBMI`
 * 
 * Hàm này xử lý yêu cầu POST chứa chiều cao và cân nặng từ client, tính toán chỉ số BMI,
 * phân loại BMI và trả về kết quả.
 * 
 * @function calculateBMI
 * @param {Object} req - Đối tượng request từ client, chứa chiều cao trong `req.body.height` và cân nặng trong `req.body.weight`.
 * @param {Object} res - Đối tượng response để gửi phản hồi JSON về cho client.
 * 
 * @example
 * // Yêu cầu từ client:
 * // POST /bmi
 * // Body: { "height": 170, "weight": 65 }
 * 
 * // Phản hồi:
 * // {
 * //   "bmi": 22.49,
 * //   "classification": "Bình thường"
 * // }
 */
const calculateBMI = (req, res) => {
    const { height, weight } = req.body;

    // Kiểm tra nếu thiếu chiều cao hoặc cân nặng
    if (!height || !weight) {
        return res.status(400).json({ error: 'Vui lòng cung cấp chiều cao và cân nặng.' });
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Phân loại chỉ số BMI
    let classification;
    if (bmi < 18.5) {
        classification = 'Gầy';
    } else if (bmi < 25) {
        classification = 'Bình thường';
    } else if (bmi < 30) {
        classification = 'Thừa cân';
    } else {
        classification = 'Béo phì';
    }

    // Trả về phản hồi JSON với chỉ số BMI và phân loại
    res.json({ bmi, classification });
};

module.exports = { calculateBMI };
