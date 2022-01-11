using CityDangersAlert.Data;
using CityDangersAlert.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CityDangersAlert.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemberController : ControllerBase
    {
        private CityDangersAlertDBContext _dbContext;
        public MemberController(CityDangersAlertDBContext _dbContext)
        {
            this._dbContext = _dbContext;
        }

        [HttpGet("GetMembers")]
        public IActionResult Get()
        {
            try
            {
                var members = _dbContext.tblMembers.ToList();
                if(members.Count == 0)
                {
                    return StatusCode(404, "No members found");
                }

                return Ok(members);
            }
            catch(Exception)
            {
                return StatusCode(500, "An error has occured");
            }
        }

        [HttpPost("CreateMember")]
        public IActionResult Create([FromBody] MemberRequest request)
        {
            return Ok();
        }

        [HttpPut("UpdateMember")]
        public IActionResult Update([FromBody] MemberRequest request)
        {
            return Ok();
        }

        [HttpDelete("DeleteMember/{id}")]
        public IActionResult Delete(int id)
        {
            return Ok();
        }

    }
}
