// Import các hàm calculateBMI và classifyBMI từ bmi.js

// Hàm getBMI xử lý yêu cầu từ client
// Trả về JSON chứa bmi và classification

// Xuất hàm getBMI

// Lưu ý: Tham khảo mã trong tệp nameController.js

const { calculateBMI, classifyBMI } = require("../models/bmi");

const getBMI = (req, res) => {
  const { weight, height } = req.body;
  if (!weight || !height) {
    return res
      .status(400)
      .json({ error: "Vui lòng nhập đầy đủ cân nặng và chiều cao" });
  }

  const bmi = calculateBMI(parseFloat(weight), parseFloat(height));
  const classification = classifyBMI(bmi);
  res.json({
    bmi,
    classification,
  });
};

module.exports = {
  getBMI,
};
