const paginate = (Pag,Len) => {
    let _PageLength = Len || 10
    let _Page       = Pag || 1
    let _sql        = ` LIMIT ${_PageLength} OFFSET(${_Page} - 1) * ${_PageLength} `
    return {
            _PageLength,
            _Page,
            _sql
        }
}

module.exports = paginate