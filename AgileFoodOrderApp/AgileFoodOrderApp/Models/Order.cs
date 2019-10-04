using System;
using System.Collections.Generic;

namespace AgileFoodOrderApp.Models
{
    public partial class Order
    {
        public Order()
        {
            OrderDetail = new HashSet<OrderDetail>();
        }

        public int OrderId { get; set; }
        public string CusName { get; set; }
        public string CusPhone { get; set; }
        public string CusAddress { get; set; }
        public int TotalPrice { get; set; }
        public DateTime OrderAt { get; set; }
        public bool? OrderStatus { get; set; }

        public virtual ICollection<OrderDetail> OrderDetail { get; set; }
    }
}
