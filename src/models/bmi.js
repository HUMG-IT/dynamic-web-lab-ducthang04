/**
 * Module quản lý danh sách chỉ số BMI
 * 
 * Module này lưu trữ danh sách các chỉ số BMI đã tính toán và cung cấp các phương thức để:
 * - Thêm một chỉ số BMI mới vào danh sách.
 * - Lấy danh sách các chỉ số BMI hiện có.
 */

const bmis = []; // Mảng lưu trữ các chỉ số BMI đã tính toán

/**
 * Hàm `addBMI`
 * 
 * Hàm này thêm một chỉ số BMI mới vào danh sách.
 * 
 * @function addBMI
 * @param {number} bmi - Chỉ số BMI cần thêm vào danh sách.
 * @param {string} classification - Phân loại của chỉ số BMI (Gầy, Bình thường, Thừa cân, Béo phì).
 * 
 * @example
 * addBMI(22.5, "Bình thường");
 * // Sau khi thêm, mảng bmis sẽ là [{ bmi: 22.5, classification: "Bình thường" }]
 */
const addBMI = (bmi, classification) => {
    bmis.push({ bmi, classification }); // Thêm chỉ số BMI và phân loại vào cuối mảng bmis
};

/**
 * Hàm `getBMIs`
 * 
 * Hàm này trả về danh sách các chỉ số BMI hiện có.
 * 
 * @function getBMIs
 * @returns {Object[]} - Mảng chứa tất cả các chỉ số BMI và phân loại đã được thêm.
 * 
 * @example
 * getBMIs();
 * // Kết quả: [{ bmi: 22.5, classification: "Bình thường" }, { bmi: 18.4, classification: "Gầy" }]
 */
const getBMIs = () => {
    return bmis; // Trả về mảng bmis chứa danh sách các chỉ số BMI
};

module.exports = { addBMI, getBMIs };
