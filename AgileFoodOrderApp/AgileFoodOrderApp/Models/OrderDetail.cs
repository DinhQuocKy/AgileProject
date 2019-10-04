using System;
using System.Collections.Generic;

namespace AgileFoodOrderApp.Models
{
    public partial class OrderDetail
    {
        public int DetailId { get; set; }
        public int OrderId { get; set; }
        public int FoodId { get; set; }
        public int Quantity { get; set; }

        public virtual Food Food { get; set; }
        public virtual Order Order { get; set; }
    }
}
