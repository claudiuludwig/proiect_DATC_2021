using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using Newtonsoft.Json;
using Team5StackWonder.Infrastructure;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;

namespace Team5StackWonder.API.Controllers
{
	public class MemberController : Controller
	{
		private readonly IMemberRepository _memberRepository;

		public MemberController(IMemberRepository memberRepository)
		{
			_memberRepository = memberRepository;
		}

		[HttpGet("/members")]
		public List<Member> GetMembers()
		{
			var members = new List<Member>();
			try
			{
				members = _memberRepository.GetMembers().ToList();
				return members;
			}
			catch (Exception ex)
			{
				return members;
			}
		}

		[HttpPost("/members")]
		public async Task<IActionResult> AddMember([FromBody] Member request)
		{
			try
			{
				var member = new Member()
				{
					memberName = request.memberName,
					memberFirstName = request.memberFirstName,
					memberCNP = request.memberCNP,
					memberEmail = request.memberEmail,
					memberPassword = request.memberPassword,
					memberPhone = request.memberPhone
				};
				await _memberRepository.AddMember(member);
				return Ok();
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}
	}
}
