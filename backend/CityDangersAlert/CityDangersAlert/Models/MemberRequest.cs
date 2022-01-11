using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CityDangersAlert.Models
{
    public class MemberRequest
    {
        public int memberId { get; set; }
        public string? memberFirstName { get; set; }
        public string? memberName { get; set; }
        public string? memberEmail { get; set; }
        public string? memberPassword { get; set; }
        public string? memberCNP { get; set; }
        public int? memberPoints { get; set; }
        public string? memberCode { get; set; }
        public string? memberPhone { get; set; }
    }
}
