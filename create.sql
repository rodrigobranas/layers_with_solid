drop table branas.installment;
drop table branas.transaction;
create table branas.transaction (
	code text primary key,
	amount numeric,
	number_installments integer,
	payment_method text,
	date timestamp default now()
);
create table branas.installment (
	code text references branas.transaction (code),
	number integer,
	amount numeric,
	primary key (code, number)
);
