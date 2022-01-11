using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CityDangersAlert.Models
{
    public class CardRequest
    {
        public int cardId { get; set; }
        public string? cardImage { get; set; }
        public string? cardTitle { get; set; }
        public string? cardSubtitle { get; set; }
        public int? cardVotes { get; set; }
        public int memberId { get; set; }
    }
}
