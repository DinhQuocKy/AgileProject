using System;
using System.Collections.Generic;

namespace AgileFoodOrderApp.Models
{
    public partial class Food
    {
        public Food()
        {
            OrderDetail = new HashSet<OrderDetail>();
        }

        public int FoodId { get; set; }
        public string FoodName { get; set; }
        public int FoodPrice { get; set; }
        public string FoodImage { get; set; }

        public virtual ICollection<OrderDetail> OrderDetail { get; set; }
    }
}
