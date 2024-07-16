let ngayLamInput = document.getElementById('soNgayLam')
let mucLuongInput = document.getElementById('mucLuong')
let btnTotal = document.getElementById('btnTotal')

btnTotal.addEventListener('click', () => {
    let ngayLam = ngayLamInput.value * 1
    let mucLuong = mucLuongInput.value * 1
    let total = Number(ngayLam) * Number(mucLuong)
    const formattedBonus = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(total);
    return document.getElementById('total').innerHTML = formattedBonus
})

