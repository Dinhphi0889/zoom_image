let ngayLamInput = document.getElementById('soNgayLam')
let mucLuongInput = document.getElementById('mucLuong')
let btnTotal = document.getElementById('btnTotal')

btnTotal.addEventListener('click', () => {
    let ngayLam = ngayLamInput.value * 1
    let mucLuong = mucLuongInput.value * 1
    let total = Number(ngayLam) * Number(mucLuong)
    console.log(total)
    return document.getElementById('total').innerHTML = total
})

