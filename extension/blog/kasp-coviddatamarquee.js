async function getCovidData() {
    let url = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-all';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderCovidData() {
    let covidDairyReport = await getCovidData();
    let covidsection = '';
    covidDairyReport.forEach(covidDairyReport => {

        var value = covidDairyReport.txn_date;
        var s = value.split('-');
        let yearofcovid = parseInt(s[0]) + 543;
        let mon_num = parseInt(s[1]);
        var monthNamesThai = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
            "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤษจิกายน", "ธันวาคม"];
        let monofcovid = monthNamesThai[mon_num - 1];
        let dateofcovid = parseInt(s[2]);
        let nf = new Intl.NumberFormat('en-US');
        var value = covidDairyReport.update_date;
        var t = value.split(' ');
        let all_time = t[1];
        var alltime = all_time.split(':');
        
        let cheackDatanew_case = covidDairyReport.new_case;
        let cheackDatatotal_recovered = covidDairyReport.total_recovered;
        let cheackDatatotal_case = covidDairyReport.total_case;
        let cheackDatatotal_death = covidDairyReport.total_death;
        
        let covidSegment = ``;
if (cheackDatanew_case == 0 || cheackDatatotal_recovered == 0 || cheackDatatotal_case == 0 || cheackDatatotal_death == 0 ) {
 covidSegment = `ขณะนี้อยู่ระหว่างการอัพเดตข้อมูลรายงานสถานการณ์โควิด-19 ประจำวัน ขออภัยในความไม่สะดวก`;
}
else {
 covidSegment = `
รายงานสถานการณ์โควิด-19 ประจำวันที่  ${dateofcovid}  ${monofcovid}  ${yearofcovid} 
พบผู้ติดเชื้อรายใหม่ ${nf.format(covidDairyReport.new_case)} ราย 
หายป่วยในวันนี้เพิ่มขึ้น ${nf.format(covidDairyReport.new_recovered)} ราย 
รวมหายป่วยสะสมแล้ว ${nf.format(covidDairyReport.total_recovered - 2168494)} ราย 
วันนี้มีรายงานผู้เสียชีวิตจากโควิด-19 แล้ว ทั้งสิ่น ${nf.format(covidDairyReport.new_death)} ราย 
รวมเสียชีวิตสะสมแล้ว ${nf.format(covidDairyReport.total_death - 21698)} ราย 
โดยในปีนี้มีรายงานผู้ป่วยโควิด-19 สะสม ทั้งสิ้น ${nf.format(covidDairyReport.total_case - 2223435)} ราย 
และมีการรายงานจำนวนผู้ป่วยทั้งหมดที่พบในประเทศไทยนับตั้งแต่การระบาดครั้งแรก ${nf.format(covidDairyReport.total_case)} ราย
`;
}
        covidsection += covidSegment;
    });

    let covidcontainer = document.querySelector('.covid-container');
    covidcontainer.innerHTML = covidsection;
}

renderCovidData();
