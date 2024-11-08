// bmiController.js

/**
 * Hàm tính toán và phân loại chỉ số BMI
 * 
 * @param {Object} req - Yêu cầu từ client, chứa chiều cao và cân nặng.
 * @param {Object} res - Phản hồi gửi về client.
 */
const getBMI = (req, res) => {
    const { height, weight } = req.body;
  
    if (!height || !weight) {
      return res.status(400).json({ error: 'Vui lòng cung cấp chiều cao và cân nặng.' });
    }
  
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  
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
  
    res.json({ bmi, classification });
  };
  
  module.exports = { getBMI };
  
