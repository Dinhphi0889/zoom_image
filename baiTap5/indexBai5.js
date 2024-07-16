function calculateBonus() {
    // Lấy giá trị từ các ô nhập liệu
    const years = parseInt(document.getElementById('years').value);
    const familyMembers = parseInt(document.getElementById('familyMembers').value);
  
    // Kiểm tra giá trị hợp lệ
    if (isNaN(years) || isNaN(familyMembers) || years < 0 || familyMembers < 0) {
      alert('Please enter valid numbers');
      return;
    }
  
    // Tính tiền thưởng
    const bonusPerYear = 500000; // Tiền thưởng mỗi năm làm việc
    const bonusPerFamilyMember = 200000; // Tiền thưởng mỗi người trong gia đình
  
    const totalBonus = (years * bonusPerYear) + (familyMembers * bonusPerFamilyMember);
  
    // Hiển thị kết quả dưới dạng tiền tệ VND
    const formattedBonus = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(totalBonus);
  
    document.getElementById('result').innerText = `Tổng Thưởng Là: ${formattedBonus}`;
  }
  