function punyaHuruf(kataPertama, kataKedua){
    let kataKeduaBaru = kataKedua.toLowerCase()
    let kondisi = false
    for (let i = 0; i < kataPertama.length; i++){
        let check = kataKeduaBaru.includes(kataPertama[i])
        if (check === false){
            kondisi = false
            break;
        }else if(check === true){
            kondisi = true
        }
        
    }
    return kondisi
}

punyaHuruf('cat', 'antartica')
punyaHuruf('cat', 'australia')
punyaHuruf('cat', 'ANTARTICA')