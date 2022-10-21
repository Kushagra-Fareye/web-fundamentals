--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

-- Started on 2022-10-21 14:00:13 IST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE postgres;
--
-- TOC entry 3025 (class 1262 OID 13461)
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_IN' LC_CTYPE = 'en_IN';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3026 (class 0 OID 0)
-- Dependencies: 3025
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 3027 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 205 (class 1259 OID 16407)
-- Name: coupons; Type: TABLE; Schema: public; Owner: assignment
--

CREATE TABLE public.coupons (
    id uuid NOT NULL,
    coupon_code character varying NOT NULL,
    discount_value integer NOT NULL,
    expires_at timestamp without time zone NOT NULL
);


ALTER TABLE public.coupons OWNER TO assignment;

--
-- TOC entry 209 (class 1259 OID 16464)
-- Name: order_item; Type: TABLE; Schema: public; Owner: assignment
--

CREATE TABLE public.order_item (
    order_id uuid NOT NULL,
    product_id uuid NOT NULL,
    number_of_items integer NOT NULL
);


ALTER TABLE public.order_item OWNER TO assignment;

--
-- TOC entry 208 (class 1259 OID 16444)
-- Name: orders; Type: TABLE; Schema: public; Owner: assignment
--

CREATE TABLE public.orders (
    order_id uuid NOT NULL,
    order_value integer NOT NULL,
    coupon_id uuid,
    user_id uuid NOT NULL,
    is_successful boolean DEFAULT false NOT NULL,
    created_at timestamp without time zone NOT NULL
);


ALTER TABLE public.orders OWNER TO assignment;

--
-- TOC entry 206 (class 1259 OID 16423)
-- Name: product; Type: TABLE; Schema: public; Owner: assignment
--

CREATE TABLE public.product (
    id uuid NOT NULL,
    product_name character varying NOT NULL,
    category_id integer NOT NULL,
    metadata json
);


ALTER TABLE public.product OWNER TO assignment;

--
-- TOC entry 203 (class 1259 OID 16394)
-- Name: product_category; Type: TABLE; Schema: public; Owner: assignment
--

CREATE TABLE public.product_category (
    category_name character varying NOT NULL,
    product_category_id integer NOT NULL
);


ALTER TABLE public.product_category OWNER TO assignment;

--
-- TOC entry 207 (class 1259 OID 16436)
-- Name: product_review; Type: TABLE; Schema: public; Owner: assignment
--

CREATE TABLE public.product_review (
    product_id uuid NOT NULL,
    user_id uuid NOT NULL,
    review character varying,
    rating integer NOT NULL
);


ALTER TABLE public.product_review OWNER TO assignment;

--
-- TOC entry 204 (class 1259 OID 16402)
-- Name: transactions; Type: TABLE; Schema: public; Owner: assignment
--

CREATE TABLE public.transactions (
    transaction_id uuid NOT NULL,
    order_id uuid NOT NULL,
    created_at timestamp without time zone NOT NULL,
    is_successful boolean NOT NULL
);


ALTER TABLE public.transactions OWNER TO assignment;

--
-- TOC entry 202 (class 1259 OID 16386)
-- Name: user; Type: TABLE; Schema: public; Owner: assignment
--

CREATE TABLE public."user" (
    id uuid NOT NULL,
    name character varying NOT NULL,
    email character varying NOT NULL,
    date_of_birth date NOT NULL,
    password character varying NOT NULL
);


ALTER TABLE public."user" OWNER TO assignment;

--
-- TOC entry 3015 (class 0 OID 16407)
-- Dependencies: 205
-- Data for Name: coupons; Type: TABLE DATA; Schema: public; Owner: assignment
--

INSERT INTO public.coupons VALUES ('3a3c28f6-4f9a-11ed-bdc3-0242ac120002', 'FIRST', 25, '2023-01-01 00:00:00');
INSERT INTO public.coupons VALUES ('3a3c28f6-4f9a-11ed-bdc3-0242ac120003', 'SUPER', 20, '2023-03-01 00:00:00');
INSERT INTO public.coupons VALUES ('3a3c28f6-4f9a-11ed-bdc3-0242ac120005', 'SUPER20', 20, '2020-03-01 00:00:00');


--
-- TOC entry 3019 (class 0 OID 16464)
-- Dependencies: 209
-- Data for Name: order_item; Type: TABLE DATA; Schema: public; Owner: assignment
--

INSERT INTO public.order_item VALUES ('3a3c2acc-4f9a-11ed-bdc3-0242ac120002', '3a3c22ac-4f9a-11ed-bdc3-0242ac120002', 2);
INSERT INTO public.order_item VALUES ('3a3c2acc-4f9a-11ed-bdc3-0242ac120002', '3a3c22ac-4f9a-11ed-bdc3-0242ac120003', 1);
INSERT INTO public.order_item VALUES ('3a3c2acc-4f9a-11ed-bdc3-0242ac120004', '3a3c22ac-4f9a-11ed-bdc3-0242ac120008', 1);
INSERT INTO public.order_item VALUES ('3a3c2acc-4f9a-11ed-bdc3-0242ac120004', '3a3c22ac-4f9a-11ed-bdc3-0242ac120010', 1);
INSERT INTO public.order_item VALUES ('3a3c2acc-4f9a-11ed-bdc3-0242ac120005', '3a3c22ac-4f9a-11ed-bdc3-0242ac120008', 3);
INSERT INTO public.order_item VALUES ('3a3c2acc-4f9a-11ed-bdc3-0242ac120008', '3a3c22ac-4f9a-11ed-bdc3-0242ac120007', 10);
INSERT INTO public.order_item VALUES ('3a3c2acc-4f9a-11ed-bdc3-0242ac120008', '3a3c22ac-4f9a-11ed-bdc3-0242ac120008', 10);
INSERT INTO public.order_item VALUES ('3a3c2acc-4f9a-11ed-bdc3-0242ac120005', '3a3c22ac-4f9a-11ed-bdc3-0242ac120002', 8);


--
-- TOC entry 3018 (class 0 OID 16444)
-- Dependencies: 208
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: assignment
--

INSERT INTO public.orders VALUES ('3a3c2acc-4f9a-11ed-bdc3-0242ac120008', 720, '3a3c28f6-4f9a-11ed-bdc3-0242ac120003', '3a3c20f4-4f9a-11ed-bdc3-0242ac120002', false, '1999-01-08 04:05:06');
INSERT INTO public.orders VALUES ('3a3c2acc-4f9a-11ed-bdc3-0242ac120002', 1500, NULL, '3a3c1d66-4f9a-11ed-bdc3-0242ac120002', true, '2020-01-08 04:05:06');
INSERT INTO public.orders VALUES ('3a3c2acc-4f9a-11ed-bdc3-0242ac120004', 1800, '3a3c28f6-4f9a-11ed-bdc3-0242ac120002', '3a3c1d66-4f9a-11ed-bdc3-0242ac120002', true, '2021-01-08 04:05:06');
INSERT INTO public.orders VALUES ('3a3c2acc-4f9a-11ed-bdc3-0242ac120005', 174, '3a3c28f6-4f9a-11ed-bdc3-0242ac120003', '3a3c1d66-4f9a-11ed-bdc3-0242ac120002', true, '2022-08-08 04:05:06');
INSERT INTO public.orders VALUES ('3a3c2acc-4f9a-11ed-bdc3-0242ac120006', 17408, NULL, '3a3c20f4-4f9a-11ed-bdc3-0242ac120002', true, '2022-08-09 04:05:06');


--
-- TOC entry 3016 (class 0 OID 16423)
-- Dependencies: 206
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: assignment
--

INSERT INTO public.product VALUES ('3a3c22ac-4f9a-11ed-bdc3-0242ac120002', 'blue shirt', 2, '{}');
INSERT INTO public.product VALUES ('3a3c22ac-4f9a-11ed-bdc3-0242ac120003', 'red shirt', 2, '{}');
INSERT INTO public.product VALUES ('3a3c22ac-4f9a-11ed-bdc3-0242ac120010', 'yellow shirt', 2, '{}');
INSERT INTO public.product VALUES ('3a3c22ac-4f9a-11ed-bdc3-0242ac120004', 'mi note 8', 1, '{}');
INSERT INTO public.product VALUES ('3a3c22ac-4f9a-11ed-bdc3-0242ac120005', 'yellow shirt', 1, '{}');
INSERT INTO public.product VALUES ('3a3c22ac-4f9a-11ed-bdc3-0242ac120006', 'iphone 13', 1, '{}');
INSERT INTO public.product VALUES ('3a3c22ac-4f9a-11ed-bdc3-0242ac120007', 'ponds dreamflower', 3, '{}');
INSERT INTO public.product VALUES ('3a3c22ac-4f9a-11ed-bdc3-0242ac120008', 'lakme red', 3, '{}');


--
-- TOC entry 3013 (class 0 OID 16394)
-- Dependencies: 203
-- Data for Name: product_category; Type: TABLE DATA; Schema: public; Owner: assignment
--

INSERT INTO public.product_category VALUES ('electronics', 1);
INSERT INTO public.product_category VALUES ('fashion', 2);
INSERT INTO public.product_category VALUES ('beauty', 3);


--
-- TOC entry 3017 (class 0 OID 16436)
-- Dependencies: 207
-- Data for Name: product_review; Type: TABLE DATA; Schema: public; Owner: assignment
--

INSERT INTO public.product_review VALUES ('3a3c22ac-4f9a-11ed-bdc3-0242ac120002', '3a3c20f4-4f9a-11ed-bdc3-0242ac120002', 'good', 5);
INSERT INTO public.product_review VALUES ('3a3c22ac-4f9a-11ed-bdc3-0242ac120002', '3a3c1d66-4f9a-11ed-bdc3-0242ac120002', '', 4);
INSERT INTO public.product_review VALUES ('3a3c22ac-4f9a-11ed-bdc3-0242ac120004', '3a3c1d66-4f9a-11ed-bdc3-0242ac120007', NULL, 1);


--
-- TOC entry 3014 (class 0 OID 16402)
-- Dependencies: 204
-- Data for Name: transactions; Type: TABLE DATA; Schema: public; Owner: assignment
--

INSERT INTO public.transactions VALUES ('3a3c3076-4f9a-11ed-bdc3-0242ac120002', '3a3c2acc-4f9a-11ed-bdc3-0242ac120002', '2011-01-01 00:00:00', false);
INSERT INTO public.transactions VALUES ('3a3c3076-4f9a-11ed-bdc3-0242ac120003', '3a3c2acc-4f9a-11ed-bdc3-0242ac120002', '2011-01-01 00:00:01', false);
INSERT INTO public.transactions VALUES ('3a3c3076-4f9a-11ed-bdc3-0242ac120004', '3a3c2acc-4f9a-11ed-bdc3-0242ac120002', '2011-01-01 00:00:02', true);
INSERT INTO public.transactions VALUES ('3a3c3076-4f9a-11ed-bdc3-0242ac120005', '3a3c2acc-4f9a-11ed-bdc3-0242ac120004', '2011-01-02 00:00:00', true);
INSERT INTO public.transactions VALUES ('3a3c3076-4f9a-11ed-bdc3-0242ac120006', '3a3c2acc-4f9a-11ed-bdc3-0242ac120005', '2011-01-02 00:00:00', true);
INSERT INTO public.transactions VALUES ('3a3c3076-4f9a-11ed-bdc3-0242ac120007', '3a3c2acc-4f9a-11ed-bdc3-0242ac120008', '2011-01-02 00:00:00', true);


--
-- TOC entry 3012 (class 0 OID 16386)
-- Dependencies: 202
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: assignment
--

INSERT INTO public."user" VALUES ('3a3c1d66-4f9a-11ed-bdc3-0242ac120002', 'Test User', 'test@gmail.com', '2000-04-12', 'random_again');
INSERT INTO public."user" VALUES ('3a3c20f4-4f9a-11ed-bdc3-0242ac120002', 'Kushagra Singh', 'kushagra.singh@getfareye.com', '1999-08-20', 'random');
INSERT INTO public."user" VALUES ('3a3c1d66-4f9a-11ed-bdc3-0242ac120007', 'Test user 1', 'test1@gmail.com', '2022-10-19', 'esfdcaxz');
INSERT INTO public."user" VALUES ('3a3c1d66-4f9a-11ed-bdc3-0242ac120008', 'Test user 2', 'test2@gmail.com', '2022-10-20', 'ds');


--
-- TOC entry 2869 (class 2606 OID 16414)
-- Name: coupons coupons_pkey; Type: CONSTRAINT; Schema: public; Owner: assignment
--

ALTER TABLE ONLY public.coupons
    ADD CONSTRAINT coupons_pkey PRIMARY KEY (id);


--
-- TOC entry 2873 (class 2606 OID 16443)
-- Name: product_review key; Type: CONSTRAINT; Schema: public; Owner: assignment
--

ALTER TABLE ONLY public.product_review
    ADD CONSTRAINT key PRIMARY KEY (product_id, user_id);


--
-- TOC entry 2877 (class 2606 OID 16468)
-- Name: order_item order_item_pkey; Type: CONSTRAINT; Schema: public; Owner: assignment
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_item_pkey PRIMARY KEY (order_id, product_id);


--
-- TOC entry 2875 (class 2606 OID 16448)
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: assignment
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (order_id);


--
-- TOC entry 2865 (class 2606 OID 16401)
-- Name: product_category product_category_pkey; Type: CONSTRAINT; Schema: public; Owner: assignment
--

ALTER TABLE ONLY public.product_category
    ADD CONSTRAINT product_category_pkey PRIMARY KEY (product_category_id);


--
-- TOC entry 2871 (class 2606 OID 16430)
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: assignment
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


--
-- TOC entry 2867 (class 2606 OID 16406)
-- Name: transactions transactions_pkey; Type: CONSTRAINT; Schema: public; Owner: assignment
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_pkey PRIMARY KEY (transaction_id);


--
-- TOC entry 2863 (class 2606 OID 16393)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: assignment
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 2879 (class 2606 OID 16431)
-- Name: product category; Type: FK CONSTRAINT; Schema: public; Owner: assignment
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT category FOREIGN KEY (category_id) REFERENCES public.product_category(product_category_id);


--
-- TOC entry 2883 (class 2606 OID 16454)
-- Name: orders coupon_foreign_key; Type: FK CONSTRAINT; Schema: public; Owner: assignment
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT coupon_foreign_key FOREIGN KEY (coupon_id) REFERENCES public.coupons(id);


--
-- TOC entry 2884 (class 2606 OID 16495)
-- Name: order_item order_item_fk; Type: FK CONSTRAINT; Schema: public; Owner: assignment
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_item_fk FOREIGN KEY (order_id) REFERENCES public.orders(order_id);


--
-- TOC entry 2885 (class 2606 OID 16500)
-- Name: order_item order_item_fk_1; Type: FK CONSTRAINT; Schema: public; Owner: assignment
--

ALTER TABLE ONLY public.order_item
    ADD CONSTRAINT order_item_fk_1 FOREIGN KEY (product_id) REFERENCES public.product(id);


--
-- TOC entry 2880 (class 2606 OID 16505)
-- Name: product_review product_review_fk; Type: FK CONSTRAINT; Schema: public; Owner: assignment
--

ALTER TABLE ONLY public.product_review
    ADD CONSTRAINT product_review_fk FOREIGN KEY (product_id) REFERENCES public.product(id);


--
-- TOC entry 2881 (class 2606 OID 16510)
-- Name: product_review product_review_fk_1; Type: FK CONSTRAINT; Schema: public; Owner: assignment
--

ALTER TABLE ONLY public.product_review
    ADD CONSTRAINT product_review_fk_1 FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- TOC entry 2878 (class 2606 OID 16480)
-- Name: transactions transactions_fk; Type: FK CONSTRAINT; Schema: public; Owner: assignment
--

ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transactions_fk FOREIGN KEY (order_id) REFERENCES public.orders(order_id);


--
-- TOC entry 2882 (class 2606 OID 16449)
-- Name: orders user_foreign_key; Type: FK CONSTRAINT; Schema: public; Owner: assignment
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT user_foreign_key FOREIGN KEY (user_id) REFERENCES public."user"(id);


-- Completed on 2022-10-21 14:00:13 IST

--
-- PostgreSQL database dump complete
--

