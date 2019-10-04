create database FoodOrder
go
use FoodOrder
go

--TABLE----------------------------------------------------
create table Food(
	FoodID int identity primary key,
	FoodName nvarchar(100) not null,
	FoodPrice int not null,
	FoodImage varchar(200) not null
)
go
create table _Order(
	OrderID int identity primary key,
	CusName nvarchar(60) not null, -- Cus = Customer
	CusPhone nvarchar(20) not null,
	CusAddress nvarchar(200) not null,
	TotalPrice int not null,
	OrderAt DateTime not null,
	OrderStatus bit default null -- confirmed or canceled or null 
)
go
create table OrderDetail(
	DetailID int identity primary key,
	OrderID int not null,
	FoodID int not null,
	Quantity int not null,
	CONSTRAINT fk_OrderID FOREIGN KEY (OrderID) REFERENCES _Order (OrderID),
	CONSTRAINT fk_FoodID Foreign key (FoodID) References Food(FoodID)
)
go
------------------------------------------------------------------------



--PROCEDURE----------------------------------------------------------------

-- Add food----------------------------------------------------------------
create procedure SP_AddFood(@FoodName nvarchar(100), @FoodPrice int, @FoodImage varchar(200))
as
begin
	insert into Food(FoodName, FoodPrice, FoodImage) 
	values(@FoodName, @FoodPrice, @FoodImage)
end

---------------------------------------------------------------------------

go

-- Get list Foods----------------------------------------------------------
create procedure SP_GetFoods
as
begin
	Select * from Food
end
go

---------------------------------------------------------------------------

go

--Add Order----------------------------------------------------------------
create procedure SP_AddOrder(@CusName nvarchar(60), 
						  @CusPhone nvarchar(20), 
						  @CusAddress nvarchar(100),
						  @TotalPrice int,
						  @OrderAt datetime)
as
begin
	insert into _Order(CusName, CusPhone, CusAddress, TotalPrice, OrderAt)
	values(@CusName, @CusPhone, @CusAddress, @TotalPrice, @OrderAt)
end

---------------------------------------------------------------------------

go

--Update Order Status(Confirm or Cancel)------------------------------------
create procedure SP_UpdateOrderStatus(@OrderID int, @OrderStatus bit)
as
begin
	update _Order set OrderStatus = @OrderStatus where OrderID = @OrderID
end

----------------------------------------------------------------------------

go

-- Get list orders---------------------------------------------------------
create procedure SP_GetOrders
as
begin
	Select * from _Order
end

---------------------------------------------------------------------------

go

-- Add Order Detail--------------------------------------------------------
create procedure SP_AddOrderDetail(@OrderID int,
								   @FoodID int,
								   @Quatity int)
as
begin
	insert into OrderDetail(OrderID, FoodID, Quantity) 
	values(@OrderID, @FoodID, @Quatity)
end

--------------------------------------------------------------------------

go

-- Get Order Detail by OrderID-------------------------------------
create procedure SP_GetOrderDetail(@OrderID int)
as
begin
	Select FoodName, FoodPrice, Quantity 
	from OrderDetail join Food on OrderDetail.FoodID = Food.FoodID 
	where OrderID=@OrderID
end

----------------------------------------------------------------------

