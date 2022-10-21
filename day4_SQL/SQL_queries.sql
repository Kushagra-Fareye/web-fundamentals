-- Find highly repeat User.
	
select count(*) as cnt,u."name",u.email ,u.id ,u.date_of_birth  from "user" u right join orders on orders.user_id = u.id where orders.is_successful =true group by orders.user_id ,u,id order by cnt desc limit 1;


-- Find User who has done maximum & minimum payment
	
select * from "user" u where u.id in (select user_id from orders where is_successful = true order by order_value desc limit 1) ;
select * from "user" u where u.id in (select user_id from orders where is_successful = true order by order_value limit 1);


-- Find the product that is a superhit & flop.
select * from product p right join (select sum(oi.number_of_items)as cnt,oi.product_id  from order_item oi left join orders o on o.order_id = oi.order_id where o.is_successful =true group by oi.product_id order by cnt desc limit 1) as x on x.product_id = p.id ;
select * from product p right join (select sum(oi.number_of_items)as cnt,oi.product_id  from order_item oi left join orders o on o.order_id = oi.order_id where o.is_successful =true group by oi.product_id order by cnt asc limit 1) as x on x.product_id = p.id ;


-- Find failed transactions for a user.
select * from "user" u right join (select count(*) as failed_transaction_count,o.user_id  from transactions t left join orders o on t.order_id =o.order_id  where t.is_successful =false group by o.user_id) as x on u.id = x.user_id ;
	

-- Find total discount a user has availed in the last 6 months.
select sum((c.discount_value*o.order_value)/100),o.user_id  from orders o left join coupons c on o.coupon_id = c.id where o.is_successful =true and o.coupon_id is not null and o.created_at > CURRENT_DATE - INTERVAL '6 months' group by o.user_id ;

-- Find the expired coupons.
select * from coupons c where c.expires_at < now();


-- Find the product with highest & lowest rating.
select * from product p right join  (select sum(pr.rating)/count(*) as rating_sum,pr.product_id  from product_review pr group by pr.product_id order by rating_sum desc limit 1) as x on p.id = x.product_id;
select * from product p right join  (select sum(pr.rating)/count(*) as rating_sum,pr.product_id  from product_review pr group by pr.product_id order by rating_sum asc limit 1) as x on p.id = x.product_id;


-- Find the orders where an item’s quantity is more than 4.
select * from orders o where o.order_id  in (select oi.order_id  from order_item oi where oi.number_of_items > 4 group by oi.order_id) and o.is_successful =true;

-- Find the category for which maximum & minimum orders are being placed for the last quarter.
select  count(*) as number_of_orders,sum(x.number_of_items) as number_of_items ,pc.category_name  from (select * from order_item oi left join product p on oi.product_id =p.id) as x left join product_category pc  on x.category_id=pc.product_category_id group by pc.product_category_id order by number_of_items desc limit 1 ;
select  count(*)as number_of_orders,sum(x.number_of_items) as number_of_items ,pc.category_name  from (select * from order_item oi left join product p on oi.product_id =p.id) as x left join product_category pc  on x.category_id=pc.product_category_id group by pc.product_category_id order by number_of_items asc limit 1 ;

-- Find the user who has not placed any order till now.
select * from "user" u where u.id not in (select o.user_id from orders o);

-- Find the user whose payment has failed.
select u.id ,u."name" ,u.email ,u.date_of_birth  from orders o left join "user" u on u.id = o.user_id where o.is_successful =false

-- Find the users whose birthday is today.
select * from "user" u where u.date_of_birth = current_date  ;