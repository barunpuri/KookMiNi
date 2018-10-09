//����ϱ� ���ؼ��� cheerio-httpcli ����� �ʿ��ϹǷ� 
//cmd�� npm install cheerio - httpchli�� �Ͽ� ��� ��ġ

//��� RSS
var RSS = "http://web.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109";
//���ε�
var client = require('cheerio-httpcli');
//RSS��� �ٿ�ε�
client.fetch(RSS, {}, function (err, $, res) {
    if (err) { console.log("error"); return; }
    //�ʿ��� �׸� �����ؼ� ǥ��
    var city = $("location:nth-child(1) > city").text();
    $("location:nth-child(1) > data").each(function (idx) {

        var tmEf = $(this).find('tmEf').text();//��¥
        var wf = $(this).find('wf').text();//����
        var tmn = $(this).find('tmn').text();//�ð� ó��
        var tmx = $(this).find('tmx').text();//�ð� ��

        console.log(city + " " + tmEf + " " + wf + " " + tmn + "~" + tmx);
    });
});