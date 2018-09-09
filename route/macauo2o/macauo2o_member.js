
var DB = require(__dirname + '/../../Model/macauo2o.js');

exports.index = function(req,res) {
	res.render('macauo2o/mmember', { title: 'this is a form', message: 'Hello there!'});
};



exports.result = function(req,res) {
	res.render('macauo2o/member_result');
}


exports.checkUser = function(req,res) {
	var mobile = req.body.mobile;
	var sql  = 'select \'hi\', ss.name, ss.real_name, ss.phone, m.head_img_url , ss.member_id   from sell_shop ss join member m on m.id = ss.member_id';
	DB.get(sql,null, function(data,error) {
		res.json(data);
	});
}



exports.memberDetail = function(req,res) {
	var member_id = req.query.member_id;

	console.log(member_id);

	var sql = 'select nick_name,name,identity,mobile_phone, head_img_url,DATE_FORMAT(subscribe_time,\'%Y-%m-%d\') as subscribe_time from member  where parent_id = "' +member_id  + '" order by subscribe_time asc';


	DB.get(sql,null, function (data, error) {
	   res.render('macauo2o/memberDetail',{data: data});
	});
}


exports.orderFromResller = function(req,res) {
	var member_id = req.query.member_id;
	var sql = 'select  @rownum := @rownum + 1 AS rank , sort_rs.* from (select rs.member_name , rs.resller_name,rs.subscribe_time , rs.order_number , sum(rs.pay_money) as total_pay_money , rs.value from (select m2.nick_name as member_name, ss.name as resller_name , DATE_FORMAT(m2.subscribe_time,\'%Y-%m-%d\') as subscribe_time  , o.order_number ,o.pay_money  , sh.value from   member m2 join sell_shop ss on ss.member_id = m2.parent_id left join orders o on o.member_id = m2.id left join sell_history sh on sh.order_number = o.order_number where DATE_FORMAT(m2.subscribe_time,\'%Y-%m\') = DATE_FORMAT(m2.created_time,\'%Y-%m\') and m2.subscribe =1 and o.order_number is not null and m2.id not in (ss.member_id) and DATE_FORMAT(m2.subscribe_time,\'%Y-%m\') between ? and ? ) rs group by rs.member_name , rs.resller_name,rs.subscribe_time , rs.order_number ) sort_rs , (select @rownum :=0 ) r   order by sort_rs.subscribe_time asc ';

	DB.get(sql, ['2018-08', '2018-09'] , function(data,error) {
		  var new_data = JSON.stringify(data);
	  	  res.render('macauo2o/orderFromResller',{data: data , title : ''});
	  });

}


exports.orderDetail = function(req,res) {
	var orderNumber = req.params.orderNumber;
	console.log(orderNumber);

	var sql = 'select s.name, sg.alias, o.order_number  ,og.price as unit_price ,  o.taxes_money, og.number, o.pay_money from orders o join orders_goods og on og.order_id = o.id join shop s on s.id = o.shop_id join shop_goods sg on og.shop_goods_id = sg.id  where o.order_number = ? order by o.order_number asc';
	
	DB.get(sql, orderNumber, function(data,error) {
		  
	  	  res.render('macauo2o/orderDetail',{data: data});
	});


}



exports.sReseller = function(req,res) {
res.render('macauo2o/member_result');
}
