var myDate=new Date();
var year = (year_point == "") ? myDate.getFullYear() : year_point;	//��
var month = (month_point == "") ? myDate.getMonth() + 1 : month_point = (month_point.charAt(0) == '0') ? month_point.substring(1, month_point.length) : month_point;	//��
var date = (date_point == "") ? myDate.getDate() : date_point = (date_point.charAt(0) == '0') ? date_point.substring(1, date_point.length) : date_point;	//��
var new_date = new Date(year,month,1);                //ȡ���굱���еĵ�һ��
var last_date = (new Date(new_date.getTime()-1000*60*60*24)).getDate();//��ȡ�������һ������
var table_date = "";
var row_s = 1;
var row_e = 10;


$(function(){
	load_date();
});
function last_d(){
	var new_year = year;    //ȡ��ǰ�����
	var change_month = month;
	var new_month = change_month--;
	if (change_month < 1) {
		new_month = parseInt(new_month);
		new_month += 12;
		new_year--;            //��ݼ�
	}
	new_date = new Date(new_year,new_month-1,1);                //ȡ���굱���еĵ�һ��
	last_date = (new Date(new_date.getTime()-1000*60*60*24)).getDate();//��ȡ�������һ������
	year = new_year;
	month = parseInt(new_month) - 1;
	table_date = "";
	row_s = 1;
    row_e = 10;
	load_date();
}
function next_d(){
	var new_year = year;    //ȡ��ǰ�����
	var change_month = month;
	var new_month = change_month++;//ȡ��һ���µĵ�һ�죬������㣨���һ�첻�̶���
	if(change_month > 12)  {          //�����ǰ����12�£������ת����һ��
	   new_month = parseInt(new_month);
	   new_month -=12;        //�·ݼ�
	   new_year++;            //�����
	}
	new_date = new Date(new_year,new_month+1,1);                //ȡ���굱���еĵ�һ��
	last_date = (new Date(new_date.getTime()-1000*60*60*24)).getDate();//��ȡ�������һ������
	year = new_year;
	month = parseInt(new_month) + 1;
	table_date = "";
	row_s = 1;
    row_e = 10;
	load_date();
}
function load_date(){
	$('.month').html(year+'��'+month+'��');
	$('.tab04 tr').next().remove();
	var len = (last_date == 30 || last_date == 29 || last_date == 28) ? 4 : 4;
	for (var n = 1;n <= len;n++) {	//��ʾ����
		table_date += (n % 2 == 0) ? '<tr class="tab04_rowbg">' : '<tr>';
		for (var i = row_s;i <= row_e+1;i++) {
			if (i > row_e) {
				row_s = row_s + 10;	//11
				row_e = row_e + 10;		//20
				break;
			} else {
				if (i <= last_date) {
					month_u = (month <= 9) ? "0" + month : month;
					date_u = (i <= 9) ? "0" + i : i;
					//var url = "index.php?tp=calendar&t="+year+"-"+month_u+"-"+date_u+"";
					var url = "http://kf.265g.com/"+year+"-"+month_u+"-"+date_u+".html";
					if (i == date) {
						table_date += '<td><a target="_blank" href="'+url+'" style="background:#666; text-decoration:none; color:#fff;">'+i+'</a></td>';
					} else {
						table_date += '<td><a target="_blank" href="'+url+'">'+i+'</a></td>';
					}
				} else {
					table_date += '<td>&nbsp;</td>';
				}
			}
		}
		table_date += '</tr>';
	}
	$('.tab04').append(table_date);
}